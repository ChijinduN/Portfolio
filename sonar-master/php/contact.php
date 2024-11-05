<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields
    $name = test_input($_POST["cf_name"]);
    $email = test_input($_POST["cf_email"]);
    $subject = test_input($_POST["cf_subject"]);
    $message = test_input($_POST["cf_message"]);

    // Validate the email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit();
    }

    // Set the recipient email address
    $to = "chijindunwokolo@gmail.com";

    // Set the email subject
    $email_subject = "New Contact Form Submission: $subject";

    // Build the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Subject: $subject\n\n";
    $email_message .= "Message:\n$message";

    // Set additional headers
    $headers = "From: $email\r\nReply-To: $email";

    // Attempt to send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "Error sending email. Please try again later.";
    }
}

// Function to sanitize input data
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>