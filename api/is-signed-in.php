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
    // Session star and Invoked  Signed in method 
    session_start();
   $active_status=$users->isSignedIn();

        if($active_status == true){
          
            echo json_encode(array("status" => "success"));
        }
        else{
         
            echo json_encode(array("status" => "Failed"));
        }
 







?>