<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="viewport" content="width=device-width, user-scalable=no">


  <meta name="theme-color" content="#6200ee" />

  <link rel="stylesheet" type="text/css" href="./public/css/style.css">
  <title>PHP Demo</title>

</head>

<body class="body-sideSheetx body-bodyBarx body-banner darkThemex" id="body">

  <!-- BODY --> 
   <?php include "./html/components/drawer.html"    ?>
   <?php include "./html/components/appbar.html"    ?>
   <?php include "./html/components/leftnav.html"   ?>
   <?php include "./html/components/bottomnav.html" ?>


  <!-- COMPONENTS --> 
   <?php include "./html/components/scrim.html"     ?>
   <?php include "./html/components/backdrop.html"  ?>
   <?php include "./html/components/snack.html"     ?>
   <?php include "./html/components/dialog.html"    ?>
   <?php include "./html/components/menu.html"      ?>


  <!-- PAGES --> 
   <?php include "./html/page/home.html" ?>


  <!-- FULLCONT --> 
   <?php include "./html/fullcont/punch-in.html" ?>























</body>
</html>

<script src="./public/src/bundle.js"></script>
