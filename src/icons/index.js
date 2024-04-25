/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';
import {
	addCard,
	addSubmenu,
	alignCenter,
	alignJustify,
	alignLeft,
	alignNone,
	alignRight,
	archive,
	arrowDown,
	arrowLeft,
	arrowRight,
	arrowUp,
	atSymbol,
	aspectRatio,
	audio,
	backup,
	blockDefault,
	blockTable,
	border,
	box,
	brush,
	bug,
	button,
	buttons,
	calendar,
	cancelCircleFilled,
	caption,
	capturePhoto,
	captureVideo,
	category,
	chartBar,
	check,
	chevronDown,
	chevronLeft,
	chevronRight,
	chevronRightSmall,
	chevronUp,
	chevronUpDown,
	classic,
	close,
	closeSmall,
	cloudUpload,
	cloud,
	code,
	cog,
	color,
	column,
	columns,
	comment,
	commentAuthorAvatar,
	commentAuthorName,
	commentContent,
	commentEditLink,
	commentReplyLink,
	copy,
	cover,
	create,
	crop,
	currencyDollar,
	currencyEuro,
	currencyPound,
	customPostType,
	desktop,
	dragHandle,
	drawerLeft,
	drawerRight,
	download,
	edit,
	external,
	file,
	filter,
	flipHorizontal,
	flipVertical,
	formatBold,
	formatCapitalize,
	formatIndent,
	formatIndentRTL,
	formatItalic,
	formatListBullets,
	formatListBulletsRTL,
	formatListNumbered,
	formatListNumberedRTL,
	formatLtr,
	formatLowercase,
	formatOutdent,
	formatOutdentRTL,
	formatRtl,
	formatStrikethrough,
	formatUnderline,
	formatUppercase,
	fullscreen,
	gallery,
	globe,
	grid,
	group,
	handle,
	heading,
	help,
	helpFilled,
	inbox,
	institution,
	home,
	html,
	image,
	info,
	insertAfter,
	insertBefore,
	justifyLeft,
	justifyCenter,
	justifyRight,
	justifySpaceBetween,
	justifyStretch,
	key,
	keyboardClose,
	keyboardReturn,
	layout,
	lifesaver,
	lineDashed,
	lineDotted,
	lineSolid,
	link,
	linkOff,
	list,
	listItem,
	listView,
	lock,
	lockOutline,
	lockSmall,
	login,
	loop,
	mapMarker,
	media,
	mediaAndText,
	megaphone,
	menu,
	mobile,
	more,
	moreHorizontal,
	moreHorizontalMobile,
	moreVertical,
	moveTo,
	navigation,
	overlayText,
	pageBreak,
	customLink,
	page,
	pages,
	paragraph,
	payment,
	percent,
	positionCenter,
	positionLeft,
	positionRight,
	pencil,
	people,
	pin,
	plugins,
	plusCircleFilled,
	plusCircle,
	plus,
	post,
	postAuthor,
	postCategories,
	postContent,
	postComments,
	postCommentsCount,
	postCommentsForm,
	postDate,
	postExcerpt,
	postFeaturedImage,
	postList,
	postTerms,
	previous,
	next,
	preformatted,
	pullLeft,
	pullRight,
	pullquote,
	queryPagination,
	queryPaginationNext,
	queryPaginationNumbers,
	queryPaginationPrevious,
	quote,
	receipt,
	redo,
	removeBug,
	removeSubmenu,
	replace,
	reset,
	resizeCornerNE,
	reusableBlock,
	rotateLeft,
	rotateRight,
	row,
	rss,
	search,
	seen,
	separator,
	settings,
	shadow,
	share,
	shield,
	shortcode,
	shuffle,
	siteLogo,
	stack,
	starEmpty,
	starFilled,
	starHalf,
	store,
	stretchFullWidth,
	styles,
	shipping,
	stretchWide,
	subscript,
	superscript,
	swatch,
	symbol,
	symbolFilled,
	tableColumnAfter,
	tableColumnBefore,
	tableColumnDelete,
	tableRowAfter,
	tableRowBefore,
	tableRowDelete,
	table,
	tag,
	termDescription,
	footer,
	header,
	sidebar,
	textColor,
	tablet,
	tip,
	title,
	tool,
	trash,
	trendingDown,
	trendingUp,
	typography,
	undo,
	ungroup,
	unlock,
	unseen,
	update,
	upload,
	verse,
	video,
	warning,
	widget,
} from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	amazon,
	bandcamp,
	behance,
	chain,
	codepen,
	deviantart,
	dribbble,
	dropbox,
	etsy,
	facebook,
	feed,
	fivehundredpx,
	flickr,
	foursquare,
	goodreads,
	google,
	github,
	instagram,
	lastfm,
	linkedin,
	mail,
	mastodon,
	meetup,
	medium,
	patreon,
	pinterest,
	pocket,
	redditSolid,
	reddit,
	skype,
	snapchat,
	soundcloud,
	spotify,
	telegram,
	threads,
	tiktok,
	tumblr,
	twitch,
	twitter,
	vimeo,
	vk,
	whatsapp,
	wordpress,
	x,
	yelp,
	youtube,
} from './wordpress/social';

// Temporary icon specifications that are not yet in the NPM package.
import { sparkles } from './wordpress/temp';

const wordpressSocialIcons = [
	{
		isDefault: true,
		name: 'wordpress',
		title: 'WordPress',
		icon: wordpress,
		categories: [ 'logos' ],
	},
	{
		name: 'fivehundredpx',
		title: '500px',
		icon: fivehundredpx,
		categories: [ 'logos' ],
	},
	{
		name: 'amazon',
		title: 'Amazon',
		icon: amazon,
		categories: [ 'logos' ],
	},
	{
		name: 'bandcamp',
		title: 'Bandcamp',
		icon: bandcamp,
		categories: [ 'logos' ],
	},
	{
		name: 'behance',
		title: 'Behance',
		icon: behance,
		categories: [ 'logos' ],
	},
	{
		name: 'chain',
		title: 'Link',
		icon: chain,
	},
	{
		name: 'codepen',
		title: 'CodePen',
		icon: codepen,
		categories: [ 'logos' ],
	},
	{
		name: 'deviantart',
		title: 'DeviantArt',
		icon: deviantart,
		categories: [ 'logos' ],
	},
	{
		name: 'dribbble',
		title: 'Dribbble',
		icon: dribbble,
		categories: [ 'logos' ],
	},
	{
		name: 'dropbox',
		title: 'Dropbox',
		icon: dropbox,
		categories: [ 'logos' ],
	},
	{
		name: 'etsy',
		title: 'Etsy',
		icon: etsy,
		categories: [ 'logos' ],
	},
	{
		name: 'facebook',
		title: 'Facebook',
		icon: facebook,
		categories: [ 'logos' ],
	},
	{
		name: 'feed',
		title: 'RSS Feed',
		icon: feed,
		categories: [ 'logos' ],
	},
	{
		name: 'flickr',
		title: 'Flickr',
		icon: flickr,
		categories: [ 'logos' ],
	},
	{
		name: 'foursquare',
		title: 'Foursquare',
		icon: foursquare,
		categories: [ 'logos' ],
	},
	{
		name: 'goodreads',
		title: 'Goodreads',
		icon: goodreads,
		categories: [ 'logos' ],
	},
	{
		name: 'google',
		title: 'Google',
		icon: google,
		categories: [ 'logos' ],
	},
	{
		name: 'github',
		title: 'GitHub',
		icon: github,
		categories: [ 'logos' ],
	},
	{
		name: 'instagram',
		title: 'Instagram',
		icon: instagram,
		categories: [ 'logos' ],
	},
	{
		name: 'lastfm',
		title: 'Last.fm',
		icon: lastfm,
		categories: [ 'logos' ],
	},
	{
		name: 'linkedin',
		title: 'LinkedIn',
		icon: linkedin,
		categories: [ 'logos' ],
	},
	{
		name: 'mail',
		title: 'Mail',
		keywords: [ 'email', 'e-mail' ],
		icon: mail,
	},
	{
		name: 'mastodon',
		title: 'Mastodon',
		icon: mastodon,
		categories: [ 'logos' ],
	},
	{
		name: 'meetup',
		title: 'Meetup',
		icon: meetup,
		categories: [ 'logos' ],
	},
	{
		name: 'medium',
		title: 'Medium',
		icon: medium,
		categories: [ 'logos' ],
	},
	{
		name: 'patreon',
		title: 'Patreon',
		icon: patreon,
		categories: [ 'logos' ],
	},
	{
		name: 'pinterest',
		title: 'Pinterest',
		icon: pinterest,
		categories: [ 'logos' ],
	},
	{
		name: 'pocket',
		title: 'Pocket',
		icon: pocket,
		categories: [ 'logos' ],
	},
	{
		name: 'reddit-solid',
		title: 'Reddit Solid',
		icon: redditSolid,
		categories: [ 'logos' ],
	},
	{
		name: 'reddit',
		title: 'Reddit',
		icon: reddit,
		categories: [ 'logos' ],
	},
	{
		name: 'skype',
		title: 'Skype',
		icon: skype,
		categories: [ 'logos' ],
	},
	{
		name: 'snapchat',
		title: 'Snapchat',
		icon: snapchat,
		categories: [ 'logos' ],
	},
	{
		name: 'soundcloud',
		title: 'SoundCloud',
		icon: soundcloud,
		categories: [ 'logos' ],
	},
	{
		name: 'spotify',
		title: 'Spotify',
		icon: spotify,
		categories: [ 'logos' ],
	},
	{
		name: 'telegram',
		title: 'Telegram',
		icon: telegram,
		categories: [ 'logos' ],
	},
	{
		name: 'threads',
		title: 'Threads',
		icon: threads,
		categories: [ 'logos' ],
	},
	{
		name: 'tiktok',
		title: 'TikTok',
		icon: tiktok,
		categories: [ 'logos' ],
	},
	{
		name: 'tumblr',
		title: 'Tumblr',
		icon: tumblr,
		categories: [ 'logos' ],
	},
	{
		name: 'twitch',
		title: 'Twitch',
		icon: twitch,
		categories: [ 'logos' ],
	},
	{
		isDefault: true,
		name: 'twitter',
		title: 'Twitter',
		icon: twitter,
		categories: [ 'logos' ],
	},
	{
		name: 'vimeo',
		title: 'Vimeo',
		icon: vimeo,
		categories: [ 'logos' ],
	},
	{
		name: 'vk',
		title: 'VK',
		icon: vk,
		categories: [ 'logos' ],
	},
	{
		name: 'whatsapp',
		title: 'WhatsApp',
		icon: whatsapp,
		categories: [ 'logos' ],
	},
	{
		name: 'x',
		title: 'X',
		icon: x,
		categories: [ 'logos' ],
		keywords: [ 'twitter' ],
	},
	{
		name: 'yelp',
		title: 'Yelp',
		icon: yelp,
		categories: [ 'logos' ],
	},
	{
		name: 'youtube',
		title: 'YouTube',
		icon: youtube,
		categories: [ 'logos' ],
	},
];

const wordpressIcons = [
	{
		name: 'addCard',
		title: __( 'Add Card', 'bloom-icon-block' ),
		icon: addCard,
	},
	{
		name: 'addSubmenu',
		title: __( 'Add Submenu', 'bloom-icon-block' ),
		icon: addSubmenu,
		categories: [ 'arrows' ],
	},
	{
		name: 'alignCenter',
		title: __( 'Align Center', 'bloom-icon-block' ),
		icon: alignCenter,
		categories: [ 'editor' ],
	},
	{
		name: 'alignJustify',
		title: __( 'Align Justify', 'bloom-icon-block' ),
		icon: alignJustify,
		categories: [ 'editor' ],
	},
	{
		name: 'alignLeft',
		title: __( 'Align Left', 'bloom-icon-block' ),
		icon: alignLeft,
		categories: [ 'editor' ],
	},
	{
		name: 'alignNone',
		title: __( 'Align None', 'bloom-icon-block' ),
		icon: alignNone,
		categories: [ 'editor' ],
	},
	{
		name: 'alignRight',
		title: __( 'Align Right', 'bloom-icon-block' ),
		icon: alignRight,
		categories: [ 'editor' ],
	},
	{
		name: 'archive',
		title: __( 'Archive', 'bloom-icon-block' ),
		icon: archive,
		categories: [ 'blocks' ],
	},
	{
		name: 'arrowDown',
		title: __( 'Arrow Down', 'bloom-icon-block' ),
		icon: arrowDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowLeft',
		title: __( 'Arrow Left', 'bloom-icon-block' ),
		icon: arrowLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowRight',
		title: __( 'Arrow Right', 'bloom-icon-block' ),
		icon: arrowRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'arrowUp',
		title: __( 'Arrow Up', 'bloom-icon-block' ),
		icon: arrowUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'atSymbol',
		title: __( 'At Symbol', 'bloom-icon-block' ),
		icon: atSymbol,
	},
	{
		name: 'aspectRatio',
		title: __( 'Aspect Ratio', 'bloom-icon-block' ),
		icon: aspectRatio,
		categories: [ 'media' ],
	},
	{
		name: 'audio',
		title: __( 'Audio', 'bloom-icon-block' ),
		icon: audio,
		categories: [ 'media' ],
	},
	{
		name: 'backup',
		title: __( 'Backup', 'bloom-icon-block' ),
		icon: backup,
	},
	{
		name: 'blockDefault',
		title: __( 'Block Default', 'bloom-icon-block' ),
		icon: blockDefault,
		categories: [ 'blocks' ],
	},
	{
		name: 'blockTable',
		title: __( 'Block Table', 'bloom-icon-block' ),
		icon: blockTable,
	},
	{
		name: 'border',
		title: __( 'Border', 'bloom-icon-block' ),
		icon: border,
	},
	{
		name: 'box',
		title: __( 'Box', 'bloom-icon-block' ),
		icon: box,
	},
	{
		name: 'brush',
		title: __( 'Brush', 'bloom-icon-block' ),
		icon: brush,
	},
	{
		name: 'bug',
		title: __( 'Bug', 'bloom-icon-block' ),
		icon: bug,
	},
	{
		name: 'button',
		title: __( 'Button', 'bloom-icon-block' ),
		icon: button,
		categories: [ 'blocks' ],
	},
	{
		name: 'buttons',
		title: __( 'Buttons', 'bloom-icon-block' ),
		icon: buttons,
		categories: [ 'blocks' ],
	},
	{
		name: 'calendar',
		title: __( 'Calendar', 'bloom-icon-block' ),
		icon: calendar,
		categories: [ 'blocks' ],
	},
	{
		name: 'cancelCircleFilled',
		title: __( 'Cancel - Circle Filled', 'bloom-icon-block' ),
		icon: cancelCircleFilled,
	},
	{
		name: 'caption',
		title: __( 'Caption', 'bloom-icon-block' ),
		icon: caption,
	},
	{
		name: 'capturePhoto',
		title: __( 'Capture Photo', 'bloom-icon-block' ),
		icon: capturePhoto,
		categories: [ 'media' ],
	},
	{
		name: 'captureVideo',
		title: __( 'Capture Video', 'bloom-icon-block' ),
		icon: captureVideo,
		categories: [ 'media' ],
	},
	{
		name: 'category',
		title: __( 'Category', 'bloom-icon-block' ),
		icon: category,
		categories: [ 'blocks' ],
	},
	{
		name: 'chartBar',
		title: __( 'Chart Bar', 'bloom-icon-block' ),
		icon: chartBar,
	},
	{
		name: 'check',
		title: __( 'Check', 'bloom-icon-block' ),
		icon: check,
	},
	{
		name: 'chevronDown',
		title: __( 'Chevron Down', 'bloom-icon-block' ),
		icon: chevronDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronLeft',
		title: __( 'Chevron Left', 'bloom-icon-block' ),
		icon: chevronLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronRight',
		title: __( 'Chevron Right', 'bloom-icon-block' ),
		icon: chevronRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronRightSmall',
		title: __( 'Chevron Right - Small', 'bloom-icon-block' ),
		icon: chevronRightSmall,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronUp',
		title: __( 'Chevron Up', 'bloom-icon-block' ),
		icon: chevronUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'chevronUpDown',
		title: __( 'Chevron Up/Down', 'bloom-icon-block' ),
		icon: chevronUpDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'classic',
		title: __( 'Classic', 'bloom-icon-block' ),
		icon: classic,
		categories: [ 'blocks' ],
	},
	{
		name: 'close',
		title: __( 'Close', 'bloom-icon-block' ),
		icon: close,
	},
	{
		name: 'closeSmall',
		title: __( 'Close - Small', 'bloom-icon-block' ),
		icon: closeSmall,
	},
	{
		name: 'cloudUpload',
		title: __( 'Cloud Upload', 'bloom-icon-block' ),
		icon: cloudUpload,
		categories: [ 'arrows' ],
	},
	{
		name: 'cloud',
		title: __( 'Cloud', 'bloom-icon-block' ),
		icon: cloud,
	},
	{
		name: 'code',
		title: __( 'Code', 'bloom-icon-block' ),
		icon: code,
		categories: [ 'blocks' ],
	},
	{
		name: 'cog',
		title: __( 'Cog', 'bloom-icon-block' ),
		icon: cog,
	},
	{
		name: 'color',
		title: __( 'Color', 'bloom-icon-block' ),
		icon: color,
	},
	{
		name: 'column',
		title: __( 'Column', 'bloom-icon-block' ),
		icon: column,
		categories: [ 'blocks' ],
	},
	{
		name: 'columns',
		title: __( 'Columns', 'bloom-icon-block' ),
		icon: columns,
		categories: [ 'blocks' ],
	},
	{
		name: 'comment',
		title: __( 'Comment', 'bloom-icon-block' ),
		icon: comment,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentAuthorAvatar',
		title: __( 'Comment Author Avatar', 'bloom-icon-block' ),
		icon: commentAuthorAvatar,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentAuthorName',
		title: __( 'Comment Author Name', 'bloom-icon-block' ),
		icon: commentAuthorName,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentContent',
		title: __( 'Comment Content', 'bloom-icon-block' ),
		icon: commentContent,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentEditLink',
		title: __( 'Comment Edit Link', 'bloom-icon-block' ),
		icon: commentEditLink,
		categories: [ 'blocks' ],
	},
	{
		name: 'commentReplyLink',
		title: __( 'Comment Reply Link', 'bloom-icon-block' ),
		icon: commentReplyLink,
		categories: [ 'blocks' ],
	},
	{
		name: 'copy',
		title: __( 'Copy', 'bloom-icon-block' ),
		icon: copy,
	},
	{
		name: 'cover',
		title: __( 'Cover', 'bloom-icon-block' ),
		icon: cover,
		categories: [ 'blocks' ],
	},
	{
		name: 'create',
		title: __( 'Create', 'bloom-icon-block' ),
		icon: create,
	},
	{
		name: 'crop',
		title: __( 'Crop', 'bloom-icon-block' ),
		icon: crop,
	},
	{
		name: 'currencyDollar',
		title: __( 'Currency Dollar', 'bloom-icon-block' ),
		icon: currencyDollar,
	},
	{
		name: 'currencyEuro',
		title: __( 'Currency Euro', 'bloom-icon-block' ),
		icon: currencyEuro,
	},
	{
		name: 'currencyPound',
		title: __( 'Currency Pound', 'bloom-icon-block' ),
		icon: currencyPound,
	},
	{
		name: 'customPostType',
		title: __( 'Custom Post Type', 'bloom-icon-block' ),
		icon: customPostType,
	},
	{
		name: 'desktop',
		title: __( 'Desktop', 'bloom-icon-block' ),
		icon: desktop,
		categories: [ 'devices' ],
	},
	{
		name: 'dragHandle',
		title: __( 'Drag Handle', 'bloom-icon-block' ),
		icon: dragHandle,
	},
	{
		name: 'drawerLeft',
		title: __( 'Drawer Left', 'bloom-icon-block' ),
		icon: drawerLeft,
		keywords: [ 'column' ],
	},
	{
		name: 'drawerRight',
		title: __( 'Drawer Right', 'bloom-icon-block' ),
		icon: drawerRight,
		keywords: [ 'column' ],
	},
	{
		name: 'download',
		title: __( 'Download', 'bloom-icon-block' ),
		icon: download,
		categories: [ 'arrows' ],
	},
	{
		name: 'edit',
		title: __( 'Edit', 'bloom-icon-block' ),
		icon: edit,
	},
	{
		name: 'external',
		title: __( 'External', 'bloom-icon-block' ),
		icon: external,
	},
	{
		name: 'file',
		title: __( 'File', 'bloom-icon-block' ),
		icon: file,
	},
	{
		name: 'filter',
		title: __( 'Filter', 'bloom-icon-block' ),
		icon: filter,
		keywords: [ 'triangle' ],
	},
	{
		name: 'flipHorizontal',
		title: __( 'Flip Horizontal', 'bloom-icon-block' ),
		icon: flipHorizontal,
	},
	{
		name: 'flipVertical',
		title: __( 'Flip Vertical', 'bloom-icon-block' ),
		icon: flipVertical,
	},
	{
		name: 'formatBold',
		title: __( 'Format Bold', 'bloom-icon-block' ),
		icon: formatBold,
		categories: [ 'editor' ],
	},
	{
		name: 'formatCapitalize',
		title: __( 'Format Capitalize', 'bloom-icon-block' ),
		icon: formatCapitalize,
		categories: [ 'editor' ],
	},
	{
		name: 'formatIndent',
		title: __( 'Format Indent', 'bloom-icon-block' ),
		icon: formatIndent,
		categories: [ 'editor' ],
	},
	{
		name: 'formatIndentRTL',
		title: __( 'Format Indent RTL', 'bloom-icon-block' ),
		icon: formatIndentRTL,
	},
	{
		name: 'formatItalic',
		title: __( 'Format Italic', 'bloom-icon-block' ),
		icon: formatItalic,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListBullets',
		title: __( 'Format List Bullets', 'bloom-icon-block' ),
		icon: formatListBullets,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListBulletsRTL',
		title: __( 'Format List Bullets RTL', 'bloom-icon-block' ),
		icon: formatListBulletsRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListNumbered',
		title: __( 'Format List Numbered', 'bloom-icon-block' ),
		icon: formatListNumbered,
		categories: [ 'editor' ],
	},
	{
		name: 'formatListNumberedRTL',
		title: __( 'Format List Numbered RTL', 'bloom-icon-block' ),
		icon: formatListNumberedRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatLtr',
		title: __( 'Format LTR', 'bloom-icon-block' ),
		icon: formatLtr,
		categories: [ 'editor' ],
	},
	{
		name: 'formatLowercase',
		title: __( 'Format Lowercase', 'bloom-icon-block' ),
		icon: formatLowercase,
		categories: [ 'editor' ],
	},
	{
		name: 'formatOutdent',
		title: __( 'Format Outdent', 'bloom-icon-block' ),
		icon: formatOutdent,
		categories: [ 'editor' ],
	},
	{
		name: 'formatOutdentRTL',
		title: __( 'Format Outdent RTL', 'bloom-icon-block' ),
		icon: formatOutdentRTL,
		categories: [ 'editor' ],
	},
	{
		name: 'formatRtl',
		title: __( 'Format RTL', 'bloom-icon-block' ),
		icon: formatRtl,
		categories: [ 'editor' ],
	},
	{
		name: 'formatStrikethrough',
		title: __( 'Format Strikethrough', 'bloom-icon-block' ),
		icon: formatStrikethrough,
		categories: [ 'editor' ],
	},
	{
		name: 'formatUnderline',
		title: __( 'Format Underline', 'bloom-icon-block' ),
		icon: formatUnderline,
		categories: [ 'editor' ],
	},
	{
		name: 'formatUppercase',
		title: __( 'Format Uppercase', 'bloom-icon-block' ),
		icon: formatUppercase,
		categories: [ 'editor' ],
	},
	{
		name: 'fullscreen',
		title: __( 'Fullscreen', 'bloom-icon-block' ),
		icon: fullscreen,
		categories: [ 'editor' ],
	},
	{
		name: 'gallery',
		title: __( 'Gallery', 'bloom-icon-block' ),
		icon: gallery,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'globe',
		title: __( 'Globe', 'bloom-icon-block' ),
		icon: globe,
	},
	{
		name: 'grid',
		title: __( 'Grid', 'bloom-icon-block' ),
		icon: grid,
	},
	{
		name: 'group',
		title: __( 'Group', 'bloom-icon-block' ),
		icon: group,
		categories: [ 'blocks' ],
	},
	{
		name: 'handle',
		title: __( 'Handle', 'bloom-icon-block' ),
		icon: handle,
	},
	{
		name: 'heading',
		title: __( 'Heading', 'bloom-icon-block' ),
		icon: heading,
		categories: [ 'blocks' ],
	},
	{
		name: 'help',
		title: __( 'Help', 'bloom-icon-block' ),
		icon: help,
	},
	{
		name: 'helpFilled',
		title: __( 'Help - Filled', 'bloom-icon-block' ),
		icon: helpFilled,
	},
	{
		name: 'inbox',
		title: __( 'Inbox', 'bloom-icon-block' ),
		icon: inbox,
	},
	{
		name: 'institution',
		title: __( 'Institution', 'bloom-icon-block' ),
		icon: institution,
	},
	{
		name: 'home',
		title: __( 'Home', 'bloom-icon-block' ),
		icon: home,
		categories: [ 'blocks' ],
	},
	{
		name: 'html',
		title: __( 'HTML', 'bloom-icon-block' ),
		icon: html,
		categories: [ 'blocks' ],
	},
	{
		isDefault: true,
		name: 'image',
		title: __( 'Image', 'bloom-icon-block' ),
		icon: image,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'info',
		title: __( 'Info', 'bloom-icon-block' ),
		icon: info,
	},
	{
		name: 'insertAfter',
		title: __( 'Insert After', 'bloom-icon-block' ),
		icon: insertAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'insertBefore',
		title: __( 'Insert Before', 'bloom-icon-block' ),
		icon: insertBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyLeft',
		title: __( 'Justify Left', 'bloom-icon-block' ),
		icon: justifyLeft,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyCenter',
		title: __( 'Justify Center', 'bloom-icon-block' ),
		icon: justifyCenter,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyRight',
		title: __( 'Justify Right', 'bloom-icon-block' ),
		icon: justifyRight,
		categories: [ 'editor' ],
	},
	{
		name: 'justifySpaceBetween',
		title: __( 'Justify Space Between', 'bloom-icon-block' ),
		icon: justifySpaceBetween,
		categories: [ 'editor' ],
	},
	{
		name: 'justifyStretch',
		title: __( 'Justify tretch', 'bloom-icon-block' ),
		icon: justifyStretch,
		categories: [ 'editor' ],
	},
	{
		name: 'key',
		title: __( 'Key', 'bloom-icon-block' ),
		icon: key,
	},
	{
		name: 'keyboardClose',
		title: __( 'Keyboard Close', 'bloom-icon-block' ),
		icon: keyboardClose,
		categories: [ 'editor' ],
	},
	{
		name: 'keyboardReturn',
		title: __( 'Keyboard Return', 'bloom-icon-block' ),
		icon: keyboardReturn,
		categories: [ 'editor' ],
	},
	{
		name: 'layout',
		title: __( 'Layout', 'bloom-icon-block' ),
		icon: layout,
	},
	{
		name: 'lifesaver',
		title: __( 'Lifesaver', 'bloom-icon-block' ),
		icon: lifesaver,
	},
	{
		name: 'lineDashed',
		title: __( 'Line Dashed', 'bloom-icon-block' ),
		icon: lineDashed,
	},
	{
		name: 'lineDotted',
		title: __( 'Line Dotted', 'bloom-icon-block' ),
		icon: lineDotted,
	},
	{
		name: 'lineSolid',
		title: __( 'Line Solid', 'bloom-icon-block' ),
		icon: lineSolid,
	},
	{
		name: 'link',
		title: __( 'Link', 'bloom-icon-block' ),
		icon: link,
		categories: [ 'editor' ],
	},
	{
		name: 'linkOff',
		title: __( 'Link Off', 'bloom-icon-block' ),
		icon: linkOff,
		categories: [ 'editor' ],
	},
	{
		name: 'list',
		title: __( 'List', 'bloom-icon-block' ),
		icon: list,
		categories: [ 'blocks' ],
	},
	{
		name: 'listItem',
		title: __( 'List Item', 'bloom-icon-block' ),
		icon: listItem,
		categories: [ 'blocks' ],
	},
	{
		name: 'listView',
		title: __( 'List View', 'bloom-icon-block' ),
		icon: listView,
		categories: [ 'editor' ],
	},
	{
		name: 'lock',
		title: __( 'Lock', 'bloom-icon-block' ),
		icon: lock,
		categories: [ 'editor' ],
	},
	{
		name: 'lockOutline',
		title: __( 'Lock Outline', 'bloom-icon-block' ),
		icon: lockOutline,
		categories: [ 'editor' ],
	},
	{
		name: 'lockSmall',
		title: __( 'Lock Small', 'bloom-icon-block' ),
		icon: lockSmall,
		categories: [ 'editor' ],
	},
	{
		name: 'login',
		title: __( 'Login', 'bloom-icon-block' ),
		icon: login,
	},
	{
		name: 'loop',
		title: __( 'Loop', 'bloom-icon-block' ),
		icon: loop,
		categories: [ 'blocks' ],
	},
	{
		name: 'mapMarker',
		title: __( 'Map Marker', 'bloom-icon-block' ),
		icon: mapMarker,
	},
	{
		name: 'media',
		title: __( 'Media', 'bloom-icon-block' ),
		icon: media,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'mediaAndText',
		title: __( 'Media & Text', 'bloom-icon-block' ),
		icon: mediaAndText,
		categories: [ 'blocks', 'media' ],
	},
	{
		name: 'megaphone',
		title: __( 'Megaphone', 'bloom-icon-block' ),
		icon: megaphone,
	},
	{
		name: 'menu',
		title: __( 'Menu', 'bloom-icon-block' ),
		icon: menu,
	},
	{
		name: 'mobile',
		title: __( 'Mobile', 'bloom-icon-block' ),
		icon: mobile,
		categories: [ 'devices' ],
	},
	{
		name: 'more',
		title: __( 'More', 'bloom-icon-block' ),
		icon: more,
	},
	{
		name: 'moreHorizontal',
		title: __( 'More Horizontal', 'bloom-icon-block' ),
		icon: moreHorizontal,
	},
	{
		name: 'moreHorizontalMobile',
		title: __( 'More Horizontal - Mobile', 'bloom-icon-block' ),
		icon: moreHorizontalMobile,
	},
	{
		name: 'moreVertical',
		title: __( 'More Vertical', 'bloom-icon-block' ),
		icon: moreVertical,
	},
	{
		name: 'moveTo',
		title: __( 'Move To', 'bloom-icon-block' ),
		icon: moveTo,
		categories: [ 'arrows' ],
	},
	{
		name: 'navigation',
		title: __( 'Navigation', 'bloom-icon-block' ),
		icon: navigation,
	},
	{
		name: 'overlayText',
		title: __( 'Overlay Text', 'bloom-icon-block' ),
		icon: overlayText,
	},
	{
		name: 'pageBreak',
		title: __( 'Page Break', 'bloom-icon-block' ),
		icon: pageBreak,
	},
	{
		name: 'customLink',
		title: __( 'Custom Link', 'bloom-icon-block' ),
		icon: customLink,
	},
	{
		name: 'page',
		title: __( 'Page', 'bloom-icon-block' ),
		icon: page,
	},
	{
		name: 'pages',
		title: __( 'Pages', 'bloom-icon-block' ),
		icon: pages,
	},
	{
		name: 'paragraph',
		title: __( 'Paragraph', 'bloom-icon-block' ),
		icon: paragraph,
	},
	{
		name: 'payment',
		title: __( 'Payment', 'bloom-icon-block' ),
		icon: payment,
	},
	{
		name: 'percent',
		title: __( 'Percent', 'bloom-icon-block' ),
		icon: percent,
	},
	{
		name: 'positionCenter',
		title: __( 'Position Center', 'bloom-icon-block' ),
		icon: positionCenter,
	},
	{
		name: 'positionLeft',
		title: __( 'Position Left', 'bloom-icon-block' ),
		icon: positionLeft,
	},
	{
		name: 'positionRight',
		title: __( 'Position Right', 'bloom-icon-block' ),
		icon: positionRight,
	},
	{
		name: 'post',
		title: __( 'Post', 'bloom-icon-block' ),
		icon: post,
	},
	{
		name: 'pencil',
		title: __( 'Pencil', 'bloom-icon-block' ),
		icon: pencil,
	},
	{
		name: 'people',
		title: __( 'People', 'bloom-icon-block' ),
		icon: people,
	},
	{
		name: 'pin',
		title: __( 'Pin', 'bloom-icon-block' ),
		icon: pin,
	},
	{
		name: 'plugins',
		title: __( 'Plugins', 'bloom-icon-block' ),
		icon: plugins,
	},
	{
		name: 'plusCircleFilled',
		title: __( 'Plus Circle - Filled', 'bloom-icon-block' ),
		icon: plusCircleFilled,
	},
	{
		name: 'plusCircle',
		title: __( 'Plus Circle', 'bloom-icon-block' ),
		icon: plusCircle,
	},
	{
		name: 'plus',
		title: __( 'Plus', 'bloom-icon-block' ),
		icon: plus,
	},
	{
		name: 'postAuthor',
		title: __( 'Post Author', 'bloom-icon-block' ),
		icon: postAuthor,
		categories: [ 'blocks' ],
	},
	{
		name: 'postCategories',
		title: __( 'Post Categories', 'bloom-icon-block' ),
		icon: postCategories,
		categories: [ 'blocks' ],
	},
	{
		name: 'postContent',
		title: __( 'Post Content', 'bloom-icon-block' ),
		icon: postContent,
		categories: [ 'blocks' ],
	},
	{
		name: 'postComments',
		title: __( 'Post Comments', 'bloom-icon-block' ),
		icon: postComments,
		categories: [ 'blocks' ],
	},
	{
		name: 'postCommentsCount',
		title: __( 'Post Comment Count', 'bloom-icon-block' ),
		icon: postCommentsCount,
	},
	{
		name: 'postCommentsForm',
		title: __( 'Post Comments Form', 'bloom-icon-block' ),
		icon: postCommentsForm,
		categories: [ 'blocks' ],
	},
	{
		name: 'postDate',
		title: __( 'Post Date', 'bloom-icon-block' ),
		icon: postDate,
		categories: [ 'blocks' ],
	},
	{
		name: 'postExcerpt',
		title: __( 'Post Excerpt', 'bloom-icon-block' ),
		icon: postExcerpt,
		categories: [ 'blocks' ],
	},
	{
		name: 'postFeaturedImage',
		title: __( 'Post Featured Image', 'bloom-icon-block' ),
		icon: postFeaturedImage,
		categories: [ 'blocks' ],
	},
	{
		name: 'postList',
		title: __( 'Post List', 'bloom-icon-block' ),
		icon: postList,
		categories: [ 'blocks' ],
	},
	{
		name: 'postTerms',
		title: __( 'Post Terms', 'bloom-icon-block' ),
		icon: postTerms,
		categories: [ 'blocks' ],
	},
	{
		name: 'previous',
		title: __( 'Previous', 'bloom-icon-block' ),
		icon: previous,
		categories: [ 'arrows' ],
	},
	{
		name: 'next',
		title: __( 'Next', 'bloom-icon-block' ),
		icon: next,
		categories: [ 'arrows' ],
	},
	{
		name: 'preformatted',
		title: __( 'Preformatted', 'bloom-icon-block' ),
		icon: preformatted,
	},
	{
		name: 'pullLeft',
		title: __( 'Pull Left', 'bloom-icon-block' ),
		icon: pullLeft,
	},
	{
		name: 'pullRight',
		title: __( 'Pull Right', 'bloom-icon-block' ),
		icon: pullRight,
	},
	{
		name: 'pullquote',
		title: __( 'Pull Quote', 'bloom-icon-block' ),
		icon: pullquote,
	},
	{
		name: 'queryPagination',
		title: __( 'Query Pagination', 'bloom-icon-block' ),
		icon: queryPagination,
	},
	{
		name: 'queryPaginationNext',
		title: __( 'Query Pagination Next', 'bloom-icon-block' ),
		icon: queryPaginationNext,
		categories: [ 'arrows' ],
	},
	{
		name: 'queryPaginationNumbers',
		title: __( 'Query Pagination Numbers', 'bloom-icon-block' ),
		icon: queryPaginationNumbers,
	},
	{
		name: 'queryPaginationPrevious',
		title: __( 'Query Pagination Previous', 'bloom-icon-block' ),
		icon: queryPaginationPrevious,
		categories: [ 'arrows' ],
	},
	{
		name: 'quote',
		title: __( 'Quote', 'bloom-icon-block' ),
		icon: quote,
		categories: [ 'blocks' ],
	},
	{
		name: 'receipt',
		title: __( 'Receipt', 'bloom-icon-block' ),
		icon: receipt,
	},
	{
		name: 'redo',
		title: __( 'Redo', 'bloom-icon-block' ),
		icon: redo,
		categories: [ 'arrows', 'editor' ],
	},
	{
		name: 'removeBug',
		title: __( 'Remove Bug', 'bloom-icon-block' ),
		icon: removeBug,
	},
	{
		name: 'removeSubmenu',
		title: __( 'Remove Submenu', 'bloom-icon-block' ),
		icon: removeSubmenu,
	},
	{
		name: 'replace',
		title: __( 'Replace', 'bloom-icon-block' ),
		icon: replace,
		categories: [ 'arrows' ],
	},
	{
		name: 'reset',
		title: __( 'Reset', 'bloom-icon-block' ),
		icon: reset,
		keywords: [ 'minus' ],
	},
	{
		name: 'resizeCornerNE',
		title: __( 'Resize Corner', 'bloom-icon-block' ),
		icon: resizeCornerNE,
		categories: [ 'arrows' ],
	},
	{
		name: 'reusableBlock',
		title: __( 'Reusable Block', 'bloom-icon-block' ),
		icon: reusableBlock,
		categories: [ 'arrows' ],
	},
	{
		name: 'rotateLeft',
		title: __( 'Rotate Left', 'bloom-icon-block' ),
		icon: rotateLeft,
		categories: [ 'arrows' ],
	},
	{
		name: 'rotateRight',
		title: __( 'Rotate Right', 'bloom-icon-block' ),
		icon: rotateRight,
		categories: [ 'arrows' ],
	},
	{
		name: 'row',
		title: __( 'Row', 'bloom-icon-block' ),
		icon: row,
	},
	{
		name: 'rss',
		title: __( 'RSS', 'bloom-icon-block' ),
		icon: rss,
	},
	{
		name: 'search',
		title: __( 'Search', 'bloom-icon-block' ),
		icon: search,
		keywords: [ 'magnifying glass' ],
	},
	{
		name: 'seen',
		title: __( 'Seen', 'bloom-icon-block' ),
		icon: seen,
		keywords: [ 'eye', 'visible' ],
	},
	{
		name: 'separator',
		title: __( 'Separator', 'bloom-icon-block' ),
		icon: separator,
		categories: [ 'blocks' ],
	},
	{
		name: 'settings',
		title: __( 'Settings', 'bloom-icon-block' ),
		icon: settings,
	},
	{
		name: 'shadow',
		title: __( 'Shadow', 'bloom-icon-block' ),
		icon: shadow,
		keywords: [ 'sun' ],
	},
	{
		name: 'share',
		title: __( 'Share', 'bloom-icon-block' ),
		icon: share,
	},
	{
		name: 'shield',
		title: __( 'Shield', 'bloom-icon-block' ),
		icon: shield,
	},
	{
		name: 'shortcode',
		title: __( 'Shortcode', 'bloom-icon-block' ),
		icon: shortcode,
		categories: [ 'blocks' ],
	},
	{
		name: 'shuffle',
		title: __( 'Shuffle', 'bloom-icon-block' ),
		icon: shuffle,
	},
	{
		name: 'siteLogo',
		title: __( 'Site Logo', 'bloom-icon-block' ),
		icon: siteLogo,
		categories: [ 'blocks', 'media' ],
	},
	{
		isDefault: true,
		name: 'sparkles',
		title: __( 'Sparkles', 'bloom-icon-block' ),
		icon: sparkles,
	},
	{
		name: 'stack',
		title: __( 'Stack', 'bloom-icon-block' ),
		icon: stack,
	},
	{
		name: 'starEmpty',
		title: __( 'Star Empty', 'bloom-icon-block' ),
		icon: starEmpty,
	},
	{
		name: 'starFilled',
		title: __( 'Star Filled', 'bloom-icon-block' ),
		icon: starFilled,
	},
	{
		name: 'starHalf',
		title: __( 'Star Half', 'bloom-icon-block' ),
		icon: starHalf,
	},
	{
		name: 'store',
		title: __( 'Store', 'bloom-icon-block' ),
		icon: store,
	},
	{
		name: 'stretchFullWidth',
		title: __( 'Stretch Full Width', 'bloom-icon-block' ),
		icon: stretchFullWidth,
		categories: [ 'editor' ],
	},
	{
		name: 'styles',
		title: __( 'Styles', 'bloom-icon-block' ),
		icon: styles,
	},
	{
		isDefault: true,
		name: 'shipping',
		title: __( 'Shipping', 'bloom-icon-block' ),
		icon: shipping,
		keywords: [ 'truck' ],
	},
	{
		name: 'stretchWide',
		title: __( 'Stretch Wide', 'bloom-icon-block' ),
		icon: stretchWide,
		categories: [ 'editor' ],
	},
	{
		name: 'subscript',
		title: __( 'Subscript', 'bloom-icon-block' ),
		icon: subscript,
		categories: [ 'editor' ],
	},
	{
		name: 'superscript',
		title: __( 'Superscript', 'bloom-icon-block' ),
		icon: superscript,
		categories: [ 'editor' ],
	},
	{
		name: 'swatch',
		title: __( 'Swatch', 'bloom-icon-block' ),
		icon: swatch,
	},
	{
		name: 'symbol',
		title: __( 'Symbol', 'bloom-icon-block' ),
		icon: symbol,
	},
	{
		name: 'symbolFilled',
		title: __( 'Symbol - Filled', 'bloom-icon-block' ),
		icon: symbolFilled,
	},
	{
		name: 'tableColumnAfter',
		title: __( 'Table Column After', 'bloom-icon-block' ),
		icon: tableColumnAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'tableColumnBefore',
		title: __( 'Table Column Before', 'bloom-icon-block' ),
		icon: tableColumnBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'tableColumnDelete',
		title: __( 'Table Column Delete', 'bloom-icon-block' ),
		icon: tableColumnDelete,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowAfter',
		title: __( 'Table Row After', 'bloom-icon-block' ),
		icon: tableRowAfter,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowBefore',
		title: __( 'Table Row Before', 'bloom-icon-block' ),
		icon: tableRowBefore,
		categories: [ 'editor' ],
	},
	{
		name: 'tableRowDelete',
		title: __( 'Table Row Delete', 'bloom-icon-block' ),
		icon: tableRowDelete,
		categories: [ 'editor' ],
	},
	{
		name: 'table',
		title: __( 'Table', 'bloom-icon-block' ),
		icon: table,
	},
	{
		name: 'tag',
		title: __( 'Tag', 'bloom-icon-block' ),
		icon: tag,
	},
	{
		name: 'termDescription',
		title: __( 'Term Description', 'bloom-icon-block' ),
		icon: termDescription,
		categories: [ 'blocks' ],
	},
	{
		name: 'footer',
		title: __( 'Footer', 'bloom-icon-block' ),
		icon: footer,
	},
	{
		name: 'header',
		title: __( 'Header', 'bloom-icon-block' ),
		icon: header,
	},
	{
		name: 'sidebar',
		title: __( 'Sidebar', 'bloom-icon-block' ),
		icon: sidebar,
	},
	{
		name: 'textColor',
		title: __( 'Text Color', 'bloom-icon-block' ),
		icon: textColor,
	},
	{
		name: 'tablet',
		title: __( 'Tablet', 'bloom-icon-block' ),
		icon: tablet,
		categories: [ 'devices' ],
	},
	{
		name: 'title',
		title: __( 'Title', 'bloom-icon-block' ),
		icon: title,
	},
	{
		name: 'tip',
		title: __( 'Tip', 'bloom-icon-block' ),
		icon: tip,
	},
	{
		name: 'tool',
		title: __( 'Tool', 'bloom-icon-block' ),
		icon: tool,
	},
	{
		name: 'trash',
		title: __( 'Trash', 'bloom-icon-block' ),
		icon: trash,
	},
	{
		name: 'trendingDown',
		title: __( 'Trending Down', 'bloom-icon-block' ),
		icon: trendingDown,
		categories: [ 'arrows' ],
	},
	{
		name: 'trendingUp',
		title: __( 'Trending Up', 'bloom-icon-block' ),
		icon: trendingUp,
		categories: [ 'arrows' ],
	},
	{
		name: 'typography',
		title: __( 'Typography', 'bloom-icon-block' ),
		icon: typography,
	},
	{
		name: 'undo',
		title: __( 'Undo', 'bloom-icon-block' ),
		icon: undo,
		categories: [ 'arrows', 'editor' ],
	},
	{
		name: 'ungroup',
		title: __( 'Ungroup', 'bloom-icon-block' ),
		icon: ungroup,
		categories: [ 'editor' ],
	},
	{
		name: 'unlock',
		title: __( 'Unlock', 'bloom-icon-block' ),
		icon: unlock,
		categories: [ 'editor' ],
	},
	{
		name: 'unseen',
		title: __( 'Unseen', 'bloom-icon-block' ),
		icon: unseen,
		keywords: [ 'eye', 'hidden' ],
	},
	{
		name: 'update',
		title: __( 'Update', 'bloom-icon-block' ),
		icon: update,
	},
	{
		name: 'upload',
		title: __( 'Upload', 'bloom-icon-block' ),
		icon: upload,
		categories: [ 'arrows' ],
	},
	{
		isDefault: true,
		name: 'verse',
		title: __( 'Verse', 'bloom-icon-block' ),
		icon: verse,
		categories: [ 'blocks' ],
	},
	{
		name: 'video',
		title: __( 'Video', 'bloom-icon-block' ),
		icon: video,
		categories: [ 'media' ],
	},
	{
		name: 'warning',
		title: __( 'Warning', 'bloom-icon-block' ),
		icon: warning,
	},
	{
		name: 'widget',
		title: __( 'Widget', 'bloom-icon-block' ),
		icon: widget,
	},
];

const icons = [
	{
		isDefault: false,
		type: 'wordpress',
		title: __( 'WordPress', 'bloom-icon-block' ),
		icons: [].concat( wordpressSocialIcons, wordpressIcons ),
		categories: [
			{
				name: 'arrows',
				title: __( 'Arrows', 'bloom-icon-block' ),
			},
			{
				name: 'blocks',
				title: __( 'Blocks', 'bloom-icon-block' ),
			},
			{
				name: 'devices',
				title: __( 'Devices', 'bloom-icon-block' ),
			},
			{
				name: 'editor',
				title: __( 'Editor', 'bloom-icon-block' ),
			},
			{
				name: 'logos',
				title: __( 'Logos', 'bloom-icon-block' ),
			},
			{
				name: 'media',
				title: __( 'Media', 'bloom-icon-block' ),
			},
		],
	},
];

// Allow third parties to add their own icon types via filter.
export default function getIcons() {
	return applyFilters( 'iconBlock.icons', icons );
}
