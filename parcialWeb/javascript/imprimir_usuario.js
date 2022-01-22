function darResultados(){
    document.getElementById('nombre').value = localStorage.getItem('nombre');
    document.getElementById('gusto1').value = localStorage.getItem('gustos');
    document.getElementById('porcentaje').value = localStorage.getItem('porcentaje');
    document.getElementById('titulo').textContent = localStorage.getItem('nombre');
    document.getElementById('telefono').value = localStorage.getItem('telefono');
} 

darResultados();