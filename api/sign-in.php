<?php
  // Headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
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
      $_SESSION['user']['first_name'] = $result['first_name'];
      $_SESSION['user']['last_name'] = $result['last_name'];
      $_SESSION['user']['username'] = $result['username'];
      $_SESSION['user']['password'] = $result['password'];
      $_SESSION['user']['created_at'] = $result['created_at'];
      $_SESSION['user']['have_image'] = $result['have_image'];
      $_SESSION['user']['is_active'] = $result['is_active'];


      echo json_encode(array('status' => 'Success')); // Return success message
    } else {
      echo json_encode(array('status' => 'Failure')); // Return failure message
    }
  } else {
    echo json_encode(array('status' => 'Failure')); // Return failure message
  }
?>