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
      console.log('Hello')
      window.location.href = 'conversation.php'
    })
    .catch((err) => console.log(err))
  /*
  xhr.send(JSON.stringify(body))
  } else {
    alert('Please check the User Input!')
  }*/
})
