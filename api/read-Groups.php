<?php 
  header('Content-Type:application/json');
  include_once '../config/Database.php';
  include_once '../models/Groups.php';

  //Create Instance Database and connect
  $database=new Database();
   $db=$database->connect();

  //  Create Groups  instance and object 
  $groups= new Groups($db);

      // creat instance read group all message 
       $stmt=$groups->read_groups();
       $post_arr=array();
       $post_arr['data']=array();

       //Get result;
       while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $groups_item=array(
              'id'=>$id,
               'name'=>$name,
               'short_name'=>$short_name,
               'created_at'=>$created_at,
               'have_image'=>$have_image
            );
            //Push item array in the data array
            array_push($post_arr['data'],$groups_item);
       }
       
      echo json_encode($post_arr);
?>