function desbloquearRamos() {
  const aprobados = JSON.parse(localStorage.getItem('aprobados') || '[]');
  if (aprobados.includes('matematica_i')) {
    document.getElementById('fisica_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_i')) {
    document.getElementById('matematica_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('computacion')) {
    document.getElementById('programacion_de_computadores').classList.remove('bloqueado');
  }
  if (aprobados.includes('fisica_i') && aprobados.includes('matematica_ii')) {
    document.getElementById('fisica_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_ii')) {
    document.getElementById('matematica_iii').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_i')) {
    document.getElementById('redes_electricas_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_ii')) {
    document.getElementById('estadistica').classList.remove('bloqueado');
  }
  if (aprobados.includes('fisica_ii')) {
    document.getElementById('fisica_electronica').classList.remove('bloqueado');
  }
  if (aprobados.includes('fisica_ii') && aprobados.includes('matematica_ii')) {
    document.getElementById('fisica_iii').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_iii')) {
    document.getElementById('matematica_iv').classList.remove('bloqueado');
  }
  if (aprobados.includes('redes_electricas_i')) {
    document.getElementById('medidas_electricas').classList.remove('bloqueado');
  }
  if (aprobados.includes('redes_electricas_i') && aprobados.includes('matematica_ii')) {
    document.getElementById('redes_electricas_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('matematica_iv')) {
    document.getElementById('calculo_numerico').classList.remove('bloqueado');
  }
  if (aprobados.includes('fisica_ii') && aprobados.includes('matematica_iii')) {
    document.getElementById('ingenieria_electromagnetica').classList.remove('bloqueado');
  }
  if (aprobados.includes('redes_electricas_ii') && aprobados.includes('fisica_ii')) {
    document.getElementById('maquinas_electricas').classList.remove('bloqueado');
  }
  if (aprobados.includes('redes_electricas_ii')) {
    document.getElementById('senales_y_sistemas').classList.remove('bloqueado');
  }
  if (aprobados.includes('senales_y_sistemas')) {
    document.getElementById('control_automatico').classList.remove('bloqueado');
  }
  if (aprobados.includes('redes_electricas_i')) {
    document.getElementById('electronica_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('ingles_i_tecnico')) {
    document.getElementById('ingles_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('medidas_electricas') && aprobados.includes('maquinas_electricas')) {
    document.getElementById('laboratorio_de_maquinas_electricas').classList.remove('bloqueado');
  }
  if (aprobados.includes('programacion_de_computadores')) {
    document.getElementById('programacion_avanzada').classList.remove('bloqueado');
  }
  if (aprobados.includes('ingenieria_electromagnetica') && aprobados.includes('maquinas_electricas')) {
    document.getElementById('sistemas_de_potencia_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('medidas_electricas') && aprobados.includes('matematica_i')) {
    document.getElementById('sistemas_digitales').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_i')) {
    document.getElementById('electronica_de_potencia_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_i')) {
    document.getElementById('electronica_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_i')) {
    document.getElementById('laboratorio_electronica').classList.remove('bloqueado');
  }
  if (aprobados.includes('sistemas_digitales')) {
    document.getElementById('microprocesadores').classList.remove('bloqueado');
  }
  if (aprobados.includes('sistemas_de_potencia_i')) {
    document.getElementById('sistemas_de_potencia_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_ii') && aprobados.includes('senales_y_sistemas') && aprobados.includes('ingenieria_electromagnetica')) {
    document.getElementById('comunicaciones_electronicas').classList.remove('bloqueado');
  }
  if (aprobados.includes('control_automatico') && aprobados.includes('microprocesadores')) {
    document.getElementById('control_digital').classList.remove('bloqueado');
  }
  if (aprobados.includes('maquinas_electricas') && aprobados.includes('electronica_de_potencia_i')) {
    document.getElementById('electronica_de_potencia_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('calculo_numerico')) {
    document.getElementById('investigacion_operativa').classList.remove('bloqueado');
  }
  if (aprobados.includes('microprocesadores') && aprobados.includes('laboratorio_electronica')) {
    document.getElementById('laboratorio_de_microcomputadores').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_de_potencia_i') && aprobados.includes('laboratorio_de_maquinas_electricas') && aprobados.includes('control_automatico')) {
    document.getElementById('accionamientos_electricos').classList.remove('bloqueado');
  }
  if (aprobados.includes('economia_y_administracion_de_empresas') && aprobados.includes('formacion_de_emprendedores') && aprobados.includes('microprocesadores') && aprobados.includes('electronica_ii') && aprobados.includes('electronica_de_potencia_i') && aprobados.includes('sistemas_de_potencia_ii') && aprobados.includes('laboratorio_electronica')) {
    document.getElementById('electivo_i').classList.remove('bloqueado');
  }
  if (aprobados.includes('economia_y_administracion_de_empresas')) {
    document.getElementById('ingenieria_economica').classList.remove('bloqueado');
  }
  if (aprobados.includes('sistemas_de_potencia_ii')) {
    document.getElementById('distribucion_y_protecciones').classList.remove('bloqueado');
  }
  if (aprobados.includes('electivo_i')) {
    document.getElementById('electivo_ii').classList.remove('bloqueado');
  }
  if (aprobados.includes('ingles_iii')) {
    document.getElementById('ingles_iv').classList.remove('bloqueado');
  }
  if (aprobados.includes('microprocesadores') && aprobados.includes('electronica_ii')) {
    document.getElementById('instrumentacion_industrial').classList.remove('bloqueado');
  }
  if (aprobados.includes('ingenieria_economica')) {
    document.getElementById('preparacion_de_proyectos').classList.remove('bloqueado');
  }
  if (aprobados.includes('laboratorio_de_microcomputadores') && aprobados.includes('accionamientos_electricos')) {
    document.getElementById('automatas_programables').classList.remove('bloqueado');
  }
  if (aprobados.includes('preparacion_de_proyectos')) {
    document.getElementById('direccion_de_empresas').classList.remove('bloqueado');
  }
  if (aprobados.includes('electivo_iii')) {
    document.getElementById('electivo_iv').classList.remove('bloqueado');
  }
  if (aprobados.includes('electronica_de_potencia_i')) {
    document.getElementById('plantas_de_energia').classList.remove('bloqueado');
  }
  if (aprobados.includes('electivo_i') && aprobados.includes('control_moderno') && aprobados.includes('ingles_iii')) {
    document.getElementById('trabajo_de_titulo').classList.remove('bloqueado');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ramo').forEach(ramo => {
    ramo.addEventListener('click', () => {
      const id = ramo.id;
      let aprobados = JSON.parse(localStorage.getItem('aprobados') || '[]');
      if (!aprobados.includes(id)) aprobados.push(id);
      else aprobados = aprobados.filter(x => x !== id);
      localStorage.setItem('aprobados', JSON.stringify(aprobados));
      location.reload();
    });
  });
  desbloquearRamos();
});