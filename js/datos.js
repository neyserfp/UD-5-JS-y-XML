window.addEventListener('load', function(){

  let peticion = new XMLHttpRequest();

  var lista = new Array();
  
  var peliculasArray = [];

  peticion.onload = function() {
    if (this.readyState === 4 && this.status === 200) {
  
      let peliculas = this.responseXML;
  
      let mispeliculas = peliculas.querySelectorAll("pelicula");
      let d1 = document.querySelector("#d1");
      let d2 = document.querySelector("#d2");
  
      mispeliculas.forEach(function(pelicula) {
  
        let nombre = pelicula.querySelector("titulo").textContent;
        let direccion = pelicula.querySelector("direccion").textContent;
        let id = pelicula.getAttribute('id');
  
        let d3 = document.createElement("div");
        d3.className = "col-6 fondo";
  
        let img1 = document.createElement("img");
        img1.src = "./img/"+pelicula.querySelector("cartel").textContent;
        img1.className = "col-10 wd-100 m-2 img01";
        img1.setAttribute('ide', id);
  
        let h1 = document.createElement("h2"); 
        h1.className = "text-center";
        h1.textContent = pelicula.querySelector("titulo").textContent;
  
        d3.appendChild(img1);
        d3.appendChild(h1);
        d1.appendChild(d3);
              
        console.log(id);
      });

      
      


      var imagenes = document.querySelectorAll('.img01');

      imagenes.forEach(function(imagen) {
        imagen.addEventListener('click', function() {

          while (d2.firstChild) {
            d2.removeChild(d2.firstChild);
          }

          let ide = imagen.getAttribute('ide');
          console.log(ide);

          mispeliculas.forEach(function(pelicula) {

            let id = pelicula.getAttribute('id');

            if (id==ide) {
              let titulo = pelicula.querySelector("titulo").textContent;
              let video = pelicula.querySelector("video").textContent;
              let direccion = "Dirección: "+ pelicula.querySelector("direccion").textContent;
              let duracion = "Duración: "+ pelicula.querySelector("duracion").textContent;
              let nacionalidad = "Nacionalidad: "+ pelicula.querySelector("nacionalidad").textContent;
              let artistas = "Artistas: "+ pelicula.querySelector("artistas").textContent;
              let genero = "Género: "+ pelicula.querySelector("genero").textContent;
              let sinopsis = "Sinopsis: "+ pelicula.querySelector("sinopsis").textContent;

              let h2 = document.createElement("h2");

              let iframe1 = document.createElement("iframe");
              iframe1.setAttribute('width', '560'); // Ancho del iframe
              iframe1.setAttribute('height', '315'); // Altura del iframe
              iframe1.setAttribute('src', 'https://www.youtube.com/embed/'+video); 
              iframe1.setAttribute('frameborder', '0');
              iframe1.setAttribute('allowfullscreen', '');

              let p1 = document.createElement("p");
              let p2 = document.createElement("p");
              let p3 = document.createElement("p");
              let p4 = document.createElement("p");
              let p5 = document.createElement("p");
              let p6 = document.createElement("p");

              h2.textContent = titulo;
              p1.textContent = direccion;
              p2.textContent = duracion;
              p3.textContent = nacionalidad;
              p4.textContent = artistas;
              p5.textContent = genero;
              p6.textContent = sinopsis;

              d2.append(h2, iframe1, p1, p2, p3, p4, p5, p6);
            }

          });
          
        });
      });


      
    }


  };

  
  // Hacer la solicitud al archivo XML
  peticion.open("GET", "datos.xml", true);
  peticion.send();


});


