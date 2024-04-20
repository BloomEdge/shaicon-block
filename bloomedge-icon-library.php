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

if ( ! defined( 'ABSPATH' ) ) {
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

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function bloomedge_bloomedge_icon_library_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'bloomedge_bloomedge_icon_library_block_init' );
