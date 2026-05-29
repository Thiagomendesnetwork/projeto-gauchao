function entrarMesa() {
  window.location.href = 'mesa.html';
}

function logout() {

  localStorage.removeItem('usuarioLogado');

  window.location.href = 'login.html';

}