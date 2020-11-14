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

    // Logout Player
    public function signOut() {
      unset($_SESSION['user']['id']);
    }

    // Read Single Player
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



    public function isSignedIn(){
      if(isset($_SESSION['user']['id'])){
       return true;
      }
      else {
        return false;
      }

    }
  }
?>