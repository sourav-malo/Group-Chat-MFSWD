<?php 
header('Content-Type:application/json');
// Include Database  and messages ffile 
include_once('../config/Database.php');
include_once('../models/Users.php');
//  Database and connection 
$database= new Database();
$db=$database->connect();
//  Instanciate Messages object
$users=new Users($db);
session_start(); 
$users->id=$_SESSION['user']['id'];
 
// Create Instatiate is_type 
$stmt=$users->is_Type();
  

$row=$stmt->rowCount();
if($row>0){
    while($result=$stmt->fetch(PDO::FETCH_ASSOC)){
        $status= $result['is_type'];
        if($status=='on'){
            echo json_encode(array('status'=>'Typing....'));
        }
    }
}

?>