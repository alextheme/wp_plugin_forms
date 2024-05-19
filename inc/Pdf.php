<?php
namespace SFI\Inc;

use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\SMTP;


class Pdf {
    private $user_folder;
    private $pdf_file_path;
    private $title;
    private $car_make;
    private $user_name;
    private $content;
    private $id;
    private $img;
    private $attach_id;


    public function __construct() {
        $this->set_variable();
        $this->user_folder = $this->create_folder();
        $this->pdf_file_path = $this->create_pdf();
        $this->insert_post();
        $this->send_mail();
    }

    private function set_variable() {
        $id        = $_POST['data']['id'];
        $user_name = $_POST['data']['user_name']; // Array [full_name, last_name]
        $car_make  = $_POST['data']['car_make'];
        $content   = $_POST['data']['content'];

        $this->id        = $id ?? '';
        $this->title     = $id ?? '';
        $this->car_make  = $car_make ?? '';
        $this->user_name = $user_name ?? '';
        $this->content   = $content ?? '';
    }

    private function create_folder() {
        $base_dir = wp_upload_dir()['basedir'];
        $forms_folder = '/form_pdf';
        $user = wp_get_current_user();

        if (!file_exists($base_dir . $forms_folder)) {
            mkdir($base_dir . $forms_folder);
        }

        if ($user->display_name) {
            $user_folder = $forms_folder . '/' . $user->display_name;
        } else {
            $user_folder = $forms_folder . '/anonymous';
        }

        // The actual folder
        $folder = $base_dir . $user_folder;

        if (!file_exists( $folder )) {
            mkdir( $folder );
        }

        return $user_folder;
    }

    private function create_pdf() {
        ob_end_clean();

        // create new PDF document
        $pdf = new \TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

        // set document information
        $pdf->SetCreator(PDF_CREATOR);
        $pdf->SetAuthor('Oleksandr Borymskyi');
        $pdf->SetTitle('PDF file using TCPDF');

        // set default header data
//        $pdf->SetHeaderData(null, 30, $this->title, $this->user_name);

        // set header and footer fonts
        $pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
        $pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

        // set default monospaced font
        $pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

        // set margins
        $pdf->SetMargins(20, 20, 20);
        $pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
        $pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

        // set auto page breaks
        $pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

        // set image scale factor
        $pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

        // add a page
        $pdf->AddPage();

        // Print text using writeHTMLCell()
        $pdf->writeHTMLCell(0, 0, '', '', $this->content, 0, 1, 0, true, '', true);

        //Close and output PDF document
        $pdf_file_path = $this->user_folder . '/quote_' . date('YmdHis') . '.pdf';
        $pdf_file_absolute_path = wp_upload_dir()['basedir'] . $pdf_file_path;

//        $this->pdf->Output( $pdf_file_absolute_path, 'I'); // show in browser
        $pdf->Output( $pdf_file_absolute_path, 'F'); // save file

        //    [basedir] => D:\wamp64\www\wp03/wp-content/uploads
        //    [baseurl] => http://localhost/wp03/wp-content/uploads

        return $pdf_file_path;
    }

    private function insert_post() {

//        1. Створення посту програмно

        global $user_ID;
        $author_name = $_POST['data']['user_name']['full_name'] . ' ' . $_POST['data']['user_name']['last_name'];
        $post_title = ucfirst($_POST['data']['id']) . ' | ' . $author_name;
        $post_content = $_POST['data']['content'];

        $custom_post_form_insurance = array(
            'post_type' => 'forms_insurance',
            'post_title' => $post_title,
            'post_content' => $post_content,
            'post_status' => 'publish',
            'post_date' => date('Y-m-d H:i:s'),
            'post_author' => 1, //$user_ID,

            'comment_status' => 'closed',   // if you prefer
            'ping_status' => 'closed',      // якщо вам більше подобається
        );

        $post_id = wp_insert_post( $custom_post_form_insurance );
        wp_set_post_terms( $post_id, $_POST['data']['id'], 'form_category' );



//        2. Створення PDF-файлу програмно (вище)
//        $this->pdf_file_path



//        3. Завантаження PDF-файлу в медіабібліотеку

        // Завантажуємо PDF файл в медіабібліотеку
        $file_url = wp_upload_dir()['baseurl'] . $this->pdf_file_path;
        $file_path = wp_upload_dir()['basedir'] . $this->pdf_file_path;

        $attachment = array(
            'guid'           => $file_url,
            'post_mime_type' => 'application/pdf',
            'post_title'     => $post_title,
            'post_content'   => '',
            'post_status'    => 'inherit'
        );

        $attach_id = wp_insert_attachment($attachment, $file_path, $post_id);

        // Генеруємо метадані для вкладення
        require_once(ABSPATH . 'wp-admin/includes/image.php');
        $attach_data = wp_generate_attachment_metadata($attach_id, $file_path);
        wp_update_attachment_metadata($attach_id, $attach_data);



//        4. Прикріплення посилання на PDF-файл до посту

        // Отримуємо URL вкладення
//        $pdf_url = wp_get_attachment_url($attach_id);

        // Оновлюємо зміст посту з посиланням на завантаження PDF
//        $post_content = $post_content . '<div class="download_file_link" data-href="'. esc_attr($pdf_url) .'"><a href="' . esc_url($pdf_url) . '" download>Download PDF</a></div>';
//        wp_update_post(array(
//            'ID'           => $post_id,
//            'post_content' => $post_content
//        ));

        update_post_meta( $post_id, 'ale_form_author', htmlspecialchars($author_name) );
    }

    private function send_mail() {
        // https://mailtrap.io/blog/phpmailer-gmail/
        $mail = new PHPMailer();
        $mail->IsSMTP(); // enable SMTP
        $mail->Host         = get_option( 'mail_host' );
        $mail->SMTPAuth     = true; // authentication enabled
        $mail->Username     = get_option( 'mail_user_name' );
        $mail->Password     = get_option( 'mail_password' );
        $mail->Port         = get_option( 'mail_port' ); //465 or 587

        // SMTPDebug - to view proper logging details for success and error messages
        $mail->SMTPDebug    = 1; // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPSecure   = get_option( 'mail_smtp_secure' ); //ssl - secure transfer enabled REQUIRED for Gmail

        $from_email_address = get_option( 'from_email' );
        $recipient_email_address = get_option( 'recipient_email' );
        $from_name          = get_option( 'from_name' );
        $recipient_name     = get_option( 'recipient_name' );

        //sender information
        $mail->setFrom($from_email_address, $from_name);

        //receiver address and name
        $mail->addAddress($recipient_email_address, $recipient_name);


        // Add cc or bcc
        // $mail->addCC('email@mail.com');
        // $mail->addBCC('user@mail.com');

        $mail->addAttachment($this->pdf_file_path);


        $mail->isHTML(true);

        $mail->Subject      = get_option( 'mail_subject' );
        $mail->Body         = get_option( 'mail_body' );

        // Send mail
        if (!$mail->send()) {
            echo 'Email not sent an error was encountered: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent.';
        }

        $mail->smtpClose();
    }
}
