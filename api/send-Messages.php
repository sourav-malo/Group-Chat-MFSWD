<?php 
// Header 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// Include Database  and messages ffile 
include_once('../config/Database.php');
include_once('../models/Messages.php');


//  Database and connection 
$database= new Database();
$db=$database->connect();


//  Instanciate Messages object
$messages=new Messages($db);

// Get row posted data 
$data = json_decode(file_get_contents("php://input"));
session_start();
$user_id=$_SESSION['user']['id'];

$messages->group_id=$data->group_id;
$messages->user_id=$user_id;
$messages->message=$data->message;
 //Create post{
    if($messages->send_Messages()){
        echo json_encode(
            array('message'=>'Message send sucessfully')
        );
    }


?>