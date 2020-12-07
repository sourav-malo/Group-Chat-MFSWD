const signInForm = document.querySelector('#sign-in-form')
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')

export default function usernameValidation() {
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

export function passwordValidation() {
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
