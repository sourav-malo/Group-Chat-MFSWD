import signOut from './sign-out.js'
import  groupRender from './all-conversation.js'

const logOutbtn = document.getElementById('logOutbtn'),
  profileName = document.getElementById('Profile_name'),
  profileImg = document.getElementById('profile_img')

logOutbtn.addEventListener('click', signOut)

let user = {}
getUserInfo()
function getUserInfo() {
  fetch('api/get-user-info.php', {
    method: 'POST',
  })
    .then((res) => res.json())
    .then((data) => {
      Object.assign(user, data)
      setUserInfo(user.first_name + data.last_name, user.username)
    })
    .catch((err) => console.log(err))
}

function setUserInfo(fullname, username) {
  profileName.innerText = fullname;
  profileImg.src = 'assets/img/users/' + username + '.jpg'
}


// Call imported function 

// setInterval(groupRender,1000);
// window.addEventListener("DOMContentLoaded",()=>{
//   groupRender();
//   // Call the function 
// // fncRedn();
// })
// setInterval(() => {
//  groupRender(); 
// }, 1000);
setInterval(groupRender, 1000);
// groupRender();
var allgroup=document.querySelectorAll('.group');





// var data;
// async function fncRedn(){
//   data=await fetch('api/read-Groups.php').then(res=> res.json());
//   var groupsShow='';
//   var length=data.data.length;
//   for(var i=0;i<length;i++){
//     groupsShow +=' <div class="group"  data-group-id=> <div class="group_logo"><img width="100px"  /></div><div class="group_description"><div class="group_details"><h4 class="group_name"></h4><p class="last_msg"><span class="last_msg_person"> </span></p></div><div class="last_msg_time"><p class="time"><time></time></p></div></div></div>';
//   }
//   groups.innerHTML=groupsShow;


//   var array=[];

//   var group=document.querySelectorAll('.group');
//  for(var i=0;i<group.length;i++){
//   //  console.log(group[i]);
//    var img=group[0].querySelector('img').src;
//    console.log(img);
//   //  var src=img.getAttribute('src');
//   // console.log(img.getAttribute('src'));
//   // console.log(img.getAttribute('width'));
//   //  console.log(img);

//   //  group[i]

//    group[i].addEventListener('click',(e)=>{
//       for(var i=0;i<group.length;i++){
//         group[i].classList.remove('active');
//       }
//      e.currentTarget.classList.add('active');
//    });


//  }


// }




// window.addEventListener("DOMContentLoaded",()=>{
//     groupRender();
//   })


// Set group header 
// function groupHeader(src, groupName,dataset){
//  var head_img=document.getElementById('head_img');
//  var group_title=document.querySelector('#group-title h3');
//  var group_header=document.querySelector('.conversation_header');

//   head_img.src=src;
//   group_title.innerHTML=groupName;
// //  console.log(headImg_src);
// var dataSet=document.createAttribute('data-group-head-id'); 
// group_header.setAttributeNode(dataSet);
// dataSet.value=dataset;
// }


// Call  groupHeader function 
// groupHeader();

// Msg sending function
//   function msgSend(){
//    var msgInput=document.getElementById('msgSend').value;
//    var msgSend=document.querySelector('.sent_logo');
//        msgSend.addEventListener('click',()=>{
//             //  console.log(msgInput);
//        });
//  }

// //  Call msgSend function 
//  msgSend();
