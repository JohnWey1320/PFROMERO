const formularioBusqueda = document.getElementById('formularioBusqueda');
const inputBusqueda = document.getElementById('busqueda');
const resultadosBusqueda = document.getElementById('resultadosBusqueda');
const botonBorrarSessionStorage = document.getElementById('borrarSessionStorage');

formularioBusqueda.addEventListener('submit', function(event) {
  event.preventDefault();
  const valorBusqueda = inputBusqueda.value.trim();

  // Realizar la búsqueda aquí y mostrar los resultados en la lista

  // Guardar el valor de búsqueda en el sessionStorage
  sessionStorage.setItem('ultimaBusqueda', valorBusqueda);
});

botonBorrarSessionStorage.addEventListener('click', function() {
  // Borrar el valor de búsqueda almacenado en el sessionStorage
  sessionStorage.removeItem('ultimaBusqueda');
  inputBusqueda.value = '';
});

// Al cargar la página, cargar el valor de búsqueda desde el sessionStorage
document.addEventListener('DOMContentLoaded', function() {
  const ultimaBusqueda = sessionStorage.getItem('ultimaBusqueda');
  if (ultimaBusqueda) {
    inputBusqueda.value = ultimaBusqueda;
  }
});


