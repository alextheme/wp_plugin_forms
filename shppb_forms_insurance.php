<?php
/**
    Plugin Name: Shppb Forms Insurance
    Plugin URI: #
    Description: Survey forms for auto, home, life, and other insurance
    Version: 1.0.2
    Author: Oleksandr Borymskyi
    Author URI: https://alextheme.github.io/
    Licence: GPLv2 or later
    Text-Domain: shppb-forms-insurance
*/

if( ! defined( 'ABSPATH' ) ) exit(); // No direct access allowed

/**
 * Require Autoloader
 */
require_once 'vendor/autoload.php';

require_once 'inc/Shortcode.php';
require_once 'inc/Admin.php';

use SFI\Inc\Shortcode;
use SFI\Inc\Admin;

final class Shppb_Forms_Insurance {
    const VERSION = '1.0.2';
    public function __construct() {
        $this->plugin_constants();
        register_activation_hook( __FILE__, [ $this, 'activate' ] );
        register_deactivation_hook( __FILE__, [ $this, 'deactivate' ] );
        add_action( 'plugins_loaded', [ $this, 'init_plugin' ] );
    }
    public function plugin_constants() {
        define( 'SFI_VERSION', self::VERSION );
        define( 'SFI_TEXT_DOMAIN', 'shppb-forms-insurance' );
        define( 'SFI_PLUGIN_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
        define( 'SFI_PLUGIN_URL', trailingslashit( plugins_url( '', __FILE__ ) ) );
        define( 'SFI_NONCE', 'b?le*;K7.T2jk_*(+3&[G[xAc8O~Fv)2T/Zk9N:GKBkn$piN0.N%N~X91VbCn@.4' );
    }

    /**
     * Щоб ініціалізувати тільки єдиний екземпляр класу
     * Singletone Instance
     */
    public static function init() {
        static $instance = false;
        if( !$instance ) $instance = new self();
        return $instance;
    }

    public function activate() {
        flush_rewrite_rules();
    }

    public function deactivate() {
        flush_rewrite_rules();
    }

    public function init_plugin() {
        // init
        new Shortcode();
        new Admin();
    }
}

/**
 * Initialize Main Plugin
 * @since 1.0.0
 */
function s_forms_shppb() {
    return Shppb_Forms_Insurance::init();
}

s_forms_shppb();






