// import usernameValidation from './validation.js'
// import passwordValidation from './validation.js'
import checkUPandRender from './sign-in.js'

document.getElementById('sign-in-form').addEventListener('submit', (e) => {
  e.preventDefault()
  checkUPandRender()
})
