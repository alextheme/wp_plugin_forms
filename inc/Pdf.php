<?php
namespace SFI\Inc;

//define('K_PATH_IMAGES', dirname(__FILE__) . '/assets/images/icons/');

use \PHPMailer\PHPMailer\PHPMailer;
use \PHPMailer\PHPMailer\SMTP;


class Pdf {
    private $folder;
    private $pdf_file;
    private $title;
    private $car_make;
    private $user_name;
    private $content;
    private $id;
    private $img;


    public function __construct() {
        $this->set_variable();
        $this->folder    = $this->create_folder();
        $this->pdf_file = $this->create_pdf();
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

//        $this->img       = K_PATH_IMAGES . $this->id . '.png';
    }

    private function create_folder() {
        $wp_upload_dir =  wp_upload_dir();
        $user_folder = wp_get_current_user();
        $form_pdf_folder = $wp_upload_dir['basedir'] . '/form_pdf';

        if (!file_exists($form_pdf_folder)) {
            mkdir($form_pdf_folder);
        }

        if ($user_folder->display_name) {
            $user_name = $user_folder->display_name;
        } else {
            $user_name = 'anonymous';
        }

        // The actual folder
        $folder = $form_pdf_folder . '/' . $user_name;

        if (!file_exists($folder)) {
            mkdir( $folder );
        }

        return $folder;
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


//        // $pdf->writeHTML($html, true, false, true, false, '');
//
//        // add a page
//        $this->pdf->AddPage();
//
//        $html = '<h4>Second page</h4>';
//
//        $this->pdf->writeHTML($html, true, false, true, false, '');
//
//        // reset pointer to the last page
//        $this->pdf->lastPage();

        //Close and output PDF document
        $pdf_file_path = $this->folder . '/example_' . date('YmdHis') . '.pdf';

//        $this->pdf->Output( $this->file_pdf, 'I'); // show in browser
        $pdf->Output( $pdf_file_path, 'F'); // save file

        return $pdf_file_path;
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

        $mail->addAttachment($this->pdf_file);


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
