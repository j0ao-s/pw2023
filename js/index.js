document.querySelector('#form-busca').onsubmit  = function() {
    if (document.querySelector('#q').value == ''){
        document.querySelector('#q').style.border = '1px solid red';
        return false;
    }
}

// var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];

// var bannerAtual = 0;

// function trocarBanner (){
//     bannerAtual = (bannerAtual + 1) % 2;
//     document.querySelector('.container-destaque img').src = banners[bannerAtual];
// }

// setInterval(trocarBanner, 4000);

//CODIGO ABAIXO ADICIONA UM SLIDER NAS FOTOS DO SITE.
window.addEventListener('load', slider);

let index = 0;

let a = document.querySelectorAll('.corredor-img img');

function mostrarImagem (){
    a.forEach(img => img.classList.remove('active'));
    a[index].classList.add('active');
    //essa função adciona a classe "active" para cada um
}

function slider (){
    setInterval(() => {
        index++;
        if (index === a.length) {
          index = 0;
        } //se estiver no ultimo ele zera
        mostrarImagem();
      }, 4000);
}

