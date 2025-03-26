document.addEventListener('DOMContentLoaded', function() {
    const datos = cargarDatos();
    
    // Mostrar saldo
    const saldoElement = document.querySelector('.fondo-info h2');
    if (saldoElement) {
      saldoElement.textContent = `RD$${datos.saldo.toFixed(2)}`;
    }
    
    // Botones de recargar y retirar ya están enlazados a sus páginas
  });