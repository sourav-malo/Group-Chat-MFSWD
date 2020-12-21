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
setInterval(groupRender,1000);
// groupRender();

// Add active class in first group 
var groups=document.getElementById('groups');
// console.log(groups.children);
// groups.firstChild.classList.add('active');
  
// Select  conversation header 
// var head_img=document.getElementById('head_img');
// var head_group_name=document.querySelector('#group-title h3');

// var first_group_img=groups.firstElementChild.children[0].children[0].getAttribute('src');
// var first_group_title=groups.firstElementChild.children[1].children[0].children[0].innerText;
 
// // Set the group header 
// head_img.setAttribute('src',first_group_img);
// head_group_name.innerHTML=first_group_title;

//Select all group child
var all_group=groups.children;
var group=document.querySelectorAll('#group');
console.log(group);
// console.log(all_group);
for(var i=0;i<all_group.length;i++){
  console.log(all_group[i]);
}

// Set active group 
for(var i=0; i<all_group.length; i++){
  // all_group[0].classList.add('active');
  all_group[i].addEventListener('click',(e)=>{
    for(var j=0; j<all_group.length; j++){
           all_group[j].classList.remove('active');
           e.currentTarget.classList.add('active');
    };

    // Set active group profile and name in header 
    var current_group_profile=e.currentTarget.children[0].children[0].getAttribute('src');

    head_img.setAttribute('src',current_group_profile);

    var current_group_name=e.currentTarget.children[1].children[0].children[0].innerText;
    
    head_group_name.innerHTML=current_group_name;
    
  });
};



