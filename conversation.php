<?php
  session_start();

  
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="assets/img/logo/group_logo.png" type="image/png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>conversation</title>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
    <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
    <script src="assets/js/main.js"></script>
  </head>

  <body class="conversation-in-details">
    <header>
      <nav id="nav">
        <div class="project_logo">
          <a href="#">
            <img
              src="assets/img/logo/group_logo.png"
              alt="Project logo"
              id="project_logo"
              class="project_img"
            />
          </a>
        </div>
        <div id="profile_section" class="profile_section">
          <div class="profile">
            <img
              src="assets/img/users/rokibul_hasan_rijon.jpg"
              alt="Profile_img"
              id="profile_img"
              class="profile_img"
            />
            <span id="Profile_name">Md. Rokibul Hasan</span>
          </div>

          <div class="logOutbtn">
            <a href="logout.php"
              ><img
                src="assets/img/logo/signout.png"
                alt="Profile_img"
                id="profile_img"
                class="profile_img"
            /></a>
          </div>
        </div>
      </nav>
    </header>

    <section class="conversation" id="conversation">
      <div class="conversation-list">
        <div class="conversation-title">
          <h3>All Conversation</h3>
        </div>
        <div class="groups">
          <!-- First goup  -->
          <div class="group active">
            <div class="group_logo">
              <img
                width="100px"
                src="assets/img/groups/javascript_developers.png"
              />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Giga mind</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Akib: </span>We are contacting
                  long since we had a great time to maintain
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.40 PM</time></p>
              </div>
            </div>
          </div>
          <!-- Second group  -->

          <div class="group">
            <div class="group_logo">
              <img width="100px" src="assets/img/groups/go_developers.png" />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Black Group</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Rijon: </span>Hello there
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.00 PM</time></p>
              </div>
            </div>
          </div>
          <!-- Third group  -->

          <div class="group">
            <div class="group_logo">
              <img width="100px" src="assets/img/groups/php_developers.png" />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Team Matrik</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Tarikul: </span>We had a grat
                  time to maintain all things
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.40 PM</time></p>
              </div>
            </div>
          </div>
          <!-- Fourth group  -->

          <div class="group">
            <div class="group_logo">
              <img
                width="100px"
                src="assets/img/groups/python_developers.png"
              />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Blusters</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Arafat: </span>Ha ha Ok. Lets
                  make all things to make all categories
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.40 PM</time></p>
              </div>
            </div>
          </div>
          <!-- Five group  -->

          <div class="group">
            <div class="group_logo">
              <img width="100px" src="assets/img/groups/swift_developers.png" />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Cse Makers Team</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Sourav: </span>We had a great
                  time to maintain all updates upon us
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.40 PM</time></p>
              </div>
            </div>
          </div>
          <!-- Six Group  -->

          <div class="group">
            <div class="group_logo">
              <img width="100px" src="assets/img/groups/go_developers.png" />
            </div>
            <div class="group_description">
              <div class="group_details">
                <h4 class="group_name">Groups of Heroes</h4>
                <p class="last_msg">
                  <span class="last_msg_person">Sujan: </span>We are contacting
                  long since we had a great time to maintain
                </p>
              </div>
              <div class="last_msg_time">
                <p class="time"><time>5.40 PM</time></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="conversation-expand">
        <div class="conversation_header">
          <div class="head_image">
            <img
              width="100px"
              height="100px"
              src="assets/img/groups/javascript_developers.png"
            />
          </div>
          <div class="group-title">
            <h3>Giga mind</h3>
          </div>
        </div>

        <div class="conversation-desc">
          <div class="incoming-msg">
            <p class="message">
              <span class="message-body">Is there any way to solve it?</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="nick_name">Rayhan</span>

            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
            <div class="sender_image">
              <img src="assets/img/users/ahmed_rayhan.jpg" />
            </div>
          </div>

          <div class="incoming-msg">
            <p class="message">
              <span class="message-body">I guess not.</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="nick_name">Razin</span>

            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
            <div class="sender_image">
              <img src="assets/img/users/razinul_karim.jpg" />
            </div>
          </div>

          <div class="outgoing-msg">
            <p class="message first-msg">
              <span class="message-body">No, There's a way.</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
          </div>

          <div class="outgoing-msg">
            <p class="message btw-msg">
              <span class="message-body">Simple.</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
          </div>

          <div class="outgoing-msg">
            <p class="message last-msg">
              <span class="message-body"
                >Just we will requir the proper use of web development.</span
              >
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
            <div class="sender_image">
              <img src="assets/img/users/tarikul_islam_sumon.jpg" />
            </div>
          </div>

          <div class="incoming-msg">
            <p class="message first-msg">
              <span class="message-body">Enlighten us.</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="nick_name">Nayem</span>

            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
          </div>

          <div class="incoming-msg">
            <p class="message btw-msg">
              <span class="message-body">Enlighten us.</span>
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
          </div>

          <div class="incoming-msg">
            <p class="message last-msg">
              <span class="message-body"
                >Can we solve this problem with Asynconous Javascript?</span
              >
              <span class="seen">
                <img src="/assets/img/logo/visible.png" alt="" />
              </span>
            </p>
            <span class="time_date">
              <span class="time_info">08:30 PM</span> -
              <span class="date_info">Jul 12, 2020</span>
            </span>
            <div class="sender_image">
              <img src="assets/img/users/nayem_zaman.jpg" />
            </div>
          </div>
        </div>
        <div class="message_typing">
          <p class="typing_check">An user is typing.....</p>
          <div class="type_info">
            <div class="type_box">
              <input type="text" placeholder="Type here" />
            </div>
            <div class="sent_logo">
              <img
                height="32px"
                width="32px"
                src="assets/img/logo/sent.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>