let peticion = new XMLHttpRequest();

var lista = new Array();

console.log(lista);

peticion.onload = function() {
  if (this.readyState === 4 && this.status === 200) {

    let peliculas = this.responseXML;

    let mispeliculas = peliculas.querySelectorAll("pelicula");

    let s1 = document.querySelector("#s1");
    let d1 = document.querySelector("#d1");
    let d2 = document.querySelector("#d2");

    mispeliculas.forEach(function(pelicula) {

        let d3 = document.createElement("div");
        d3.className = "col-6 fondo";
        let img1 = document.createElement("img");
        img1.src = "./img/"+pelicula.querySelector("cartel").textContent;
        img1.className = "col-10 wd-100 m-2";
        let h1 = document.createElement("h2"); 
        h1.className = "text-center";
        h1.textContent = pelicula.querySelector("titulo").textContent;
        d3.appendChild(img1);
        d3.appendChild(h1);
        d1.appendChild(d3);
              
        let nombre = pelicula.querySelector("titulo").textContent;
        let direccion = pelicula.querySelector("direccion").textContent;
        console.log(typeof pelicula);
        console.log(pelicula);
        lista.push(pelicula);
    });

    
  }
};

// Hacer la solicitud al archivo XML
peticion.open("GET", "datos.xml", true);
peticion.send();