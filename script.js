
  document.querySelectorAll('.broches h3').forEach(function(h3) {
    const status = h3.classList.contains('d') ? 'Disponível' : 'Indisponível';
      h3.textContent = status;
  });
    // Sistema de abas
  document.querySelectorAll('.tabs button').forEach(function(botao) {
    botao.addEventListener('click', function() {
      // Remove a classe 'active' de todos os botões
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
      botao.classList.add('active');

      const filtro = botao.getAttribute('data-filter');
      document.querySelectorAll('.broches').forEach(function(item) {
        const h3 = item.querySelector('h3');
        if (filtro === 'all') {
          item.style.display = 'block';
        } else if (h3.classList.contains(filtro)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

