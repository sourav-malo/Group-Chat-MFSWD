<?php


  // include_once 'config/Database.php';
  // include_once 'models/Users.php';
  // include_once 'api/sign-in.php';
  
  session_start();
  
  if (isset($_SESSION['user']['id'])) {
    header('location: conversation.php');
  }
  

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Group Chat | MFSWD | Home</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/responsive.css" />
  </head>
  <body>
    <div class="container welcome">
      <div class="welcome-section">
        <img
          src="assets/img/page-content/wlcm-bg-logo.png"
          alt=""
          class="wlcm-img-1"
        />
        <a href="#">
          <img
            src="assets/img/page-content/wlcm-logo.png"
            alt="Welcome"
            class="wlcm-img-2"
          />
        </a>
        <h1>Welcome</h1>
        <p>Sign in Your Account</p>
        <img
          src="assets/img/page-content/subtract.png"
          alt=""
          class="wlcm-subtract"
        />
      </div>
      <div class="sign-in-section">
        <img
          src="assets/img/page-content/sign-in-logo.png"
          alt=""
          class="sign-in-logo"
        />
        <h2>
          <span class="bg"><span class="text">Sign in</span></span> Your Account
        </h2>
        <p>sujan_mridha</p>
        <form action="all_conversation.html" id="sign-in-form" class="">
          <input
            type="text"
            placeholder="Username"
            id="username"
            oninput="usernameValidation()"
            required
          />

          <div class="layer"></div>
          <span id="usernameError"></span>
          <input
            type="password"
            placeholder="Password"
            id="password"
            oninput="passwordValidation()"
            required
          />
          <div class="layer"></div>
          <span id="passwordError"></span>
          <input type="submit" value="Submit" id="signInFormSubmit" />
        </form>
        <img
          src="assets/img/page-content/subtract.png"
          alt=""
          class="sign-in-subtract"
        />
      </div>
    </div>

    <script src="assets/js/sign-in.js"></script>
  </body>
</html>