const usernameBox = document.querySelector('#username');
const passwordBox = document.querySelector('#password');
const signInForm = document.querySelector('#sign-in-form');

const signInSubmit = e => {
  e.preventDefault();

  const body = {
    username : usernameBox.value,
    password : passwordBox.value
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'api/sign-in.php', true);
  xhr.addEventListener('load', () => {
    if(xhr.status == 200 && xhr.readyState == 4) {
      console.log(xhr.responseText);
    }
  })
  xhr.send(JSON.stringify(body));
}

signInForm.addEventListener('submit', signInSubmit);