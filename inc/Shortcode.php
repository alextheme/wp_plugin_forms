<?php
namespace SFI\Inc;

/**
 * Short-code to render the entry point on the page.
 * The Vue application will take over from there
 * The data that the Vue application needs will be added to
 * the page as well, so we don't need successive api calls
 * @example [shppb_forms_insurance form='home']
 * [shppb_forms_insurance form="auto"]
 * @param $atts array   form id : auto, home, life, commercial, ...
 */

require_once 'Pdf.php';
use SFI\Inc\Pdf;

class Shortcode {

    public function __construct() {
        // Register Styles and Scripts
        add_action('wp_enqueue_scripts', [$this, 'enqueue']);

        // Register Shortcode
        add_shortcode('shppb_forms_insurance', [$this, 'html']);

        // Set Module Type
        add_filter('script_loader_tag', [$this, 'type_module'], 10, 3);

        // Ajax
        add_action('wp_ajax_form_insurance_ajax', [$this, 'ajax']);
        add_action('wp_ajax_nopriv_form_insurance_ajax', [$this, 'ajax']);
    }

    public function enqueue() {
        wp_enqueue_style('sfi_app_css', SFI_PLUGIN_URL . '/vue_app/dist/assets/css/index.css');
        wp_enqueue_script('sfi_app_js', SFI_PLUGIN_URL . '/vue_app/dist/assets/js/index.js', [],SFI_VERSION,true);

        wp_localize_script( 'sfi_app_js', 'sfi_params', [
            'homeUrl' => home_url(),
            'privacy_policy_link' => 'privacy-policy',
            'terms_use_link' => 'privacy-policy',
            'listed_businesses_link' => '',
            'adminUri' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce(SFI_NONCE),
        ]);
    }

    public function  html( $atts = array(), $content = '' ) {
        extract(shortcode_atts(array(
            'form' => 'home',
        ), $atts));

        $response = '<script>window.formId = "' . $form . '"</script>';
        $response .= '<div id="shbb_forms_app">
            <div class="preloader"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#69669D"></stop><stop offset=".3" stop-color="#69669D" stop-opacity=".9"></stop><stop offset=".6" stop-color="#69669D" stop-opacity=".6"></stop><stop offset=".8" stop-color="#69669D" stop-opacity=".3"></stop><stop offset="1" stop-color="#69669D" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="30" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#69669D" stroke-width="30" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg></div>
        </div>';

        return $response;
    }

    public function type_module($tag, $handle, $src) {
        // the vue code needs type=module.

        if ( 'sfi_app_js' !== $handle ) {
            return $tag;
        }

        // change the script tag by adding type="module" and return it.
        $tag = '<script type="module" src="' . esc_url( $src ) . '"></script>';

        return $tag;
    }

    public function ajax() {

        echo '<div style="width: 100px; height: 100px; background: rgba(0,241,139,0.6)">123</div>';

        check_ajax_referer(SFI_NONCE, 'nonce');

        new Pdf();

        wp_die();
    }

}