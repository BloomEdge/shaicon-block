<?php

/**
 * Plugin Name:       Bloom Icon Block
 * Description:       Effortlessly add SVG icons and graphics to the WordPress block editor.
 * Requires at least: 6.3
 * Requires PHP:      7.0
 * Version:           1.8.0
 * Author:            BloomEdge
 * Author URI:        https://www.bloomedge.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bloom-icon-block
 *
 * @package           Bloom Icon Block
 */

/**
 * Registers Bloom Icon Block using the metadata loaded from the `block.json`
 * file. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function bloomedge_icon_block_init()
{
	register_block_type(__DIR__ . '/build');

	// Load available translations.
	wp_set_script_translations('bloomedge-icon-block-editor-script-js', 'bloom-icon-block');
}
add_action('init', 'bloomedge_icon_block_init');

function tabler_icon_register_custom_icons()
{
	wp_enqueue_script(
		'register-tabler-icon-icons',
		plugins_url('/src/icons/tabler-icons.js', __FILE__),
		['wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor'],
		filemtime(plugin_dir_path(__FILE__) . '/src/icons/tabler-icons.js'),
		true
	);
}
add_action('enqueue_block_assets', 'tabler_icon_register_custom_icons');

/**
 * Adds Bloom Icon Block to the list of blocks that should be wrapped in a list item
 * if the block is placed in a Navigation menu. This ensures that custom blocks like
 * Bloom Icon Block are correctly formatted within Navigation blocks.
 *
 * @since 1.8.0
 * 
 * @param array $blocks An array of block names that are allowed to be listed within a Navigation block.
 * @return array The modified array of block names, including 'bloomedge/bloom-icon-block'.
 */
function bloomedge_icon_block_add_to_navigation_listable_blocks($blocks)
{
	$blocks[] = 'bloomedge/bloom-icon-block';
	return $blocks;
}
add_filter('block_core_navigation_listable_blocks', 'bloomedge_icon_block_add_to_navigation_listable_blocks');
