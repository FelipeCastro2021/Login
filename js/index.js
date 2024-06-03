const eye = document.querySelector('#eye');
const input = document.querySelector('#psw');

eye.addEventListener('click', e => {
  if (input.type == 'password') {
    input.type = 'text';
    eye.src = '/assets/eye.svg';
  } else {
    input.type = 'password';
    eye.src = '/assets/eye-closed.svg';
  }
});
