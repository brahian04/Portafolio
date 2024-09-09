// funcion que aplica estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link){
    var opciones= document.querySelectorAll('#links a');
    opciones[0].className= "";
    opciones[1].className= "";
    opciones[2].className= "";
    opciones[3].className= "";
    opciones[4].className= "";
    link.className= "seleccionado";

    // se hace desaparecer el menu cuando se ha seleccionado una opción en el modo reponsive
    var x= document.getElementById("nav");
    x.className= "";
}

// Menú responsive
function responsiveMenu(){
    var x= document.getElementById("nav");
    if(x.className===""){
        x.className= "responsive";
    }else{
        x.className= "";
    }
}

document.getElementById('imgProyecto1').addEventListener('click', function() {
    window.open('https://github.com/brahian04/Portafolio', '_blank');
});

document.getElementById('imgProyecto2').addEventListener('click', function() {
     window.open('https://github.com/brahian04/finalProjectBootcampSP', '_blank');
});

document.getElementById('imgProyecto3').addEventListener('click', function() {
    window.open('https://github.com/brahian04/bookstore', '_blank');
});

// //detectar scrolling para iniciar la animación de las barras de habilidades
// window.onscroll= function(){
//     efectoHabilidades()
// };

// // función que aplica la animación de la barra
// function efectoHabilidades(){
//     var skills= document.getElementById("skills");
//     var distancia_skills= window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills>=300){
//         document.getElementById("html").classList.add("barra-progreso1");
//         document.getElementById("javascript").classList.add("barra-progreso2");
//         document.getElementById("bd").classList.add("barra-progreso3");
//         document.getElementById("git").classList.add("barra-progreso4");
//     }
// }
