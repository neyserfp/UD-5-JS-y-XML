let peticion = new XMLHttpRequest();

peticion.onload = function() {
  if (this.readyState === 4 && this.status === 200) {

    let peliculas = this.responseXML;

    let mispeliculas = peliculas.querySelectorAll("pelicula");

    mispeliculas.forEach(function(pelicula) {
        let nombre = pelicula.querySelector("titulo").textContent;
        let direccion = pelicula.querySelector("direccion").textContent;
        console.log("Título: "+nombre);
        console.log("Dirección: "+direccion);
    });
  }
};

// Hacer la solicitud al archivo XML
peticion.open("GET", "datos.xml", true);
peticion.send();