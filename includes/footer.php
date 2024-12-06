<?php if (isset($jsFiles) && is_array($jsFiles)): ?>
        <?php foreach ($jsFiles as $js): ?>
            <script src="assets/js/<?php echo $js; ?>.js"></script>
        <?php endforeach; ?>
    <?php endif; ?>
</body>
</html>