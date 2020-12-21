import usernameValidation from './validation.js'
import passwordValidation from './validation.js'

const usernameBox = document.querySelector('#username')
const passwordBox = document.querySelector('#password')
const signInForm = document.querySelector('#sign-in-form')
const usernameError = document.getElementById('usernameError')
const passwordError = document.getElementById('passwordError')

export default function checkUPandRender() {
  var username = usernameValidation()
  var password = passwordValidation()
  if (username == true && password == true) {
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
        if (data.status === 'Success') {
          window.location.href = 'conversation.html'
        } else alert(`Username or Password is't correct!`)
      })
      .catch((err) => console.log(err))
  } else {
    alert(`Username or Password is't correct!`)
  }
}

