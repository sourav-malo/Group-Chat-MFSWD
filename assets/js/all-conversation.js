// Rend group Msg and the function start here
async function rendMsg(data) {
  var allusername = []
  var msginfo = []

  // Rend  group all message
  var allmessage = await fetch('api/read-Group-Allmessage.php', {
    method: 'POST',
    body: JSON.stringify({ group_id: data }),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err))

  // Rend current user
  var current_user = await fetch('api/get-user-info.php').then((response) =>
    response.json()
  )

  // Rend all username  who send the msg
  for (var i = 0; i < allmessage.data.length; i++) {
    var msgdata = {
      user_id: allmessage.data[i].user_id,
      message: allmessage.data[i].message,
      sent_at: allmessage.data[i].sent_at,
    }
    msginfo.push(msgdata)

    var username = await fetch('api/get-single-user-info.php', {
      method: 'POST',
      body: JSON.stringify({ id: allmessage.data[i].user_id }),
    }).then((response) => response.json())
    data = {
      first_name: username.first_name,
      last_name: username.last_name,
      username: username.username,
    }
    allusername.push(data)
  }


  //write the all msg at the group in the conversation desc div 
  var msgField = document.getElementById('conversation-desc')
  var flag=msginfo.length;
  if(flag<msginfo.length){
      // console.log(msginfo.length)
  }

  for (var i = 0; i < msginfo.length; i++) {


    // Rend user status 
    var activestatus=await fetch('api/is-Active.php',{
      method: 'POST',
      body: JSON.stringify({id:msginfo[i].user_id })
    })
    .then((response)=> response.json());
    status=activestatus.status;
    // End rending user status 


    let last_msg = false
    let nick_name = true

    if (i > 0) {
      let prevMsg = msgField.lastChild
      let prevId = msgField.lastChild.getAttribute('msg-data-id')
      let currentId = msginfo[i].user_id
      if (prevId === currentId) {
        if (prevMsg.querySelector('.message').className === 'message ') {
          prevMsg.querySelector('.message').className = 'message first-msg'
          last_msg = true
          nick_name = false
        } else if (
          prevMsg.querySelector('.message').className === 'message last-msg'
        ) {
          prevMsg.querySelector('.message').className = 'message btw-msg'
          last_msg = true
          nick_name = false
        }
      }
    }

    let msg = `<div class="`
    if (msginfo[i].user_id == current_user.id) msg += 'outgoing-msg'
    else msg += 'incoming-msg'
    msg += `" msg-data-id="${msginfo[i].user_id}">
      <p class="message `
    if (last_msg) {
      msg += 'last-msg'
    }
    msg += `">
        <span class="message-body">${msginfo[i].message}</span>
        <span class="seen">
          <img src="assets/img/logo/visible.png" alt="" />
        </span>
      </p>`
    if (nick_name)
      msg += `<span class="nick_name">${allusername[i].first_name}</span>`
    msg += `<span class="time_date">
        <span class="time_info">08:30 PM</span> -
        <span class="date_info">Jul 12, 2020</span>
      </span>`
                 
       if(status=='Online'){
          msg+=`<div class="sender_image addactive">`
       }
       else{
         msg+=`<div class="sender_image">`
       }
       msg+= `<img src="assets/img/users/${allusername[i].username}.jpg" />
      </div>`
    msg += `</div>`


    const parser = new DOMParser()
    const parsedDocument = parser.parseFromString(msg, 'text/html')
    msgField.appendChild(parsedDocument.getElementsByTagName('div')[0], true)
  }


// Always  Set scroll bottom 
  var conversationpage=document.getElementById('conversation-desc');
  conversationpage.scrollTop=conversationpage.scrollHeight-conversationpage.clientHeight;

}
// Msg rendering function End 





//  create flag variable   inside the group render function user send msg 
var flag = true;

//check the user msg send or not send
var check=0;


//Rend  group function start
//Rend all using group
export default async function groupRender() {
  // Rend all groups
  var groupdata = await fetch('api/read-Groups.php')
    .then((response) => response.json())
    .catch((err) => console.log(err))

  // Rend group status api  data  use letter
  var group_status = await fetch('api/read-group-status.php').then((response) =>
    response.json()
  )

  // Set all group data into an array
  var data = groupdata.data
  // console.log(data.id)
  const groupId = data.map((res) => res.id)
  const groupName = data.map((res) => res.name)
  const groupShort_name = data.map((res) => res.short_name)

  // Rend group msg sender and exact time
  var msgarray = []
  for (var i = 0; i < groupId.length; i++) {
    var messageResponse = await fetch('api/read-single-message-allgroup.php', {
      method: 'POST',
      body: JSON.stringify({ id: groupId[i] }),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err))

    var message = messageResponse.data
    msgarray.push(message[0])
  }
  // console.log(msgarray);

  // Set group msg and time into an array
  var lastMsg = msgarray.map((res) => res.message)
  var lastMsgSender = msgarray.map((res) => res.first_name)
  var lastMsgSendAt = msgarray.map((res) => res.sent_at)

  //Set all group  data  in array object
  const allconversation = []
  for (var i = 0; i < groupName.length; i++) {
    var data = {
      id: groupId[i],
      group_name: groupName[i],
      group_shortname: groupShort_name[i],
      last_msg: lastMsg[i],
      lastMsg_sender: lastMsgSender[i],
      sendAt: lastMsgSendAt[i],
    }
    allconversation.push(data)
  }

  //Sort array object
  allconversation.sort((a, b) => Date.parse(b.sendAt) - Date.parse(a.sendAt))

  // Create Get timer function
  function getTime(sendDate) {
    sendDate = Date.parse(sendDate)
    var currentDate = Date.parse(new Date())
    var diffTime = (currentDate - sendDate) / 1000
    var minute = 60
    var hour = 60 * 60
    var day = 24 * 60 * 60
    var weak = 7 * 24 * 60 * 60
    var time
    if (diffTime >= weak) {
      time = parseInt(diffTime / weak)
      time = time + 'w'
    } else if (diffTime >= day) {
      time = parseInt(diffTime / day)
      time = time + 'd'
    } else if (diffTime >= hour) {
      time = parseInt(diffTime / hour)
      time = time + 'h'
    } else if (diffTime >= minute) {
      time = parseInt(diffTime / minute)
      time = time + 'm'
    } else {
      time = 1 + 'm'
    }
    return time
  }

  //  set group data
  var groups = document.getElementById('groups')
  var groupsShow = ''
  for (var i = 0; i < allconversation.length; i++) {
    groupsShow +=
      ' <div class="group"  data-group-id=' +
      allconversation[i].id +
      '> <div class="group_logo"><img width="100px" src=assets/img/groups/' +
      allconversation[i].group_shortname +
      '.png  /></div><div class="group_description"><div class="group_details"><h4 class="group_name">' +
      allconversation[i].group_name +
      '</h4><p class="last_msg"><span class="last_msg_person">' +
      allconversation[i].lastMsg_sender +
      ' :  </span>' +
      allconversation[i].last_msg +
      '</p></div><div class="last_msg_time"><p class="time"><time></time></p></div></div></div>'
  }
  groups.innerHTML = groupsShow

  //  Select all groups
  var allgroup = document.querySelectorAll('.group')

  //  Set msg sender time
  var msgTime = document.querySelectorAll('.last_msg_time .time time')
  for (var i = 0; i < msgTime.length; i++) {
    msgTime[i].innerHTML = getTime(allconversation[i].sendAt)
  }

  // group Header function
  function groupHeader(src, groupName, dataset) {
    var head_img = document.getElementById('head_img')
    var group_title = document.querySelector('#group-title h3')
    var group_header = document.querySelector('.conversation_header')

    head_img.src = src
    group_title.innerHTML = groupName
    var dataSet = document.createAttribute('data-group-head-id')
    group_header.setAttributeNode(dataSet)
    dataSet.value = dataset
  }

  // Set group active status
  // This api rend above this code
  var group_status_data = group_status.data
  for (var i = 0; i < group_status_data.length; i++) {
    // Check which group  is active
    if (group_status_data[i].status == 1) {
      var active_group = group_status_data[i].group_id;
      // console.log(active_group);


      for (var j = 0; j < allgroup.length; j++) {
        var group_data = allgroup[j].dataset.groupId
        if (active_group == group_data) {
          // set active class in active group
          allgroup[j].classList.add('active')

          // Set  Group header

          //Select current group img(src) group name and group dataset
          var img = allgroup[j].querySelector('.groups .group img')
          var src = img.getAttribute('src')
          var groupname = allgroup[j].querySelector('.group_name').innerText

          var dataid = allgroup[j].dataset.groupId

          //  Call group header  function
          groupHeader(src, groupname, dataid)


          // Check the user msg send or not send 
          var allmessage = await fetch('api/read-Group-Allmessage.php', {
            method: 'POST',
            body: JSON.stringify({ group_id:dataid }),
          })
            .then((response) => response.json())
            .catch((err) => console.log(err))
          if(allmessage.data.length > check){
             rendMsg(dataid);
             check=allmessage.data.length;
          }
         


        }
      }
    }
  }

  //  Update group status use click event
  for (var i = 0; i < allgroup.length; i++) {
    allgroup[i].addEventListener('click', (e) => {
      var id = e.currentTarget.dataset.groupId
      fetch('api/update-group-status.php', {
        method: 'POST',
        body: JSON.stringify({ group_id: id }),
      })
        .then((response) => response.json())
        .catch((err) => console.log(err));
        // rendMsg(id);

        
    //  Check value when  click a usable group and set value
    check=0;
    })


  }

  //  User send messages
  var msgSend = document.querySelector('.sent_logo')

  if (flag) {
    msgSend.addEventListener('click', (e) => {
      e.preventDefault()

      var msgInput = document.getElementById('msgSend').value
      var headDataset = document.querySelector('.conversation_header').dataset
        .groupHeadId
      var msgInput = document.getElementById('msgSend').value

      //  Check msgSend input
      if (msgInput != '') {
        // fetch the msg send api
        fetch('api/send-Messages.php', {
          method: 'POST',
          body: JSON.stringify({ group_id: headDataset, message: msgInput }),
        })
          .then((response) => response.json())
          .catch((err) => console.log(err))

        // set msg send input is null
        document.getElementById('msgSend').value = ''
      }
    })
    flag = false
  }
}
