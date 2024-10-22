<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if (isset($_POST['submit'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $subject = htmlspecialchars($_POST['subject']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'josiahdanielle09gallenero@gmail.com';
        $mail->Password = 'idvq gvjg pzsa rvbi';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('josiahdanielle09gallenero@gmail.com', 'Josiah Danielle Gallenero');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = "<h2>Contact Form Submission</h2>
                          <p><strong>Name:</strong> {$name}</p>
                          <p><strong>Email:</strong> {$email}</p>
                          <p><strong>Message:</strong><br>{$message}</p>";

       $mail->send();
        
        echo '<script>
                window.location.href = "index.html?status=success";
              </script>';
    } catch (Exception $e) {
        echo '<script>
                window.location.href = "index.html?status=error";
              </script>';
    }
    exit();
} else {
    echo '<script>
            window.location.href = "index.html?status=error";
          </script>';
    exit();
}