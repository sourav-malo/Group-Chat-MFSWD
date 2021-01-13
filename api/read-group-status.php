<?php 
  header('Content-Type:application/json');
  include_once '../config/Database.php';
  include_once '../models/Group_members.php';

  //Create Instance Database and connect
  $database=new Database();
   $db=$database->connect();

        //  Create Group_members instance and object 
         $group_members= new Group_members($db);

         session_start();
         $group_members->users_id=$_SESSION['user']['id'];

      // creat instance read group all message 
       $stmt=$group_members->read_groups_status();
       $post_arr=array();
       $post_arr['data']=array();

       //Get result;
       while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $groups_item=array(
              'group_id'=>$group_id,
               'status'=>$status,
               'user_id'=>$user_id
            );
            //Push item array in the data array
            array_push($post_arr['data'],$groups_item);
       }
       
      echo json_encode($post_arr);
?>