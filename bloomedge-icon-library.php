<?php

/**
 * Plugin Name:       Bloomedge Icon Block Library
 * Description:       More then 1000 free svg icons library.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            BloomEdge
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bloomedge-icon-library
 *
 * @package Bloomedge
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

function bloomedge_icon_block_category($categories)
{
	return array_merge(
		array(
			array(
				'slug' => 'bloomedge-icon-library',
				'title' => __('BloomEdge Icon Library', 'bloomedge'),
				'icon'  => 'portfolio',
			),
		),
		$categories
	);
}
add_filter('block_categories_all', 'bloomedge_icon_block_category', 10, 2);

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {

	global $wp_version;
	if ($wp_version !== '6.5.2') {
		return $data;
	}

	$filetype = wp_check_filetype($filename, $mimes);

	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
}, 10, 4);

function cc_mime_types($mimes)
{
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg()
{
	echo '<style type="text/css">
        .attachment-266x266, .thumbnail img {
					width: 100% !important;
					height: auto !important;
        }
        </style>';
}
add_action('admin_head', 'fix_svg');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bloomedge_bloomedge_icon_library_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'bloomedge_bloomedge_icon_library_block_init');
