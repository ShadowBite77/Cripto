let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Incrementa el índice
    const offset = -currentIndex * (100 / totalImages); // Calcula el desplazamiento
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
}

// Cambia la imagen cada 10 segundos (10000 ms)
setInterval(showNextImage, 4000); // Cambia el tiempo aquí si es necesariorval(showNextImage, 10000); // Cambia 10000 a la cantidad de milisegundos deseada

function copiarDireccion() {
    const direccion = document.getElementById("direccionBinance").value;
  
    navigator.clipboard.writeText(direccion)
      .then(() => {
        alert("Dirección copiada al portapapeles");
      })
      .catch(err => {
        console.error("Error al copiar: ", err);
        alert("No se pudo copiar. Copia manualmente.");
      });
  }