<?php  
// Headers
header('Content-Type: application/json');
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


     if(isset($data->id)) {
       // Set Properties
       $users->id= $data->id;
       $check_status=$users->activeStatus();
      if($check_status){
      echo json_encode(array('status'=>'Online'));
        }
      else{
      echo json_encode(array('status'=>'Offline'));
      }
    }
?>