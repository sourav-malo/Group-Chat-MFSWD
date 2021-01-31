<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// Include Database  and messages ffile 
include_once('../config/Database.php');
include_once('../models/Users.php');
//  Database and connection 
$database= new Database();
$db=$database->connect();
//  Instanciate Messages object
$users=new Users($db);
// Get row posted data 
$data = json_decode(file_get_contents("php://input"));
session_start();
 $users->is_type=$data->is_type;
 $users->id=$_SESSION['user']['id'];
    if($users->updateIsType()){
        echo json_encode(
            array('status'=>'Update sucessfully')
        );
    }
    // else{
    //     echo json_encode(
    //         array('status'=>'Update failed')
    //     );
    // }


?>