document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('miBoton');
    
    boton.addEventListener('click', () => {
        console.log('¡Hola! Has hecho clic en el botón.');
        alert('¡Has hecho clic en el botón!');
    });
});