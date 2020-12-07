export default function signOut() {
  fetch('api/sign-out.php', { method: 'POST' })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === 'Success') window.location.href = 'index.html'
      else alert('Logout Failed!')
    })
    .catch((err) => console.log(err))
}

// ,
//     body: JSON.stringify({
//       username: body.username,
//       password: body.password,
//     }),
