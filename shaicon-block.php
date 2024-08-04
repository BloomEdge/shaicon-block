<?php

/**
 * Plugin Name:       Shaicon Block
 * Description:       Effortlessly add SVG icons and graphics to the WordPress block editor.
 * Requires at least: 6.3
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Md Habibur Rahman
 * Author URI:        https://github.com/shakibdshy
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       shaicon-block
 *
 * @package           Shaicon Block
 */

/**
 * Registers Shaicon Block using the metadata loaded from the `block.json`
 * file. Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function bloomedge_shaicon_block_init()
{
	register_block_type(__DIR__ . '/build');

	// Load available translations.
	wp_set_script_translations('bloomedge-shaicon-block-editor-script-js', 'shaicon-block');
}
add_action('init', 'bloomedge_shaicon_block_init');

/**
 * Adds Shaicon Block to the list of blocks that should be wrapped in a list item
 * if the block is placed in a Navigation menu. This ensures that custom blocks like
 * Shaicon Block are correctly formatted within Navigation blocks.
 *
 * @since 1.0.0
 *
 * @param array $blocks An array of block names that are allowed to be listed within a Navigation block.
 * @return array The modified array of block names, including 'shakibdshy/shaicon-block'.
 */
function bloomedge_shaicon_block_add_to_navigation_listable_blocks($blocks)
{
	$blocks[] = 'bloomedge/shaicon-block';
	return $blocks;
}
add_filter('block_core_navigation_listable_blocks', 'bloomedge_shaicon_block_add_to_navigation_listable_blocks');
