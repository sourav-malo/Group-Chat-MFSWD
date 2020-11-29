<?php 
//Header
  header('Content-type: application/json');
  //Include Database and user file direction
  include_once '../config/Database.php';
  include_once '../models/Users.php';
  //Create Instance Database and connect
  $database=new Database();
   $db=$database->connect();
   // Create User instance and object
   $users = new Users($db);
   //Connect with update status function
      $users->updateActiveStatus();
     echo json_encode(array('status' => 'Success'));
   
?>