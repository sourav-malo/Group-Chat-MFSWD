<?php 
   header('Content-Type:application/json');

   include_once '../config/Database.php';
   include_once '../models/Messages.php';
 
   // Instantiate DB & connect
   $database = new Database();
   $db = $database->connect();
 
   // Instantiate Users Object
   $messages = new Messages($db);
   
   // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));


  if(isset($data->id)) {
    // Set Properties
    $messages->id= $data->id;

    // Read Single User
     $stmt = $messages->read_last_message_allgroups();
      
     // Get Result
      $post_arr=array();
      $post_arr['data']=array();

      //Get result;
      while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
           extract($row);
           $groups_item=array(
             'id'=>$id,
              'first_name'=>$first_name,
              'username'=>$username,
              'message'=>$message,
              'sent_at'=>$sent_at
           );
          //  Push item array in the data array
           array_push($post_arr['data'],$groups_item);
      }
      
     echo json_encode($post_arr);
     
  } else {
    echo json_encode(array('status' => 'Failure')); // Return failure message
  }

?>