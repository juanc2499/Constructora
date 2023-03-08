
const btnScrollTop = document.querySelector("#btnScrollTop");
if(btnScrollTop){

    btnScrollTop.addEventListener("click", function (){
        window.scrollTo(0,0);
    });
}

/* FUNCIONES DE NAVEGACION ENTRE PAGINAS */
const btnProject1 = document.querySelector("#proyecto1");
if(btnProject1){
    btnProject1.addEventListener("click",function(){
        window.location.href="Proyectos.html"
    });
}


const btnProject2 = document.querySelector("#proyecto2");
if(btnProject2){
    btnProject2.addEventListener("click",function(){
        window.location.href="Proyectos.html"
    });
}


const btnProject3 = document.querySelector("#proyecto3");
if(btnProject3){
    btnProject3.addEventListener("click",function(){
        window.location.href="Proyectos.html"
    });
}

const btnInicio = document.querySelector("#inicio")
if(btnInicio){
    btnInicio.addEventListener("click", function(){
        window.location.href="index.html"
    });
}

const btnInicioModal = document.querySelector("#iniciomodal")
if(btnInicioModal){
    btnInicioModal.addEventListener("click", function(){
        window.location.href="index.html"
    });
}




/* var myCarousel = document.querySelector('#carouselExampleIndicators')
var carousel = new bootstrap.Carousel(myCarousel) */
