import signOut from './sign-out.js'
import groupRender, {
  getTypingStatus,
  last_rendered_group as groupId,
} from './all-conversation.js'

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
  profileName.innerText = fullname
  profileImg.src = 'assets/img/users/' + username + '.jpg'
}

// Call imported function  group render in from all-conversation.js page
setInterval(() => {
  groupRender()
  getTypingStatus(groupId)
}, 1000)

// Update user active status
setInterval((e) => {
  fetch('api/updateStatus.php')
    .then((response) => response.json())
    .then((res) => res.status)
    .catch((err) => console.log(err))
}, 1000)
