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
       // Set Properties
       $group_members->group_id=$data->id;

       // Create Instatiate is_type 
       $stmt=$group_members->is_Type();
       
       $row=$stmt->rowCount();
       if($row>0){
           $is_type=false;
           while($result=$stmt->fetch(PDO::FETCH_ASSOC)){
               $status= $result['is_type'];
               if($status=='on'){
                   $is_type=true;
               }
           }
           if($is_type==true){
            echo json_encode(array('status'=>'Typing'));
           }
           else{
            echo json_encode(array('status'=>'notTyping'));
           }
       }
    } 


?>