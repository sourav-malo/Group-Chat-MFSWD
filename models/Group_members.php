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
  }
?>