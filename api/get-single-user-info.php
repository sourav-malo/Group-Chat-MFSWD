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

$data = json_decode(file_get_contents('php://input'));
$users->id=$data->id;
 
// Create Instatiate is_type 
$stmt=$users->getSingleUserInfo();
  

$row=$stmt->rowCount();
if($row>0){
    while($result=$stmt->fetch(PDO::FETCH_ASSOC)){
        echo json_encode(array(
            "id"=>$result['id'],
            "first_name"=>$result['first_name'],
            "last_name"=>$result['last_name'],
            "username"=>$result['username']
        ));
    }
}
?>