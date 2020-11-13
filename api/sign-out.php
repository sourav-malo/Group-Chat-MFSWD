<?php
  // Headers
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/Users.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate Users Object
  $users = new Users($db);

  // Start Session and Invoke signOut Method
  session_start();
  $users->signOut();

  echo json_encode(array('status' => 'Success')); // Return success message
?>