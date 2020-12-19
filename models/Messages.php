<?php 
Class Messages{
    // DB stuff 
    private $conn;
    private $table='messages';
    //  Messages properties  
    public $id;
    public $group_id;
    public $user_id;
    public $message;
    public $send_at;
//  Constructor with database
 public function __construct($db){
     $this->conn=$db;
 }
//  Send message function 
 public function send_Messages(){
       $query='INSERT INTO '. $this->table .'
       SET group_id=:group_id,
       user_id=:user_id,
          message=:message;';
    //    Prepare statement
       $stmt=$this->conn->prepare($query);
    //    Bind Parameter 
       $stmt->bindParam(":group_id", $this->group_id);
       $stmt->bindParam(":user_id", $this->user_id);
       $stmt->bindParam(":message", $this->message);
    //    Execute query 
    if($stmt->execute()){
       return true;
    }
    else{
       return false;
    }

 }
//  Receive group message 
public function read_Group_Allmessage(){
   $sql='SELECT * FROM '.$this->table .' WHERE  group_id=:group_id;';

   // Prepare The data
   $stmt=$this->conn->prepare($sql);

   // Bind param 
   $stmt->bindParam(":group_id",$this->group_id);
   $stmt->execute();
   return $stmt;
}
    

//   Read single last msg each group
public function read_last_message_allgroups(){
   $sql="SELECT users.id, users.first_name, users.username, messages.message, messages.sent_at FROM users JOIN messages on messages.user_id=users.id WHERE messages.group_id=:id  ORDER by messages.sent_at DESC LIMIT 1;";

   // prepare the data 
   $stmt=$this->conn->prepare($sql);

   // Bind param 
   $stmt->bindParam(":id",$this->id);

   $stmt->execute();
   return $stmt;

}
}
?>