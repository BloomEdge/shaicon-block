=== Shaicon Block ===
Contributors:      shakibdshy, bloomedge24
Tags:              icon, shaicon, icon block, SVG, SVG block, block
Requires at least: 6.4
Tested up to:      6.6
Requires PHP:      7.4
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

== Shaicon Block Plugin for WordPress ==

The Shaicon Block plugin simplifies the process of adding custom SVG icons and graphics to the WordPress block editor (Gutenberg). It offers the following key features:

=== Features ===

* 290+ Native WordPress Icons: Access a library of native WordPress icons, including social logos.
* 120+ Solar Icons: To enhance your WordPress project, leverage the Solar Icon library for additional icons and graphics.
* Custom SVG Support: Use your own custom SVG icons or graphics.
* Icon Controls: Enjoy convenient controls for linking, rotating, aligning, adjusting colors, borders, padding, and margins.
* Site Editor Compatibility: The plugin works seamlessly with the Site Editor.
* No Additional Block Library Required: Built using native WordPress components.
* Future-Proof: As WordPress core evolves, the plugin will receive additional functionality.
* Custom Icon Libraries: Register your own custom icon library.

=== Stay Connected ===
* [View on GitHub](https://github.com/BloomEdge/shaicon-block)

=== Screenshots ===
1. Shaicon Block Includes Icon Consols such as Color, Size, rotation, alignment, padding and border-radius view screenshot-1.png
2. Include WordPress Icon and Solar Icon Library view screenshot-2.png
3. Use the `quick inserter` to pick the icon you need view screenshot-3.png


== Frequently Asked Questions ==

= Why is my icon not changing color? =

Shaicon Block includes controls for the icon's color and background. However, if your SVG icon has hard-coded color/fill values, the plugin will respect those instead of any applied custom colors.

= Why is the block not working for certain users? =

WordPress only allows Administrators and Editors to save "Unfiltered HTML" content, which includes SVGs. Shaicon Block will not work properly for users who are at the Author level or lower.

Note that WordPress multisite installations have additional restrictions. "Unfiltered HTML" is restricted to Super Admins on multisite. To enable "Unfiltered HTML" content for site Administrators and Editors, you will need to use a [code snippet](https://kellenmace.com/add-unfiltered_html-capability-to-admins-or-editors-in-wordpress-multisite/), the [Unfiltered MU](https://wordpress.org/plugins-wp/unfiltered-mu/) plugin, or something similar. Regrettably, this is a WordPress restriction and needs to be handled outside of Shaicon Block.

== Changelog ==

= 1.0.0 =

* Initial release 🎉
