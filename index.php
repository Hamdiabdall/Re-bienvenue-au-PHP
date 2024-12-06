<?php
session_start();
$pageTitle = 'Tetris 404';
$lang = 'fr';
$cssFiles = ['404', 'tetris'];
$jsFiles = ['tetris'];
?>

<?php include 'includes/header.php'; ?>
<?php include 'templates/tetris.php'; ?>
<?php include 'includes/footer.php'; ?>