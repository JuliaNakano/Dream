// =========================================================
// funcoes para os comentarios
function novoComentario() {
    // Adiciona um novo comentario na pagina
    var comentario = document.getElementById("comentario").value;

    // confere se tá vazio
    if (comentario.length != 0){
        document.getElementById("critica-reviews").innerHTML = "<div class='critica-comentario'><h4>Usuário</h4><p>" + comentario + "</p></div>" + document.getElementById("critica-reviews").innerHTML
    } else {
        alert("Caixa de comentário está vazia!");
    }
}

// =========================================================
/*
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
let idx =0;
function carrossel(){

    idx++;
    if(idx > img.length-1 ){

        idx=0;

    }
    imgs.style.transform = `translateX(${-idx* 500}px)`;
}

setInterval(carrossel, 1800);
*/
var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
