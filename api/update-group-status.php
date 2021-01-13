<?php 
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Max-Age: 3600");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
  include_once '../config/Database.php';
  include_once '../models/Group_members.php';

  //Create Instance Database and connect
  $database=new Database();
   $db=$database->connect();

        //  Create Group_members instance and object 
         $group_members= new Group_members($db);

      // Get row posted data 
         $data = json_decode(file_get_contents("php://input"));
         session_start();
         $group_members->user_id=$_SESSION['user']['id'];
         $group_members->group_id=$data->group_id;

         if($group_members->update_group_status()){
            echo json_encode(
                array('message'=>'Message send sucessfully')
            );
        }
?>