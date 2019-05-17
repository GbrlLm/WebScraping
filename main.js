function montarPaginaNerd(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let elementos = documento.querySelectorAll(".listagem-linha .span4 .listagem-item");
    let div = document.createElement('div');

    elementos.forEach(item => {
        console.log(item);
        item.children[3].style.display = "none";
        item.children[4].style.display = "none";
        item.children[5].style.display = "none";
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        document.body.appendChild(div);
    });

    carrossel();
}

function montarPaginaGeek(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let  elementos = documento.querySelectorAll(".listagem-linha .span4 .listagem-item");
    let div = document.createElement('div');

    elementos.forEach(item => {
        console.log(item);
        item.children[3].style.display = "none";
        item.children[4].style.display = "none";
        item.children[5].style.display = "none";
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        document.body.appendChild(div);
    });

    carrossel();
}

function montarPaginaComic(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");

    let  elementos = documento.querySelectorAll(".listagem-linha .span3 .listagem-item");
    let div = document.createElement('div');

    elementos.forEach(item => {
        console.log(item);
        item.children[3].style.display = "none";
        div.setAttribute("class", "carousel");
        div.appendChild(item);
        document.body.appendChild(div);
    });

    carrossel();
}

function ImaginarioReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.imaginarionerd.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaNerd(this.responseText);
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
            montarPaginaGeek(this.responseText);
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
        }
    };
    
    xhttp.send();
}

function carrossel() {
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      });
}