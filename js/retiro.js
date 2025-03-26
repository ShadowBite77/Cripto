document.addEventListener('DOMContentLoaded', function() {
    const datos = cargarDatos();
    
    // Mostrar saldo
    const saldoElement = document.querySelector('.balance span');
    if (saldoElement) {
      saldoElement.textContent = `${datos.saldo.toFixed(2)} USDT`;
    }
    
    // Selección de método de retiro
    const btnTrc = document.getElementById('btn-trc');
    if (btnTrc) {
      btnTrc.addEventListener('click', function() {
        const datos = cargarDatos();
        datos.cuentaRetiro.metodo = 'TRC20';
        guardarDatos(datos);
      });
    }
    
    // Formulario de retiro
    const withdrawForm = document.getElementById('withdraw-form');
    if (withdrawForm) {
      withdrawForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const monto = parseFloat(withdrawForm.querySelector('input[type="number"]').value);
        const direccion = withdrawForm.querySelector('input[type="text"]').value;
        const password = withdrawForm.querySelector('input[type="password"]').value;
        
        if (isNaN(monto)) {
          alert('Monto inválido');
          return;
        }
        
        const datos = cargarDatos();
        
        if (monto < 5 || monto > 300000) {
          alert('El monto debe estar entre 5.00 y 300000.00 USDT');
          return;
        }
        
        if (monto > datos.saldo) {
          alert('Saldo insuficiente');
          return;
        }
        
        if (password.length < 4) {
          alert('Contraseña demasiado corta');
          return;
        }
        
        // Actualizar saldo
        datos.saldo -= monto;
        
        // Registrar transacción
        datos.transacciones.push({
          tipo: 'retiro',
          monto: monto,
          fecha: new Date().toISOString(),
          direccion: direccion,
          metodo: datos.cuentaRetiro.metodo,
          estado: 'pendiente'
        });
        
        // Guardar dirección de retiro
        datos.cuentaRetiro.direccion = direccion;
        
        guardarDatos(datos);
        
        alert(`Retiro solicitado por ${monto} USDT. Llegará en 15 minutos.`);
        window.location.href = 'Cuenta.html';
      });
    }
  });