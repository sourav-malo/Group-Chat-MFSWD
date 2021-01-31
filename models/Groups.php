<?php 
     include_once '../config/Database.php';
      include ('Group_members.php');
 class Groups{

     //DB stuff
     private $conn;
     private $table='groups';
     
     //Groups properties
     public $id;
     public $name;
     public $short_name;
     public $created_at;
     public $have_image;
      
     //Create constructor 
     public function __construct($db){
        $this->conn=$db;
    }
     //Read groups function
     public function read_groups(){
         $query="SELECT  groups.id, groups.name, groups.short_name, groups.created_at, groups.have_image FROM groups  LEFT JOIN group_members ON groups.id=group_members.group_id WHERE group_members.user_id=:id;";
          
         //Prepare Statement.
         $stmt=$this->conn->prepare($query);
        //  Database  and connnection 
         $database=new Database();
        $db=$database->connect();
         $group_members=new Group_members($db);
        

         //Bind Param
         $stmt->bindParam(':id',$group_members->users_id);

        //  Define the user id value
  
        session_start();
          $group_members->users_id=$_SESSION['user']['id'];

         //Execute stmt
         $stmt->execute();
         return $stmt;



     }



 }
?>