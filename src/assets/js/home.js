var intervalo = 4000;
var imagem;

function slide1(){
    document.getElementById("slide").src = "../../../assets/img/home/carrossel1.png";
    setTimeout(slide2, intervalo);
}

function slide2(){
    document.getElementById("slide").src = "../../../assets/img/home/carrossel2.png";
    setTimeout(slide1, intervalo);
}

/*function slide3(){
    document.getElementById("slide").src = "../../../assets/img/home/carrossel3.png";
    setTimeout(slide1, intervalo);
}*/