let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    const offset = -currentIndex * (100 / totalImages);
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 4000);

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