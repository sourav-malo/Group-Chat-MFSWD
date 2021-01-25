<?php 
header('Content-Type:application/json');
include_once '../config/Database.php';
include_once '../models/Messages.php';
//Create Instance Database and connect
$database=new Database();
$db=$database->connect();


//  Create Message instance and object 
$message= new Messages($db);
$data = json_decode(file_get_contents('php://input'));
if(isset($data->group_id)){
    $message->group_id=$data->group_id;

    
    // creat instance read group all message 
    $result=$message->read_Group_Allmessage();
    if($result->rowCount()){
        $row=$result->fetchAll(PDO::FETCH_ASSOC);
        $post_arr['data']=$row;
        echo json_encode($post_arr);
    }
    else{
        echo json_encode(array('status'=>'failure')); 
    }

}
else{
    echo json_encode(array('status'=>'failure'));
}
?>