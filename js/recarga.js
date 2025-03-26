document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario');
    
    formulario.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const monto = parseFloat(document.getElementById('monto').value);
      if (isNaN(monto) || monto <= 0) {
        alert('Por favor ingrese un monto válido');
        return;
      }
      
      // Actualizar saldo
      const nuevoSaldo = actualizarSaldo(monto);
      
      // Registrar transacción
      const datos = cargarDatos();
      datos.transacciones.push({
        tipo: 'recarga',
        monto: monto,
        fecha: new Date().toISOString()
      });
      guardarDatos(datos);
      
      alert(`Recarga exitosa de ${monto} USDT. Saldo actual: RD$${nuevoSaldo.toFixed(2)}`);
      window.location.href = 'Cuenta.html';
    });
  });