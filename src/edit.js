/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty, isNumber } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	DropdownMenu,
	ExternalLink,
	MenuGroup,
	MenuItem,
	Popover,
	TextControl,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	__experimentalParseQuantityAndUnitFromRawValue as parseQuantityAndUnitFromRawValue, // eslint-disable-line
} from '@wordpress/components';
import {
	BlockControls,
	ContrastChecker,
	InspectorControls,
	JustifyToolbar,
	MediaUpload,
	useBlockProps,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown, // eslint-disable-line
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
	__experimentalLinkControl as LinkControl, // eslint-disable-line
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles, // eslint-disable-line
} from '@wordpress/block-editor';
import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import {
	code,
	flipHorizontal as flipH,
	flipVertical as flipV,
	link,
	media as mediaIcon,
	rotateRight,
} from '@wordpress/icons';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import {
	CustomInserterModal,
	IconDropZone,
	IconPlaceholder,
	InserterModal,
	DimensionControl,
	OptionsPanel,
} from './components';
import {
	flattenIconsArray,
	parseIcon,
	parseUploadedMediaAndSetIcon,
} from './utils';
import { bolt as defaultIcon } from './icons/bolt';
import getIcons from './icons';

const NEW_TAB_REL = 'noreferrer noopener';

/**
 * The edit function for Bloom Icons.
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement}   Element to render.
 */
export function Edit( props ) {
	const {
		clientId,
		attributes,
		iconBackgroundColor,
		iconColor,
		setAttributes,
		setIconBackgroundColor,
		setIconColor,
	} = props;
	const {
		flipHorizontal,
		flipVertical,
		hasNoIconFill,
		icon,
		iconBackgroundColorValue,
		iconColorValue,
		iconName,
		itemsJustification,
		label,
		linkRel,
		linkTarget,
		linkUrl,
		rotate,
		title,
		width,
		height,
		// Deprecated
		percentWidth,
	} = attributes;

	useEffect( () => {
		// If percentWidth is set (deprecated in v1.4.0), set as width value
		// and remove the attribute.
		if ( percentWidth ) {
			setAttributes( {
				width: `${ percentWidth }%`,
				percentWidth: undefined,
			} );
		}
	} );

	// Allowed types for the current WP_User
	const { allowedMimeTypes, mediaUpload } = useSelect( ( select ) => {
		const { getSettings } = select( 'core/block-editor' );

		// In WordPress 6.1 and lower, allowedMimeTypes returns
		// null in the post editor, so need to use getEditorSettings.
		// TODO: Remove once minimum version is bumped to 6.2
		const { getEditorSettings } = select( 'core/editor' );

		return {
			allowedMimeTypes: getSettings().allowedMimeTypes
				? getSettings().allowedMimeTypes
				: getEditorSettings().allowedMimeTypes,
			mediaUpload: getSettings().mediaUpload,
		};
	}, [] );

	const isSVGUploadAllowed = allowedMimeTypes
		? Object.values( allowedMimeTypes ).includes( 'image/svg+xml' )
		: false;

	const { gradientClass, gradientValue, setGradient } = useGradient();

	const [ isInserterOpen, setInserterOpen ] = useState( false );
	const [ isQuickInserterOpen, setQuickInserterOpen ] = useState( false );
	const [ isCustomInserterOpen, setCustomInserterOpen ] = useState( false );
	const [ isEditingURL, setIsEditingURL ] = useState( false );

	// Allow users to disable custom SVG icons.
	const enableCustomIcons = applyFilters(
		'iconBlock.enableCustomIcons',
		true
	);

	const ref = useRef();
	const iconRef = useRef();
	const isURLSet = !! linkUrl;
	const opensInNewTab = linkTarget === '_blank';

	const iconsAll = flattenIconsArray( getIcons() );
	const namedIcon = iconsAll.filter( ( i ) => i.name === iconName );
	let customIcon = defaultIcon;

	if ( icon && isEmpty( namedIcon ) ) {
		customIcon = parseIcon( icon );

		if ( isEmpty( customIcon?.props ) ) {
			customIcon = defaultIcon;
		}
	}

	let printedIcon = ! isEmpty( namedIcon ) ? namedIcon[ 0 ].icon : customIcon;

	// Icons provided by third-parties are generally strings.
	if ( typeof printedIcon === 'string' ) {
		printedIcon = parseIcon( printedIcon );
	}

	function setRotate( value ) {
		const currentValue = isNumber( value ) ? value : 0;
		let newValue = currentValue + 90;

		if ( currentValue === 270 ) {
			newValue = 0;
		}

		setAttributes( { rotate: newValue } );
	}

	function startEditing( event ) {
		event.preventDefault();
		setIsEditingURL( true );
	}

	function unlink() {
		setAttributes( {
			linkUrl: undefined,
			linkTarget: undefined,
			linkRel: undefined,
		} );
		setIsEditingURL( false );
	}

	function onToggleOpenInNewTab( value ) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = linkRel;
		if ( newLinkTarget && ! linkRel ) {
			updatedRel = NEW_TAB_REL;
		} else if ( ! newLinkTarget && linkRel === NEW_TAB_REL ) {
			updatedRel = undefined;
		}

		setAttributes( {
			linkTarget: newLinkTarget,
			linkRel: updatedRel,
		} );
	}

	function onKeyDown( event ) {
		if ( isKeyboardEvent.primary( event, 'k' ) ) {
			startEditing( event );
		} else if ( isKeyboardEvent.primaryShift( event, 'k' ) ) {
			unlink();
			iconRef.current?.focus();
		}
	}

	const replaceDropdown = (
		<DropdownMenu
			icon=""
			popoverProps={ {
				className: 'bloomedge-shaicon-block__replace-popover is-alternate',
			} }
			text={ __( 'Replace', 'shaicon-block' ) }
		>
			{ ( { onClose } ) => (
				<>
					<MenuGroup>
						<MenuItem
							onClick={ () => {
								setInserterOpen( true );
								onClose( true );
							} }
							icon={ defaultIcon }
						>
							{ __( 'Browse icon library', 'shaicon-block' ) }
						</MenuItem>
						{ isSVGUploadAllowed && (
							<MediaUpload
								onSelect={ ( media ) => {
									parseUploadedMediaAndSetIcon(
										media,
										attributes,
										setAttributes
									);
									onClose( true );
								} }
								allowedTypes={ [ 'image/svg+xml' ] }
								render={ ( { open } ) => (
									<MenuItem
										onClick={ open }
										icon={ mediaIcon }
									>
										{ __(
											'Open Media Library',
											'shaicon-block'
										) }
									</MenuItem>
								) }
							/>
						) }
						{ enableCustomIcons && (
							<MenuItem
								onClick={ () => {
									setCustomInserterOpen( true );
									onClose( true );
								} }
								icon={ code }
							>
								{ __(
									'Add/edit custom icon',
									'shaicon-block'
								) }
							</MenuItem>
						) }
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							onClick={ () => {
								setAttributes( {
									icon: undefined,
									iconName: undefined,
								} );
								onClose( true );
							} }
						>
							{ __( 'Clear icon', 'shaicon-block' ) }
						</MenuItem>
					</MenuGroup>
				</>
			) }
		</DropdownMenu>
	);

	const blockControls = (
		<>
			<BlockControls group="block">
				<JustifyToolbar
					allowedControls={ [ 'left', 'center', 'right' ] }
					value={ itemsJustification }
					onChange={ ( value ) =>
						setAttributes( { itemsJustification: value } )
					}
				/>
			</BlockControls>
			{ ( icon || iconName ) && (
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							name="link"
							icon={ link }
							title={ __( 'Link', 'shaicon-block' ) }
							shortcut={ displayShortcut.primary( 'k' ) }
							onClick={ startEditing }
							isActive={ isURLSet }
						/>
					</ToolbarGroup>
					<ToolbarGroup className="components-toolbar-group">
						<ToolbarButton
							className={ `bloomedge-shaicon-block__rotate-button-${ rotate }` }
							icon={ rotateRight }
							label={ __( 'Rotate', 'shaicon-block' ) }
							onClick={ () => setRotate( rotate ) }
							isPressed={ rotate }
						/>
						<ToolbarButton
							icon={ flipH }
							label={ __(
								'Flip Horizontal',
								'shaicon-block'
							) }
							onClick={ () =>
								setAttributes( {
									flipHorizontal: ! flipHorizontal,
								} )
							}
							isPressed={ flipHorizontal }
						/>
						<ToolbarButton
							icon={ flipV }
							label={ __( 'Flip Vertical', 'shaicon-block' ) }
							onClick={ () =>
								setAttributes( {
									flipVertical: ! flipVertical,
								} )
							}
							isPressed={ flipVertical }
						/>
					</ToolbarGroup>
					<ToolbarGroup>
						{ enableCustomIcons || isSVGUploadAllowed ? (
							replaceDropdown
						) : (
							<ToolbarButton
								onClick={ () => {
									setInserterOpen( true );
								} }
							>
								{ __( 'Replace', 'shaicon-block' ) }
							</ToolbarButton>
						) }
					</ToolbarGroup>
				</BlockControls>
			) }
			{ isEditingURL && (
				<Popover
					position="bottom center"
					onClose={ () => {
						setIsEditingURL( false );
						iconRef.current?.focus();
					} }
					anchorRef={ ref?.current }
					focusOnMount={ isEditingURL ? 'firstElement' : false }
				>
					<LinkControl
						className="wp-block-navigation-link__inline-link-input"
						value={ { url: linkUrl, opensInNewTab } }
						onChange={ ( {
							url: newURL = '',
							opensInNewTab: newOpensInNewTab,
						} ) => {
							setAttributes( { linkUrl: newURL } );

							if ( opensInNewTab !== newOpensInNewTab ) {
								onToggleOpenInNewTab( newOpensInNewTab );
							}
						} }
						onRemove={ () => {
							unlink();
							iconRef.current?.focus();
						} }
					/>
				</Popover>
			) }
		</>
	);

	const colorSettings = [
		{
			colorLabel: __( 'Icon color', 'shaicon-block' ),
			colorValue: iconColor.color || iconColorValue,
			onChange: ( colorValue ) => {
				setIconColor( colorValue );
				setAttributes( {
					iconColorValue: colorValue,
				} );
			},
			resetAllFilter: () => {
				setIconColor( undefined );
				setAttributes( { iconColorValue: undefined } );
			},
		},
		{
			colorLabel: __( 'Background color', 'shaicon-block' ),
			colorValue: iconBackgroundColor.color || iconBackgroundColorValue,
			colorGradientValue: gradientValue,
			onChange: ( colorValue ) => {
				setIconBackgroundColor( colorValue );
				setAttributes( {
					iconBackgroundColorValue: colorValue,
				} );
			},
			onGradientChange: setGradient,
			resetAllFilter: () => {
				setIconBackgroundColor( undefined );
				setAttributes( { iconBackgroundColorValue: undefined } );
			},
		},
	];

	const colorGradientSettings = useMultipleOriginColorsAndGradients();

	// In WordPress <=6.2 this will return null, so default to true in those cases.
	const hasColorsOrGradients =
		colorGradientSettings?.hasColorsOrGradients ?? true;

	const inspectorControls = ( icon || iconName ) && (
		<>
			<InspectorControls group="settings">
				<OptionsPanel
					className="bloomedge-shaicon-block__main-settings"
					label={ __( 'Settings', 'shaicon-block' ) }
					options={ [
						{
							attributeSlug: 'label',
							label: __( 'Label', 'shaicon-block' ),
							isDefault: true,
						},
						{
							attributeSlug: 'width',
							label: __( 'Width', 'shaicon-block' ),
							isDefault: true,
						},
						{
							attributeSlug: 'height',
							label: __( 'Height', 'shaicon-block' ),
						},
					] }
					{ ...props }
				>
					<TextControl
						label={ __( 'Label', 'shaicon-block' ) }
						help={ __(
							'Briefly describe the icon to help screen reader users.',
							'shaicon-block'
						) }
						value={ label || '' }
						onChange={ ( value ) =>
							setAttributes( { label: value } )
						}
					/>
					<DimensionControl
						label={ __( 'Width', 'shaicon-block' ) }
						value={ width }
						onChange={ ( value ) =>
							setAttributes( { width: value } )
						}
					/>
					{ height !== undefined && (
						<DimensionControl
							label={ __( 'Height', 'shaicon-block' ) }
							value={ height }
							onChange={ ( value ) =>
								setAttributes( { height: value } )
							}
							units={ [ 'px', 'em', 'rem', 'vh', 'vw' ] }
						/>
					) }
				</OptionsPanel>
			</InspectorControls>
			{ hasColorsOrGradients && (
				<InspectorControls group="color">
					{ colorSettings.map(
						( {
							colorLabel,
							colorValue,
							colorGradientValue,
							onChange,
							onGradientChange,
							resetAllFilter,
						} ) => (
							<ColorGradientSettingsDropdown
								key={ `icon-block-color-${ colorLabel }` }
								__experimentalIsRenderedInSidebar
								settings={ [
									{
										label: colorLabel,
										colorValue,
										gradientValue: colorGradientValue,
										onColorChange: onChange,
										onGradientChange,
										isShownByDefault: true,
										resetAllFilter,
										enableAlpha: true,
									},
								] }
								panelId={ clientId }
								{ ...colorGradientSettings }
							/>
						)
					) }
					{ ( iconColor.color || iconColorValue ) && (
						<>
							<p className="bloomedge-shaicon-block__color-settings__help">
								{ __(
									'Any color or fill values in the SVG icon itself will take precedent over the chosen color.',
									'shaicon-block'
								) }
							</p>
							<ToggleControl
								className="bloomedge-shaicon-block__color-settings__apply-fill"
								checked={ ! hasNoIconFill }
								label={ __(
									`Apply icon color to fill`,
									'shaicon-block'
								) }
								help={ __(
									'Set the SVG fill value to the chosen icon color. Disable as needed.',
									'shaicon-block'
								) }
								onChange={ () =>
									setAttributes( {
										hasNoIconFill: ! hasNoIconFill,
									} )
								}
							/>
						</>
					) }
					<ContrastChecker
						{ ...{
							textColor: iconColorValue,
							backgroundColor: iconBackgroundColorValue,
						} }
						isLargeText={ false }
					/>
				</InspectorControls>
			) }
			<InspectorControls group="advanced">
				<TextControl
					label={ __( 'Link rel', 'shaicon-block' ) }
					value={ linkRel || '' }
					onChange={ ( value ) =>
						setAttributes( { linkRel: value } )
					}
				/>
				<TextControl
					label={ __( 'Title attribute', 'shaicon-block' ) }
					className="bloomedge-shaicon-block__title-control"
					value={ title || '' }
					onChange={ ( value ) => setAttributes( { title: value } ) }
					help={
						<>
							{ __(
								'Describe the role of this icon on the page.',
								'shaicon-block'
							) }
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{ __(
									'Note: many devices and browsers do not display this text',
									'shaicon-block'
								) }
							</ExternalLink>
						</>
					}
				/>
			</InspectorControls>
		</>
	);

	const blockProps = useBlockProps();
	const borderProps = getBorderClassesAndStyles( attributes );
	const themeIconBackgroundColor =
		iconBackgroundColor?.slug || attributes.iconBackgroundColor;
	const themeIconColor = iconColor?.slug || attributes.iconColor;

	const iconClasses = classnames( 'icon-container', borderProps?.className, {
		'has-icon-color': iconColor.color || iconColorValue,
		'has-no-icon-fill-color': hasNoIconFill,
		'has-icon-background-color':
			iconBackgroundColor.color ||
			iconBackgroundColorValue ||
			gradientValue,
		'has-background-gradient': gradientValue,
		[ `has-${ themeIconColor }-color` ]: themeIconColor,
		[ `has-${ themeIconBackgroundColor }-background-color` ]:
			themeIconBackgroundColor,
		[ gradientClass ]: gradientClass,
		[ `items-justified-${ itemsJustification }` ]: itemsJustification,
		[ `rotate-${ rotate }` ]: rotate,
		'flip-horizontal': flipHorizontal,
		'flip-vertical': flipVertical,
	} );

	const [ widthQuantity, widthUnit ] =
		parseQuantityAndUnitFromRawValue( width );

	// Default icon width when there is no height set.
	let iconWidth = ! height ? '48px' : undefined;

	if ( widthQuantity ) {
		iconWidth = widthUnit
			? `${ widthQuantity }${ widthUnit }`
			: `${ widthQuantity }px`;
	}

	const iconStyles = {
		background: gradientValue,
		backgroundColor: iconBackgroundColorValue,
		...blockProps.style,
		...borderProps.style,
		color: iconColorValue,
		width: iconWidth,
		height: height || undefined,

		// Margin is applied to the wrapper container, so unset.
		marginBottom: undefined,
		marginLeft: undefined,
		marginRight: undefined,
		marginTop: undefined,
	};

	// And even though margin is set on the main block div, we need to handle it
	// manually since all other styles are applied to the inner div.
	const blockMargin = {
		marginBottom: blockProps.style?.marginBottom,
		marginLeft: blockProps.style?.marginLeft,
		marginRight: blockProps.style?.marginRight,
		marginTop: blockProps.style?.marginTop,
	};

	const iconMarkup = (
		<>
			{ ! icon && ! iconName ? (
				<IconPlaceholder
					setInserterOpen={ setInserterOpen }
					isQuickInserterOpen={ isQuickInserterOpen }
					setQuickInserterOpen={ setQuickInserterOpen }
					isCustomInserterOpen={ isCustomInserterOpen }
					setCustomInserterOpen={ setCustomInserterOpen }
					attributes={ attributes }
					setAttributes={ setAttributes }
					enableCustomIcons={ enableCustomIcons }
					isSVGUploadAllowed={ isSVGUploadAllowed }
				/>
			) : (
				<div
					ref={ iconRef }
					className={ iconClasses }
					style={ iconStyles }
				>
					{ printedIcon }
				</div>
			) }
		</>
	);

	return (
		<>
			{ blockControls }
			{ inspectorControls }
			<div
				{ ...useBlockProps( {
					className:
						itemsJustification &&
						`items-justified-${ itemsJustification }`,
					ref,
					onKeyDown,
				} ) }
				// This is a bit of a hack. we only want the margin styles
				// applied to the main block div.
				style={ blockMargin }
			>
				{ iconMarkup }
				<IconDropZone
					attributes={ attributes }
					setAttributes={ setAttributes }
					mediaUpload={ mediaUpload }
					isSVGUploadAllowed={ isSVGUploadAllowed }
				/>
			</div>
			<InserterModal
				isInserterOpen={ isInserterOpen }
				setInserterOpen={ setInserterOpen }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			{ enableCustomIcons && (
				<CustomInserterModal
					isCustomInserterOpen={ isCustomInserterOpen }
					setCustomInserterOpen={ setCustomInserterOpen }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			) }
		</>
	);
}

const iconColorAttributes = {
	iconColor: 'icon-color',
	iconBackgroundColor: 'icon-background-color',
};

export default withColors( iconColorAttributes )( Edit );
