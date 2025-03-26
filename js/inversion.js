document.addEventListener('DOMContentLoaded', function() {
    const botonesInvertir = document.querySelectorAll('.btn-invertir');
    
    botonesInvertir.forEach(boton => {
      boton.addEventListener('click', function() {
        const tarjeta = this.closest('.tarjeta');
        const plan = tarjeta.querySelector('h3').textContent;
        const monto = parseFloat(tarjeta.querySelector('.verde').textContent.replace('USD$', ''));
        
        const datos = cargarDatos();
        
        if (monto > datos.saldo) {
          alert('Saldo insuficiente para esta inversión');
          return;
        }
        
        // Registrar inversión
        datos.inversiones.push({
          plan: plan,
          monto: monto,
          fechaInicio: new Date().toISOString(),
          estado: 'activa'
        });
        
        // Actualizar saldo
        datos.saldo -= monto;
        
        guardarDatos(datos);
        
        alert(`Inversión en ${plan} por ${monto} USDT realizada con éxito`);
        window.location.href = 'Cuenta.html';
      });
    });
  });