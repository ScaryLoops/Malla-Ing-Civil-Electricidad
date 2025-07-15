// Créditos oficiales de cada ramo
const creditos = {
  'computacion': 3,
  'comunicacion': 4,
  'deportes1': 2,
  'introduccion': 4,
  'matematica1': 14,
  'deportes2': 2,
  'fisica1': 9,
  'ingenieria_sociedad': 4,
  'matematica2': 12,
  'programacion': 6,
  'fisica2': 9,
  'matematica3': 9,
  'quimica': 6,
  'redes1': 4,
  'tecnologia': 3,
  'estadistica': 6,
  'fisica_electronica': 3,
  'fisica3': 6,
  'matematica4': 6,
  'medidas': 3,
  'redes2': 5,
  'calculo': 6,
  'electromagnetica': 6,
  'ingles1': 4,
  'maquinas': 6,
  'senales': 6,
  'control': 5,
  'electronica1': 4,
  'ingles2': 4,
  'lab_maquinas': 4,
  'programacion_avanzada': 5,
  'sistemas_potencia1': 5,
  'sistemas_digitales': 6,
  'economia': 4,
  'electronica_potencia1': 6,
  'electronica2': 4,
  'emprendedores': 2,
  'lab_electronica': 4,
  'microprocesadores': 4,
  'sistemas_potencia2': 6,
  'comportamiento': 3,
  'comunicaciones': 6,
  'control_digital': 6,
  'electronica_potencia2': 6,
  'investigacion': 4,
  'lab_micro': 5,
  'accionamientos': 7,
  'control_moderno': 6,
  'electivo1': 5,
  'ingenieria_economica': 4,
  'ingles3': 4,
  'control_riesgo': 2,
  'distribucion': 6,
  'electivo2': 5,
  'electivo3': 5,
  'ingles4': 4,
  'instrumentacion': 6,
  'proyectos': 4,
  'automatas': 6,
  'direccion': 4,
  'electivo_titulacion': 5,
  'electivo4': 3,
  'gestion': 4,
  'plantas': 6,
  'trabajo_titulo': 30
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
  // Año 1 - Semestre 2
  'deportes2': [],
  'fisica1': ['matematica1'],
  'ingenieria_sociedad': [],
  'matematica2': ['matematica1'],
  'programacion': ['computacion'],
  
  // Año 2 - Semestre 1
  'fisica2': ['fisica1', 'matematica2'],
  'matematica3': ['matematica2'],
  'quimica': [],
  'redes1': ['matematica1'],
  'tecnologia': [],
  
  // Año 2 - Semestre 2
  'estadistica': ['matematica2'],
  'fisica_electronica': ['fisica2'],
  'fisica3': ['fisica2', 'matematica2'],
  'matematica4': ['matematica3'],
  'medidas': ['redes1'],
  'redes2': ['redes1', 'matematica2'],
  
  // Año 3 - Semestre 1
  'calculo': ['matematica4'],
  'electromagnetica': ['fisica2', 'matematica3'],
  'ingles1': [],
  'maquinas': ['redes2', 'fisica2'],
  'senales': ['redes2'],
  
  // Año 3 - Semestre 2
  'control': ['senales'],
  'electronica1': ['redes1'],
  'ingles2': ['ingles1'],
  'lab_maquinas': ['medidas', 'maquinas'],
  'programacion_avanzada': ['programacion'],
  'sistemas_potencia1': ['electromagnetica', 'maquinas'],
  'sistemas_digitales': ['medidas', 'matematica1'],
  
  // Año 4 - Semestre 1
  'economia': [],
  'electronica_potencia1': ['electronica1'],
  'electronica2': ['electronica1'],
  'emprendedores': [],
  'lab_electronica': ['electronica1'],
  'microprocesadores': ['sistemas_digitales'],
  'sistemas_potencia2': ['sistemas_potencia1'],
  
  // Año 4 - Semestre 2
  'comportamiento': [],
  'comunicaciones': ['electronica2', 'senales', 'electromagnetica'],
  'control_digital': ['control', 'microprocesadores'],
  'electronica_potencia2': ['maquinas', 'electronica_potencia1'],
  'investigacion': ['calculo'],
  'lab_micro': ['microprocesadores', 'lab_electronica'],
  
  // Año 5 - Semestre 1
  'accionamientos': ['electronica_potencia1', 'lab_maquinas', 'control'],
  'control_moderno': [],
  'electivo1': ['economia', 'emprendedores', 'microprocesadores', 'electronica2', 'electronica_potencia1', 'sistemas_potencia2', 'lab_electronica'],
  'ingenieria_economica': ['economia'],
  'ingles3': [],
  
  // Año 5 - Semestre 2
  'control_riesgo': [],
  'distribucion': ['sistemas_potencia2'],
  'electivo2': ['economia', 'emprendedores', 'microprocesadores', 'electronica2', 'electronica_potencia1', 'sistemas_potencia2', 'lab_electronica'],
  'electivo3': [],
  'ingles4': ['ingles3'],
  'instrumentacion': ['microprocesadores', 'electronica2'],
  'proyectos': ['ingenieria_economica'],
  
  // Año 6 - Semestre 1
  'automatas': ['lab_micro', 'accionamientos'],
  'direccion': ['proyectos'],
  'electivo_titulacion': [],
  'electivo4': ['electivo3'],
  'gestion': [],
  'plantas': ['electronica_potencia1'],
  
  // Año 6 - Semestre 2
  'trabajo_titulo': ['electivo1', 'control_moderno', 'ingles3']
};

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza qué ramos están desbloqueados o bloqueados según prerrequisitos
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    // Verificar si se cumplen prerrequisitos normales
    let puedeDesbloquear = reqs.every(r => aprobados.includes(r));

    // Reglas especiales para electivos
    if (destino === 'electivo1' || destino === 'electivo2') {
      puedeDesbloquear = reqs.some(r => aprobados.includes(r)); // Solo requiere uno de los requisitos
    }

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      // Si está aprobado, no debe estar bloqueado
      elem.classList.remove('bloqueado');
    }
  }
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});
