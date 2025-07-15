
document.addEventListener('DOMContentLoaded', () => {
  const ramos = document.querySelectorAll('.ramo');
  ramos.forEach(ramo => {
    const id = ramo.dataset.codigo;
    const requisitos = JSON.parse(ramo.dataset.req || '[]');
    const aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');

    const habilitada = requisitos.every(r => aprobadas.includes(r));
    if (aprobadas.includes(id)) {
      ramo.classList.add('aprobado');
    } else if (!habilitada && requisitos.length > 0) {
      ramo.classList.add('bloqueado');
    }

    if (habilitada || requisitos.length === 0) {
      ramo.addEventListener('click', () => {
        let aprobadas = JSON.parse(localStorage.getItem('aprobadas') || '[]');
        if (aprobadas.includes(id)) {
          aprobadas = aprobadas.filter(x => x !== id);
        } else {
          aprobadas.push(id);
        }
        localStorage.setItem('aprobadas', JSON.stringify(aprobadas));
        location.reload();
      });
    }
  });
});
