<?php
namespace SFI\Inc;

class Admin {
    public function __construct() {
        //Generate Sunset Admin Page & Sub Pages
        add_action( 'admin_menu', [ $this, 'add_admin_page'] );
        //Activate custom settings
        add_action( 'admin_init', [ $this, 'custom_settings'] );
        //Register Styles
        add_action( 'admin_enqueue_scripts', [ $this, 'enqueue' ] );
    }

    public function add_admin_page() {

        //Generate Sunset Admin Page
        add_menu_page( 'Forms Options', 'Forms Options', 'manage_options', 'shppb_forms', [$this, 'forms_create_page'], 'dashicons-text-page', 110 );

        // Generate Sunset Admin Sub Pages
        //add_submenu_page( 'shppb_forms', 'Forms Options', 'Settings', 'manage_options', 'shppb_forms', [$this, 'forms_create_page'] );
    }

    public function enqueue() {
        wp_register_style( 'sfi-admin', SFI_PLUGIN_URL . 'assets/admin/css/styles.css' );
        wp_enqueue_style( 'sfi-admin' );

        wp_enqueue_script( 'jquery' );
        wp_enqueue_script( 'sfi-metaboxes', SFI_PLUGIN_URL . 'assets/admin/js/metaboxes.js', array( 'jquery' ), SFI_VERSION, true );
    }

    public function custom_settings() {
        //Sidebar Options
        register_setting( 'shppb-forms-settings-group', 'mail_host' );
        register_setting( 'shppb-forms-settings-group', 'mail_user_name' );
        register_setting( 'shppb-forms-settings-group', 'mail_password' );
        register_setting( 'shppb-forms-settings-group', 'mail_port' );
        register_setting( 'shppb-forms-settings-group', 'mail_smtp_secure' );
        register_setting( 'shppb-forms-settings-group', 'from_email' );
        register_setting( 'shppb-forms-settings-group', 'from_name' );
        register_setting( 'shppb-forms-settings-group', 'recipient_email' );
        register_setting( 'shppb-forms-settings-group', 'recipient_name' );
        register_setting( 'shppb-forms-settings-group', 'mail_subject' );
        register_setting( 'shppb-forms-settings-group', 'mail_body' );

        add_settings_section( 'shppb-forms-options', 'Forms Option', [$this, 'forms_options'], 'shppb_forms');

        add_settings_field( 'shppb-mail-host',           'Mail Host',        [$this, 'mail_host'],           'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-user-name',      'Mail User Name',   [$this, 'mail_user_name'],      'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-password',       'Mail Password',    [$this, 'mail_password'],       'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-port',           'Port',             [$this, 'mail_port'],           'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-smtp-secure',    'SMTP Secure',      [$this, 'mail_smtp_secure'],    'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-from-email',     'From Email',       [$this, 'mail_from_email'],     'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-from-name',      'From Name',        [$this, 'mail_from_name'],      'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-recipient-email','Recipient Email',  [$this, 'mail_recipient_email'],'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-recipient-name', 'Recipient Name',   [$this, 'mail_recipient_name'], 'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-subject',        'Mail Subject',     [$this, 'mail_subject'],        'shppb_forms', 'shppb-forms-options');
        add_settings_field( 'shppb-mail-body',           'Mail Body',        [$this, 'mail_body'],           'shppb_forms', 'shppb-forms-options');
    }

    // Sidebar Options Functions
    public function forms_options() {
        echo 'Forms Mail Settings';
    }

    /** Fields */
    public function mail_host() {
        echo '<input type="text" name="mail_host" value="'.esc_attr(get_option( 'mail_host' )).'" placeholder="Host" />';
    }
    public function mail_user_name() {
        echo '<input type="text" name="mail_user_name" value="'.esc_attr(get_option( 'mail_user_name' )).'" placeholder="User Name" />';
    }
    public function mail_password() {
        echo '<input type="password" name="mail_password" value="'.esc_attr(get_option( 'mail_password' )).'" placeholder="Mail Password" />';
    }
    public function mail_port() {
        echo '<input type="text" name="mail_port" value="'.esc_attr(get_option( 'mail_port' )).'" placeholder="465 or 587" />';
    }
    public function mail_smtp_secure() {
        echo '<input type="text" name="mail_smtp_secure" value="'.esc_attr(get_option( 'mail_smtp_secure' )).'" placeholder="Smtp secure (ssl)" />';
    }
    public function mail_from_email() {
        echo '<input type="text" name="from_email" value="'.esc_attr(get_option( 'from_email' )).'" placeholder="From email" />';
    }
    public function mail_from_name() {
        echo '<input type="text" name="from_name" value="'.esc_attr(get_option( 'from_name' )).'" placeholder="From name" />';
    }
    public function mail_recipient_email() {
        echo '<textarea name="recipient_email" placeholder="Recipient emails. Please enter each address on a new line" style="min-height:100px;height:100px">'.esc_attr( get_option( 'recipient_email' ) ).'</textarea>';
    }
    public function mail_recipient_name() {
        echo '<textarea name="recipient_name" placeholder="Recipient Names. Please enter each Name on a new line" style="min-height:100px;height:100px">'.esc_attr( get_option( 'recipient_name' ) ).'</textarea>';
    }
    public function mail_subject() {
        echo '<input type="text" name="mail_subject" value="'.esc_attr(get_option( 'mail_subject' )).'" placeholder="Mail subject" />';
    }
    public function mail_body() {
        echo '<textarea name="mail_body" placeholder="Mail body" style="min-height:100px;height:100px">'.esc_attr(get_option( 'mail_body' )).'</textarea>';
    }
    // Fields

    /** Form Page */
    public function forms_create_page() {
        require_once( SFI_PLUGIN_PATH . '/inc/templates/shppb-forms-admin.php' );
    }

    /** Setting Page */
    public function forms_settings_page() {
        echo '<h1 style="width: 100px; height: 100px; background: blue;">Settings Page</h1>';
    }
}

