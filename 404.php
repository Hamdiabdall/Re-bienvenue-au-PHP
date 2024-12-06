<?php
http_response_code(404);
$pageTitle = '404 Error';
$lang = 'en';
$cssFiles = ['404_final'];
?>

<?php include 'includes/header.php'; ?>
<?php include 'templates/404.php'; ?>
<?php include 'includes/footer.php'; ?>