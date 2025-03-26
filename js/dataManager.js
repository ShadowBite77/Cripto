// Función para cargar datos desde localStorage
function cargarDatos() {
    const datosGuardados = localStorage.getItem('criptoAppData');
    if (datosGuardados) {
      return JSON.parse(datosGuardados);
    } else {
      // Datos iniciales
      const datosIniciales = {
        saldo: 0,
        inversiones: [],
        transacciones: [],
        cuentaRetiro: {
          direccion: "",
          metodo: "TRC20"
        }
      };
      guardarDatos(datosIniciales);
      return datosIniciales;
    }
  }
  
  // Función para guardar datos en localStorage
  function guardarDatos(datos) {
    localStorage.setItem('criptoAppData', JSON.stringify(datos));
  }
  
  // Función para actualizar el saldo
  function actualizarSaldo(monto) {
    const datos = cargarDatos();
    datos.saldo += monto;
    guardarDatos(datos);
    return datos.saldo;
  }