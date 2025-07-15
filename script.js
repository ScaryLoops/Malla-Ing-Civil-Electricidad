
let materias = [];

function cargarMaterias() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        materias = data;
        renderMaterias();
    });
}

function renderMaterias() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    materias.forEach(m => {
        const habilitada = m.requisitos.every(req => localStorage.getItem(req) === "true");

        const div = document.createElement("div");
        div.className = `materia ${habilitada ? "habilitada" : "bloqueada"}`;
        div.innerText = m.nombre;

        if (habilitada) {
            div.onclick = () => {
                const aprobada = localStorage.getItem(m.codigo) === "true";
                localStorage.setItem(m.codigo, !aprobada);
                renderMaterias();
            };
        }

        if (localStorage.getItem(m.codigo) === "true") {
            div.classList.add("aprobada");
        }

        contenedor.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", cargarMaterias);
