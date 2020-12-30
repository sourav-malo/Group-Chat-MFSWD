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
window.addEventListener("DOMContentLoaded",()=>{
  groupRender();
})




var data;
async function fncRedn(){
  data=await fetch('api/read-Groups.php').then(res=> res.json());
  var groupsShow='';
  var length=data.data.length;
  for(var i=0;i<length;i++){
    groupsShow +=' <div class="group" id="group" data-group-id=> <div class="group_logo"><img width="100px"  /></div><div class="group_description"><div class="group_details"><h4 class="group_name"></h4><p class="last_msg"><span class="last_msg_person"> </span></p></div><div class="last_msg_time"><p class="time"><time></time></p></div></div></div>';
  }
  groups.innerHTML=groupsShow;


}

// Call the function 

fncRedn();
