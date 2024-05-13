const parrafo = document.getElementById('parrafo');
const cuerpo = document.getElementById("cuerpo");
const imagen = document.getElementById("imagen");
const att = document.getElementById("texto2");
function enviar() {
    
    const nombre = document.getElementById('entrada').value;

    
    parrafo.textContent = "Buen día profe " + nombre + " En este dia tan especial, le doy agradecimientos por su dedicación, pasión y compromiso con la educación; Gracias por sus enseñanzas, aportes que nos ha brindado durante esta trayectoria y confiar en nuestras capacidades y potenciales.    " + "             Att:Jhon ever";
    cuerpo.style.display = "none";
    imagen.style.display = "block"
    parrafo.style.display = "block"
    att.style.display = "flex"

}

