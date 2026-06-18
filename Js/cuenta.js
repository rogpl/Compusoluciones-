const formulario=document.querySelector('.form');
const contraseña=document.getElementById('psw');
const confirmar_contraseña=document.getElementById('confpsw');

function validarcontraseña()
{
    if (contraseña.value!==confirmar_contraseña.value)
    {
        confirmar_contraseña.setCustomValidity("Las contraseñas no coinciden");
    }
    else 
    {
        confirmar_contraseña.setCustomValidity("");
    }
}

contraseña.addEventListener('input', validarcontraseña);
confirmar_contraseña.addEventListener('input', validarcontraseña);

formulario.addEventListener('submit', (event)=>{
    if(!formulario.checkValidity())
    {
        event.preventDefault();
        alert("Error: Revisa los campos antes de enviar");
    }
    else
    {
        alert("Validación exitosa. Datos listos para procesar.");
    }
})