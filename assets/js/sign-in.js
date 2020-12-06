const usernameBox = document.querySelector('#username')
const passwordBox = document.querySelector('#password')
const signInForm = document.querySelector('#sign-in-form')
// #Select  Error span element
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')

// #Username validation function
function usernameValidation() {
  const usernameBoxValue = document.querySelector('#username').value
  var pattern = /^[A-Za-z]/
  var check = usernameBoxValue.match(pattern)
  if (usernameBoxValue == '') {
    signInForm.classList.remove('validusername')
    signInForm.classList.remove('invalidusername')
    usernameError.innerHTML = ''
    return false
  }
  if (!isNaN(usernameBoxValue)) {
    signInForm.classList.add('invalidusername')
    signInForm.classList.remove('validusername')
    usernameError.innerHTML = 'Please Enter  Charecter!'
    usernameError.style.color = '#ff0000'
    return false
  } else if (usernameBoxValue.length < 8) {
    signInForm.classList.add('invalidusername')
    signInForm.classList.remove('validusername')
    usernameError.innerHTML = 'Please Enter More than 8 Charecter!'
    usernameError.style.color = '#ff0000'
    return false
  } else if (!check) {
    signInForm.classList.add('invalidusername')
    signInForm.classList.remove('validusername')
    usernameError.innerHTML = 'First Letter must be Charecter!'
    usernameError.style.color = '#ff0000'
    return false
  } else {
    signInForm.classList.add('validusername')
    signInForm.classList.remove('invalidusername')
    usernameError.innerHTML = ''
    // usernameError.style.color="#00ff00";
    return true
  }
}

// #Password Validation  function

function passwordValidation() {
  const passwordBoxValue = document.querySelector('#password').value

  var pattern1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/
  const pattern2 = /^[a-z]/
  if (passwordBoxValue == '') {
    signInForm.classList.remove('validpassword')
    signInForm.classList.remove('invalidpassword')
    passwordError.innerHTML = ''
    return false
  }
  if (passwordBoxValue.length < 8) {
    signInForm.classList.add('invalidpassword')
    signInForm.classList.remove('validpassword')
    passwordError.innerHTML = 'Please Enter more than 8 charecter!'
    passwordError.style.color = '#ff0000'
    return false
  } else if (!passwordBoxValue.match(pattern2)) {
    signInForm.classList.add('invalidpassword')
    signInForm.classList.remove('validpassword')
    passwordError.innerHTML = 'Use Lower Case Letter!'
    passwordError.style.color = '#ff0000'
    return false
  } else {
    signInForm.classList.remove('invalidpassword')
    signInForm.classList.add('validpassword')
    passwordError.innerHTML = ''
    return true
  }
}
//  #Check Username Match or NotMatch
// #Get the submit Form
// var signInFormSubmit = document.getElementById('signInFormSubmit')
// #Check Eventhandler  for submit button

signInForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // #Catch the validation Function
  // var username = usernameValidation()
  // var password = passwordValidation()
  // if (username == true && password == true) {

  const body = {
    username: usernameBox.value,
    password: passwordBox.value,
  }

  fetch('api/sign-in.php', {
    method: 'POST',
    body: JSON.stringify({
      username: body.username,
      password: body.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      // setSessionAndRenderChat(data.user)
    })
    .catch((err) => console.log(err))
  /*
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'api/sign-in.php', true)
  xhr.addEventListener('load', () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
      var responseResult = JSON.parse(xhr.response)
      if (responseResult.status == 'Success') {
        console.log(responseResult.responseText)
        alert('Login Successfully')
        // Get a page  when youser logined in successfully
        var xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            document.querySelector('body').innerHTML = this.responseText
          }
        }
        xhttp.open('GET', 'conversation.php', true)
        xhttp.send()
        #end load this page
      } else {
        alert('This Is Not Valid Username and Password!')
      }
    }
  })
  xhr.send(JSON.stringify(body))
  } else {
    alert('Please check the User Input!')
  }*/
})

function setSessionAndRenderChat(user) {
  console.log(user)
  fetch('set-session.php', {
    method: 'POST',
    body: JSON.stringify({
      created_at: user.created_at,
      first_name: user.first_name,
      have_image: user.have_image,
      id: user.id,
      is_active: user.is_active,
      last_name: user.last_name,
      password: user.password,
      username: user.username,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => console.log(err))
}
