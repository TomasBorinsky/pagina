// obtener nombre
const params = new URLSearchParams(window.location.search);
const nombre = params.get('user') || 'Usuario';
document.getElementById('saludo-header').textContent = `Bienvenido/a ${nombre}`;

// lista vacia
let torneos = [];

// Referencias
const form = document.getElementById('form-abm');
const tabla = document.getElementById('tabla-abm').querySelector('tbody');

function renderTabla() {
  tabla.innerHTML = '';
  torneos.forEach((t, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${t.titulo}</td>
      <td>${t.juego}</td>
      <td>${t.plataforma}</td>
      <td>${t.fecha}</td>
      <td>${t.cupos}</td>
      <td>${t.objetivo}</td>
      <td>
        <button onclick="editar(${index})">Editar</button>
        <button onclick="borrar(${index})">Borrar</button>
      </td>
    `;
    tabla.appendChild(fila);
  });
}

// Alta / modificación
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const datos = {
    titulo: document.getElementById('titulo').value,
    juego: document.getElementById('juego').value,
    plataforma: document.getElementById('plataforma').value,
    fecha: document.getElementById('fecha').value,
    cupos: document.getElementById('cupos').value,
    objetivo: document.getElementById('objetivo').value,
    reglas: document.getElementById('reglas').value,
    premios: document.getElementById('premios').value,
    pdf: document.getElementById('pdf').value,
    stream: document.getElementById('stream').value
  };

  // reemplaza cuando se edita
  if (form.dataset.editIndex !== undefined) {
    torneos[form.dataset.editIndex] = datos;
    delete form.dataset.editIndex;
  } else {
    torneos.push(datos);
  }

  form.reset();
  renderTabla();
});

// Funciones editar y borrar
function editar(index) {
  const t = torneos[index];
  document.getElementById('titulo').value = t.titulo;
  document.getElementById('juego').value = t.juego;
  document.getElementById('plataforma').value = t.plataforma;
  document.getElementById('fecha').value = t.fecha;
  document.getElementById('cupos').value = t.cupos;
  document.getElementById('objetivo').value = t.objetivo;
  document.getElementById('reglas').value = t.reglas;
  document.getElementById('premios').value = t.premios;
  document.getElementById('pdf').value = t.pdf;
  document.getElementById('stream').value = t.stream;

  form.dataset.editIndex = index;
}

function borrar(index) {
  if (confirm('se va a borrar el torneo seleccionado, ¿continuar?')) {
    torneos.splice(index, 1);
    renderTabla();
  }
}
