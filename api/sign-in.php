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

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->username) && isset($data->password)) {
    // Set Properties
    $users->username = $data->username;
    $users->password = $data->password;

    // Read Single User
    $stmt = $users->readSingle();

    // Valid Login
    if($stmt->rowCount()) {
      // Get Result
      $result = $stmt->fetch(PDO::FETCH_ASSOC);

      // Set session for user
      session_start();
      $_SESSION['user']['id'] = $result['id'];
      $_SESSION['user']['firstName'] = $result['first_name'];
      $_SESSION['user']['lastName'] = $result['last_name'];
      $_SESSION['user']['username'] = $result['username'];
      $_SESSION['user']['password'] = $result['password'];
      $_SESSION['user']['createdAt'] = $result['created_at'];
      $_SESSION['user']['haveImg'] = $result['have_image'];
      $_SESSION['user']['isActive'] = $result['is_active'];

      echo json_encode(array('status' => 'Success')); // Return success message
    } else {
      echo json_encode(array('status' => 'Failure')); // Return failure message
    }
  } else {
    echo json_encode(array('status' => 'Failure')); // Return failure message
  }
?>