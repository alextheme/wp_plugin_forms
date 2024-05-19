<?php

namespace SFI\Inc;

require_once 'metaboxes/metaboxes.php';

class Cpt {
    private $post_type = 'forms_insurance';
    private $taxonomy = 'form_category';

    public function __construct() {
        add_action( 'init', [ $this, 'init_post_type'] );
        add_action( 'init', [ $this, 'init_taxonomies'] );

        add_filter( 'manage_edit-'.$this->post_type.'_columns', [ $this, 'edit_columns' ] );
        add_filter( 'manage_edit-'.$this->post_type.'_sortable_columns', [ $this, 'edit_columns' ] );
        add_action( 'manage_' . $this->post_type . '_posts_custom_column', [ $this, 'render_column' ], 10, 2 );
    }

    public function init_taxonomies() {
        $singular = 'Form Category';
        $multiple = 'Forms Categories';
        $args = array(
            'sort'        => true,
            'args'        => array('orderby' => 'term_order'),
            'hierarchical' => false,
            'labels' => array(
                'name' => $multiple,
                'singular_name' => $singular,
                'search_items' => 'Search ' . $multiple,
                'all_items' => 'All ' . $multiple,
                'parent_item' => 'Parent ' . $singular,
                'parent_item_colon' => 'Parent ' . $singular . ':',
                'edit_item' => 'Edit ', $singular,
                'update_item' => 'Update ' . $singular,
                'add_new_item' => 'Add New ' . $singular,
                'new_item_name' => 'New ' . $singular . ' Name',
                'menu_name' => $singular,
            ),
        );

        register_taxonomy( $this->taxonomy, array( $this->post_type ), $args );
    }

    public function init_post_type() {
        $singular = 'Form Insurance';
        $multiple = 'Forms Insurance';
        $args = array(
            'public' => true,
            'menu_position' => 20,
            'has_archive'   => true,
            'supports'=> array(
                'title',
                'editor',
            ),
            'taxonomies' => array( 'form_type' ),
            'show_in_nav_menus'=> true,
            'menu_icon' => 'dashicons-list-view',
            'labels' => array(
                'name' => $multiple,
                'singular_name' => $singular,
                'not_found'=> 'No ' . $multiple . ' Found',
                'not_found_in_trash'=> 'No ' . $multiple . ' found in Trash',
                'edit_item' => 'Edit ', $singular,
                'search_items' => 'Search ' . $multiple,
                'view_item' => 'View ', $singular,
                'new_item' => 'New ' . $singular,
                'add_new' => 'Add New',
                'add_new_item' => 'Add New ' . $singular,
            ),
        );

        $post_type_id = register_post_type( $this->post_type, $args );
    }

    public function edit_columns( $columns ) {
        //unset( $columns['author'] );
        $columns['form_status'] = 'Status';
        $columns['form_author'] = 'Author Name';
        $columns['form_file'] = 'File';
        return $columns;
    }

    public function render_column( $colname, $cptid ) {

        switch ( $colname ) {
            case 'form_status' :
                echo get_post_meta( $cptid , 'ale_form_status' , true ) === 'on' ? 'Complete' : '<b>During</b>' ;
                break;

            case 'form_author' :
                echo get_post_meta( $cptid , 'ale_form_author' , true );
                break;

            case 'form_file' :
                $args = array(
                    'post_type' => 'attachment',
                    'numberposts' => null,
                    'post_status' => null,
                    'post_parent' => $cptid
                );
                $attachments = get_posts($args);
                if ($attachments) {
                    echo '<ul class="attach_list">';
                    foreach ($attachments as $attachment) {
                        echo '<li>'.wp_get_attachment_link($attachment->ID, 'thumbnail', 0, 0, 'PDF');
                    }
                    echo '</ul>';
                }
                break;
        }
    }
}