const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const user = document.getElementById('userInput').value;
  const pass = document.getElementById('passInput').value;

  if(user === 'mari' && pass === '123'){
    window.location.href = `admin.html?user=${user}`;
  } else {
    loginError.textContent = 'Usuario incorrecto';
  }
});