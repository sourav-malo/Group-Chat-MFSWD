<?php
header('Content-Type: application/json');
session_start();

echo json_encode(array(
  'id' => $_SESSION['user']['id'], 
  'first_name' => $_SESSION['user']['first_name'],
  'last_name' => $_SESSION['user']['last_name'],
  'username' => $_SESSION['user']['username'],
  'password' => $_SESSION['user']['password'],
  'created_at' => $_SESSION['user']['created_at'],
  'have_image' => $_SESSION['user']['have_image'],
  'is_active' => $_SESSION['user']['is_active']
));


?>