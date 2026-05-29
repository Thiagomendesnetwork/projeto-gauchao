const modal = document.getElementById('modal');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

let editandoId = null;

function voltar() {
  window.history.back();
}

function abrirModal() {
  modal.style.display = 'flex';
}

function fecharModal() {
  modal.style.display = 'none';

  limparCampos();
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('cargo').value = 'Garçom';

  editandoId = null;
}

function salvarLocalStorage() {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function renderUsuarios() {

  const lista = document.getElementById('usuarios-lista');

  lista.innerHTML = '';

  usuarios.forEach(usuario => {

    lista.innerHTML += `
    
      <div class="usuario-card">

        <div>
          <h2>${usuario.nome}</h2>

          <p>${usuario.cargo}</p>

          <small>Status: ${usuario.status}</small>
        </div>

        <div class="acoes">

          <button class="editar"
            onclick="editarUsuario(${usuario.id})">
            Editar
          </button>

          <button class="excluir"
            onclick="excluirUsuario(${usuario.id})">
            Excluir
          </button>

        </div>

      </div>

    `;

  });

}

function salvarUsuario() {

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const cargo = document.getElementById('cargo').value;

  if(!nome || !email || !senha) {
    alert('Preencha todos os campos');
    return;
  }

  if(editandoId) {

    usuarios = usuarios.map(usuario => {

      if(usuario.id === editandoId) {

        return {
          ...usuario,
          nome,
          email,
          senha,
          cargo
        };

      }

      return usuario;

    });

  } else {

    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      senha,
      cargo,
      status: 'Ativo'
    };

    usuarios.push(novoUsuario);

  }

  salvarLocalStorage();

  renderUsuarios();

  fecharModal();

}

function excluirUsuario(id) {

  const confirmar = confirm(
    'Deseja realmente excluir este usuário?'
  );

  if(!confirmar) return;

  usuarios = usuarios.filter(usuario =>
    usuario.id !== id
  );

  salvarLocalStorage();

  renderUsuarios();

}

function editarUsuario(id) {

  const usuario = usuarios.find(usuario =>
    usuario.id === id
  );

  if(!usuario) return;

  document.getElementById('nome').value =
    usuario.nome;

  document.getElementById('email').value =
    usuario.email;

  document.getElementById('senha').value =
    usuario.senha;

  document.getElementById('cargo').value =
    usuario.cargo;

  editandoId = usuario.id;

  abrirModal();

}

window.onclick = function(event) {

  if(event.target === modal) {
    fecharModal();
  }

}

renderUsuarios();