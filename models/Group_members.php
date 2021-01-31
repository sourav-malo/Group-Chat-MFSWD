<?php 
  class Group_members{
    //   DB Stuff
    private $conn;
    private $table='group_members';

    // Group_member properties
    public $group_id;
    public $users_id;
    
    // Create construct 
    public function __construct($db){
        $this->conn=$db;
    }

    //  Select group status
      public function read_groups_status(){
      $sql='SELECT group_id,status,user_id FROM group_members WHERE user_id=:user_id;';

      //Prepare statement
      $stmt=$this->conn->prepare($sql);

      //Bind param
      $stmt->bindParam(":user_id",$this->users_id);

      // Execute stmt 
      $stmt->execute();
      return $stmt;
     }


    //  update group status 
    public function update_group_status(){
      $sql='UPDATE group_members set status= CASE WHEN group_id=:group_id THEN true ELSE false END WHERE user_id=:user_id;';


     //prepare statement
      $stmt=$this->conn->prepare($sql);

      // Bind param
      $stmt->bindParam('group_id',$this->group_id);
      $stmt->bindParam(':user_id',$this->user_id);

      //Execute stmt
      $stmt->execute();
      return $stmt;
    }

            //Check Is type   Status
   public function is_Type(){
    $query="SELECT users.id, users.is_type FROM users JOIN group_members on users.id=group_members.user_id WHERE group_members.group_id=:id";

    //Prepare statement
    $stmt=$this->conn->prepare($query);
    // $this->id=htmlspecialchars(strip_tags($this->group_id));
   
    ///Bind param
   $stmt->bindParam(':id',$this->group_id);

    $stmt->execute();
    return $stmt;
}
  }
?>