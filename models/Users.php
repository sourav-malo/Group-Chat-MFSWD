<?php
  class Users {
    // DB stuff
    private $conn;
    private $table = 'users';

    // Player Properties
    public $id;
    public $firstName;
    public $lastName;
    public $username;
    public $password;
    public $createdAt;
    public $haveImage;
    public $isActive;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // user signed out
    public function signOut() {
      unset($_SESSION['user']['id']);
    }

    // Read Single User
    public function readSingle() {
      // Create Query
      $query = "SELECT *  
        FROM $this->table 
      WHERE 
        username = :username
      AND 
        password = :password
      ;";

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Bind Param
      $stmt->bindParam(':username', $this->username);
      $stmt->bindParam(':password', $this->password);

      // Execute query
      $stmt->execute();

      return $stmt;
    }

    // Checking if the user is signed in
    public function isSignedIn(){
      // isset($_SESSION['user']['id']) ? return true : return false;
      return(isset($_SESSION['user']['id']) ? true : false);
    }

    // Check user is Active or Deactive
    public function activeStatus(){
       session_start();
       $UID=$_SESSION['user']['id'];
      $query="SELECT * FROM users WHERE id='$UID';";
      $stmt=$this->conn->prepare($query);
      $stmt->execute();
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
       $last_sign_in= $row['is_active'];
      $time=time();
      $msg="";
      if($time>$last_sign_in){
       return false;
      }
      else {
        return true;
      }
    }

   //Update is_active status
   public function updateActiveStatus(){
     session_start();
     $time=time()+10;
      $UID=$_SESSION['user']['id'];
      $query="UPDATE `users` SET `is_active`='$time' WHERE id ='$UID' ;";
      $stmt=$this->conn->prepare($query);
      $stmt->execute();
   }
  }
?>