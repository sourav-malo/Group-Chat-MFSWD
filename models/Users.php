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
    public $is_type;

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
      return(isset($_SESSION['user']['id']) ? true : false);
    }

    // Check user is Active or Deactive
    public function activeStatus(){
      $query="SELECT * FROM users WHERE id=:id;";
      $stmt=$this->conn->prepare($query);
      $stmt->bindParam(':id', $this->id);
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

   //Update is type status
   public function updateIsType(){
    $query='UPDATE '.$this->table.' 
    SET 
        is_type=:is_type
          WHERE id=:id;';


       // prepared statment
       $stmt=$this->conn->prepare($query);  
       $this->is_type=htmlspecialchars(strip_tags($this->is_type));
       $this->id=htmlspecialchars(strip_tags($this->id));

       ///Bind param
       $stmt->bindParam(':is_type',$this->is_type);
       $stmt->bindParam(':id',$this->id);
       if($stmt->execute()){
         return true;
       }
       else{
         return false;
       }
   }




  //  Get single user info 
  public function getSingleUserInfo(){
    $query="SELECT * FROM ".$this->table." WHERE id=:id;";

       //Prepare statement
       $stmt=$this->conn->prepare($query);
       $this->id=htmlspecialchars(strip_tags($this->id));
      
       ///Bind param
      $stmt->bindParam(':id',$this->id);

       $stmt->execute();
       return $stmt;
  }
  }
?>