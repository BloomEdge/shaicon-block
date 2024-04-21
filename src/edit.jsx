import { __ } from "@wordpress/i18n";
import { isEmpty, isNumber } from 'lodash';
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	ContrastChecker,
	InspectorControls,
	JustifyToolbar,
	withColors,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown, // eslint-disable-line
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
	__experimentalLinkControl as LinkControl, // eslint-disable-line
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles, // eslint-disable-line
} from "@wordpress/block-editor";
import {
	DropdownMenu,
	ExternalLink,
	Button,
	Modal,
	Placeholder,
	MenuGroup,
	MenuItem,
	__experimentalScrollable as Scrollable,
	__experimentalScrollable as View,
	SearchControl,
	RangeControl,
	TextControl,
	Toolbar,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	ToolbarDropdownMenu,
	ToolbarItem,
} from "@wordpress/components";
import { useEffect, useRef, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { displayShortcut, isKeyboardEvent } from '@wordpress/keycodes';
import { applyFilters } from '@wordpress/hooks';
import {
	IconCloudUpload,
	IconAdjustmentsAlt,
	IconCode,
	IconFlipHorizontal,
	IconFlipVertical,
	IconLink,
	IconPhotoEdit,
	IconRotateClockwise2,
	IconBolt,
	IconArrowUp,
	IconArrowRight

} from "@tabler/icons-react";

import "./editor.scss";
import BrandIcon from "./icon";

export default function Edit({
	clientId,
	attributes,
	iconBackgroundColor,
	iconColor,
	setAttributes,
	setIconBackgroundColor,
	setIconColor,
}) {
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
	const [isOpen, setOpen] = useState(false);
	const [searchInput, setSearchInput] = useState('');
	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	const handleClose = (i) => {
		closeModal();
		setAttributes({ icon: i });
	}

	const iconList = [];

	for (let i = 0; i < 100; i++) {
		iconList.push(
			<div className="be-block-icon-panel__grid-columns" key={i} onClick={() => handleClose(i)}>
				<IconAdjustmentsAlt stroke={2} />
				<span>Name: {i + 1}</span>
			</div>
		)
	}

	console.log("Name:", iconName);

	useEffect(() => {
		// If percentWidth is set (deprecated in v1.4.0), set as width value
		// and remove the attribute.
		if (percentWidth) {
			setAttributes({
				width: `${percentWidth}%`,
				percentWidth: undefined,
			});
		}
	});

	// Allowed types for the current WP_User
	const { allowedMimeTypes, mediaUpload } = useSelect((select) => {
		const { getSettings } = select('core/block-editor');

		// In WordPress 6.1 and lower, allowedMimeTypes returns
		// null in the post editor, so need to use getEditorSettings.
		// TODO: Remove once minimum version is bumped to 6.2
		const { getEditorSettings } = select('core/editor');

		return {
			allowedMimeTypes: getSettings().allowedMimeTypes
				? getSettings().allowedMimeTypes
				: getEditorSettings().allowedMimeTypes,
			mediaUpload: getSettings().mediaUpload,
		};
	}, []);

	const issvgUploadAllowed = allowedMimeTypes
		? Object.values(allowedMimeTypes).includes('image/svg+xml')
		: false;

	function setRotate(value) {
		const currentValue = isNumber(value) ? value : 0;
		let newValue = currentValue + 90;

		if (currentValue === 270) {
			newValue = 0;
		}

		setAttributes({ rotate: newValue });
	}

	function startEditing(event) {
		event.preventDefault();
		setIsEditingURL(true);
	}

	function unlink() {
		setAttributes({
			linkUrl: undefined,
			linkTarget: undefined,
			linkRel: undefined,
		});
		setIsEditingURL(false);
	}

	function onToggleOpenInNewTab(value) {
		const newLinkTarget = value ? '_blank' : undefined;

		let updatedRel = linkRel;
		if (newLinkTarget && !linkRel) {
			updatedRel = NEW_TAB_REL;
		} else if (!newLinkTarget && linkRel === NEW_TAB_REL) {
			updatedRel = undefined;
		}

		setAttributes({
			linkTarget: newLinkTarget,
			linkRel: updatedRel,
		});
	}

	function onKeyDown(event) {
		if (isKeyboardEvent.primary(event, 'k')) {
			startEditing(event);
		} else if (isKeyboardEvent.primaryShift(event, 'k')) {
			unlink();
			iconRef.current?.focus();
		}
	}

	const enableCustomIcons = applyFilters(
		'iconBlock.enableCustomIcons',
		true
	);

	const replaceDropdown = (
		<DropdownMenu
			icon=""
			popoverProps={{
				className: 'outermost-icon-block__replace-popover is-alternate',
			}}
			text={__('Replace', 'icon-block')}
		>
			{({ onClose }) => (
				<>
					<MenuGroup>
						<MenuItem
							onClick={() => {
								setInserterOpen(true);
								onClose(true);
							}}
							icon=<IconBolt />
						>
							{__('Browse icon library', 'icon-block')}
						</MenuItem>
						{issvgUploadAllowed && (
							<MediaUpload
								onSelect={(media) => {
									parseUploadedMediaAndSetIcon(
										media,
										attributes,
										setAttributes
									);
									onClose(true);
								}}
								allowedTypes={['image/svg+xml']}
								render={({ open }) => (
									<MenuItem
										onClick={open}
										icon=<IconPhotoEdit />
									>
										{__(
											'Open Media Library',
											'icon-block'
										)}
									</MenuItem>
								)}
							/>
						)}
						{enableCustomIcons && (
							<MenuItem
								onClick={() => {
									setCustomInserterOpen(true);
									onClose(true);
								}}
								icon=<IconCode />
							>
								{__('Add/edit custom icon', 'icon-block')}
							</MenuItem>
						)}
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							onClick={() => {
								setAttributes({
									icon: undefined,
									iconName: undefined,
								});
								onClose(true);
							}}
						>
							{__('Clear icon', 'icon-block')}
						</MenuItem>
					</MenuGroup>
				</>
			)}
		</DropdownMenu>
	);

	const blockProps = useBlockProps();

	return (
		<>
			<div {...blockProps}>
				<BlockControls group="block">
					<JustifyToolbar
						allowedControls={['left', 'center', 'right']}
						value={itemsJustification}
						onChange={(value) =>
							setAttributes({ itemsJustification: value })
						}
					/>					
				</BlockControls>

				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							name="link"
							icon={<IconLink />}
							title={__('Link', 'icon-block')}
							shortcut={displayShortcut.primary('k')}
							onClick={startEditing}
							// isActive={isURLSet}
						/>
					</ToolbarGroup>
					<ToolbarGroup className="components-toolbar-group">
						<ToolbarButton
							className={`outermost-icon-block__rotate-button-${rotate}`}
							icon={<IconRotateClockwise2 />}
							label={__('Rotate', 'icon-block')}
							onClick={() => setRotate(rotate)}
							isPressed={rotate}
						/>
						<ToolbarButton
							icon={<IconFlipHorizontal />}
							label={__('Flip Horizontal', 'icon-block')}
							onClick={() =>
								setAttributes({
									flipHorizontal: !flipHorizontal,
								})
							}
							isPressed={flipHorizontal}
						/>
						<ToolbarButton
							icon={<IconFlipVertical />}
							label={__('Flip Vertical', 'icon-block')}
							onClick={() =>
								setAttributes({
									flipVertical: !flipVertical,
								})
							}
							isPressed={flipVertical}
						/>
					</ToolbarGroup>
					<ToolbarGroup>
						{enableCustomIcons || isSVGUploadAllowed ? (
							replaceDropdown
						) : (
							<ToolbarButton
								onClick={() => {
									setInserterOpen(true);
								}}
							>
								{__('Replace', 'icon-block')}
							</ToolbarButton>
						)}
					</ToolbarGroup>
				</BlockControls>



				{!icon ? (
					<Placeholder
						icon={<BrandIcon />}
						instructions="Choose Icon or Drag images, upload new ones or select files from your library."
						label="BloomEdge Icon Library"
					>
						<div>
							<Button
								variant="primary"
								onClick={openModal}
								style={{ gap: "10px" }}
							>
								Icon Library
								<IconCloudUpload stroke={2} />
							</Button>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => console.log("selected", media)}
									allowedTypes={["image/svg", "image"]}
									value={""}
									render={({ open }) => (
										<Button onClick={open}>Insert Custom Icon</Button>
									)}
								/>
							</MediaUploadCheck>
						</div>
					</Placeholder>
				) : (
					<div onClick={openModal}>Name: {icon}</div>
				)}
			</div>

			{isOpen && (
				<Modal
					title="BloomEdge Icon Library"
					onRequestClose={closeModal}
					isFullScreen
					className="be-block-icon__modal"
				>
					<div className="be-block-icon-panel">
						<aside className="be-block-icon-panel__sidebar">
							<Scrollable
								scrollDirection="y"
								style={{
									width: "280px",
									height: "100%"
								}}
							>
								<View
									style={{
										backgroundColor: "#fff",
										height: 750,
										position: "relative",
										width: 280,
									}}
								>
									<MenuGroup label="Tabler Icons">
										<MenuItem>All</MenuItem>
										<MenuItem>Animals</MenuItem>
										<MenuItem>Arrows</MenuItem>
										<MenuItem>Badges</MenuItem>
										<MenuItem>Setting 2</MenuItem>
										<MenuItem>Setting 2</MenuItem>
										<MenuItem>Setting 2</MenuItem>
									</MenuGroup>
								</View>
							</Scrollable>
						</aside>

						<div className="be-block-icon-panel__searchbar">
							<SearchControl
								__nextHasNoMarginBottom
								value={searchInput}
								onChange={setSearchInput}
								placeholder="Search 4500 outline icons"
							/>
							<RangeControl
								__nextHasNoMarginBottom
								initialPosition={24}
								label="Size"
								max={300}
								min={0}
							/>
						</div>

						<div className="be-block-icon-panel__content">
							<div className="be-block-icon-panel__grid">
								{iconList}
							</div>
						</div>
					</div>
				</Modal>
			)}


		</>
	);
}
