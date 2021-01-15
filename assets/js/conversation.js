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


// Call imported function  group render in from all-conversation.js page
setInterval(groupRender, 1000);





