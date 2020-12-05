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
  }
?>