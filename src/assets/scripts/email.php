<?php
 
header('Content-type: application/json');
 
$errors = '';
 
if(empty($errors))
{
 
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
 
	$from_email = $request->email;
	$message = $request->message;
    $from_name = $request->name;
    $email_subject = $request->subject;
    $to_email = $request->toEmail;
 
	$contact = "<p><strong>Name:</strong> $from_name</p>
							<p><strong>Email:</strong> $from_email</p>";
	$content = "<p>$message</p>";
 
	$email_body = '<html><body>';
	$email_body .= "$contact $content";
	$email_body .= '</body></html>';
 
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= "From: $from_email\r\n";
 
	mail($to_email,$email_subject,$email_body,$headers);
	header($response_array);
	return $from_email;
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
	header('Location: /error.html');
}
?>