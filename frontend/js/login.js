const usuariosPadrao = [

  {
    nome: 'Administrador',
    email: 'admin',
    senha: '123',
    cargo: 'Administrador'
  },

  {
    nome: 'Administrador',
    email: 'Admin',
    senha: '123',
    cargo: 'Administrador'
  },

  {
    nome: 'Caixa',
    email: 'caixa',
    senha: '123',
    cargo: 'Caixa'
  },

  {
    nome: 'Garcom',
    email: 'garcom',
    senha: '123',
    cargo: 'Garçom'
  }

];

if(!localStorage.getItem('usuarios')) {

  localStorage.setItem(
    'usuarios',
    JSON.stringify(usuariosPadrao)
  );

}





function entrar() {

  const usuarios = JSON.parse(
    localStorage.getItem('usuarios')
  ) || [];

  const login =
    document.getElementById('login').value;

  const senha =
    document.getElementById('senha').value;

  const usuario = usuarios.find(usuario =>

    (
      usuario.email === login ||
      usuario.nome === login
    )

    &&

    usuario.senha === senha

  );

  if(!usuario) {

    alert('Usuário ou senha inválidos');

    return;

  }

  localStorage.setItem(
    'usuarioLogado',
    JSON.stringify(usuario)
  );

  window.location.href = 'dashboard.html';

}

document.addEventListener('keydown', function(event) {

  if(event.key === 'Enter') {

    entrar();

  }

});