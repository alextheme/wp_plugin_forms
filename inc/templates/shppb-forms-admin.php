<h1>Shppb Forms Options</h1>
<?php settings_errors(); ?>

<form method="post" action="options.php" class="shppb-general-form">
    <?php settings_fields( 'shppb-forms-settings-group' ); ?>
    <?php do_settings_sections('shppb_forms'); ?>
    <?php submit_button(); ?>
</form>