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
  $check_status=$users->activeStatus();
  if($check_status){
      echo json_encode(array('status'=>'Online'));
  }
  else{
    echo json_encode(array('status'=>'Offline'));
  }
?>