const usuarioLogado = JSON.parse(
  localStorage.getItem('usuarioLogado')
);

if(!usuarioLogado) {

  window.location.href = 'login.html';

}

const adminBtn =
  document.getElementById('admin-btn');

if(adminBtn) {

  if(usuarioLogado.cargo !== 'Administrador') {

    adminBtn.style.display = 'none';

  }

}

const paginaAtual =
  window.location.pathname;

if(
  paginaAtual.includes('financeiro.html')
) {

  if(
    usuarioLogado.cargo === 'Garçom' ||
    usuarioLogado.cargo === 'Cozinha'
  ) {

    alert(
      'Você não possui acesso ao financeiro'
    );

    window.location.href =
      'dashboard.html';

  }

}

const financeiroBtn =
  document.getElementById('financeiro-btn');

if(financeiroBtn) {

  if(
    usuarioLogado.cargo === 'Garçom' ||
    usuarioLogado.cargo === 'Cozinha'
  ) {

    financeiroBtn.style.display = 'none';

  }

}

const totalHojeCard =
  document.getElementById('total-hoje-card');

if(totalHojeCard) {

  if(
    usuarioLogado.cargo === 'Garçom' ||
    usuarioLogado.cargo === 'Cozinha'
  ) {

    totalHojeCard.style.display = 'none';

  }

}