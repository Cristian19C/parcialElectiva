
  document.addEventListener('DOMContentLoaded', function() {
    const filtroInput = document.getElementById('filtro-input');
    const filtrarBtn = document.getElementById('filtrar-text');
    
    filtrarBtn.addEventListener('click', function() {
      const filtroValor = filtroInput.value.toLowerCase();
      const filas = document.querySelectorAll('.table tbody tr');
      
      filas.forEach(function(fila) {
        const titulo = fila.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        if (titulo.includes(filtroValor)) {
          fila.style.display = '';
        } else {
          fila.style.display = 'none';
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const filtroFecha = document.getElementById('filtro-number');
    const filtrarBtn = document.getElementById('filtrar-number');
    
    filtrarBtn.addEventListener('click', function() {
        const fechaValor = filtroFecha.value;
        const filas = document.querySelectorAll('.table tbody tr');
        
        filas.forEach(function(fila) {
            const fecha = fila.querySelector('td:nth-child(13)').textContent;
            
            if (fecha.includes(fechaValor)) {
                fila.style.display = '';
            } else {
                fila.style.display = 'none';
            }
        });
    });
});


  document.addEventListener('DOMContentLoaded', function() {
    const filtroFechaInicio = document.getElementById('filtro-fecha-inicio');
    const filtroFechaFin = document.getElementById('filtro-fecha-fin');
    const filtrarBtn = document.getElementById('filtrar-rango');
    
    filtrarBtn.addEventListener('click', function() {
      const fechaInicioValor = filtroFechaInicio.value;
      const fechaFinValor = filtroFechaFin.value;
      const filas = document.querySelectorAll('.table tbody tr');
      
      filas.forEach(function(fila) {
        const fecha = fila.querySelector('td:nth-child(13)').textContent;
        
        if (fecha > fechaInicioValor && fecha < fechaFinValor) {
          fila.style.display = '';
        } else {
          fila.style.display = 'none';
        }
      });
    });
  });



