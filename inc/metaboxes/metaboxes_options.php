<?php

/**
 * Add Metaboxes
 * @param array $meta_boxes
 * @return array
 */
function ale_metaboxes($meta_boxes) {

    $meta_boxes = array();

    $prefix = "ale_";

    $meta_boxes[] = array(
        'id'         => 'form_settings_metabox',
        'title'      => 'Form Data',
        'pages'      => array( 'forms_insurance' ), // Post type
        'context'    => 'normal',
        'priority'   => 'high',
        'show_on'    => array(), //array( 'key' => 'page-template', 'value' => array('template-homepage.php'), ), // Specific post templates to display this metabox
        'show_names' => true, // Show field names on the left
        'fields' => array(

            array(
                'name' => 'Name Author Form',
                'desc' => '',
                'id'   => $prefix . 'form_author',
                'std' => '',
                'type'    => 'text_info',
            ),

            array(
                'name' => 'Status',
                'desc' => 'Transaction completion status',
                'id'   => $prefix . 'form_status',
                'std'  => '',
                'type'    => 'checkbox',
            ),

            array(
                'name' => 'File PDF',
                'desc' => '',
                'id'   => $prefix . 'author_of_form',
                'std'  => '',
                'type'    => 'file_list',
            ),


        )
    );

    return $meta_boxes;
}