function mostrarDetalle(nombre) {
  const productos = document.querySelectorAll('.producto');
  productos.forEach((prod) => {
    const titulo = prod.querySelector('h3');
    if (titulo.textContent === nombre) {
      const img = prod.querySelector('img');
      const visor = document.getElementById("visorImagen");
      const imgGrande = document.getElementById("imagenGrande");
      imgGrande.src = img.src;
      imgGrande.alt = nombre;
      visor.style.display = "flex";
    }
  });
}

function cerrarImagen() {
  document.getElementById("visorImagen").style.display = "none";
}


// Enviar formulario
document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  if (nombre && email && mensaje) {
    alert("Gracias por tu mensaje, " + nombre + "!");
    this.reset();
  } else {
    alert("Por favor completa todos los campos.");
  }
});
