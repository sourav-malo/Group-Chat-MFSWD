<?php 
header('Content-Type:application/json');
// Include Database  and messages ffile 
include_once('../config/Database.php');
include_once('../models/Group_members.php');
//  Database and connection 
$database= new Database();
$db=$database->connect();
//  Instanciate Messages object
$group_members=new Group_members($db);

 // Get raw posted data
$data = json_decode(file_get_contents("php://input"));

if(isset($data->id)) {
    $group_members->group_id = $data->id;
    $stmt = $group_members->is_Type();
    $typing_statuses = array();
    while($result = $stmt->fetch(PDO::FETCH_ASSOC)){
        array_push($typing_statuses, $result);
    }
    echo json_encode($typing_statuses);
} 


?>