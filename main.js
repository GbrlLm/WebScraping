function montarPaginasGeekNerd(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let  elementos = documento.querySelectorAll(".listagem-linha .span4 .listagem-item");
    let div = document.createElement('div');

    elementos.forEach(item => {
        item.children[3].style.display = "none";
        item.children[4].style.display = "none";
        item.children[5].style.display = "none";
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        document.body.appendChild(div);
    });
}

function montarPaginaComic(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let  elementos = documento.querySelectorAll(".listagem-linha .span3 .listagem-item");
    let div = document.createElement('div');

    elementos.forEach(item => {
        item.children[3].style.display = "none";
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        document.body.appendChild(div);
    });
}

function ImaginarioNerdReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.imaginarionerd.com.br/", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginasGeekNerd(this.responseText);
            console.log("OK imaginario");
        }
    };
    xhttp.send();
}

function StudioGeekReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.studiogeek.com.br/", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginasGeekNerd(this.responseText);
            console.log("OK studio");
        }
    };
    xhttp.send();
}

function ComicStoreReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.comicstore.com.br/", true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaComic(this.responseText);
            console.log("OK comic");
            carrossel();
        }
    };
    xhttp.send();
}

window.onload = function() {
    ImaginarioNerdReq();
    StudioGeekReq();
    ComicStoreReq();
};

function carrossel() {
    var aaa = document.querySelectorAll(".carousel");
    console.log(aaa);
    aaa.forEach( aaa => {
        console.log(aaa.className);
        $(`.${aaa.className}`).slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
        // $(aaa.className).each(function(){
        //     var slickInduvidual = $(this);
        //     slickInduvidual.slick({
        //         dots: true,
        //         infinite: true,
        //         speed: 500,
        //         slidesToShow: 4,
        //         slidesToScroll: 4,
        //     });
        // })
    });
    console.log("aaa");
}

// aaa.forEach(div => {div.slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   });
// })
// $('.carousel').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   });