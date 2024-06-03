const eye = document.querySelector('#eye');
const input = document.querySelector('#psw');

eye.addEventListener('click', e => {
  if (input.getAttribute('type') === 'password') {
    input.setAttribute('type', 'text');
  } else {
    input.setAttribute('type', 'password');
  }
});
