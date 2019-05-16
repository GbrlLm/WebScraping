function montarPaginaNerd(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".slick-list draggable")
    .forEach(div => {
        var bbb = div.children;
        console.log('Nerd ' + bbb);
    //     // Array.from(aaa).forEach(x => {
    //     //     var noticia = x.children;
    //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    //     // });
    //     // var div2 = document.createElement("div");
    //     // div2.innerHTML = p;
    //     // document.body.appendChild(div2);
    });
}

function montarPaginaGeek(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha")
    .forEach(div => {
        var bbb = div.children;
        console.log('geek ' + bbb);
    //     // Array.from(aaa).forEach(x => {
    //     //     var noticia = x.children;
    //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    //     // });
    //     // var div2 = document.createElement("div");
    //     // div2.innerHTML = p;
    //     // document.body.appendChild(div2);
    });
}

function montarPaginaComic(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha ")
    .forEach(div => {
        var bbb = div.children;
        console.log('comic ' +bbb);
    //     // Array.from(aaa).forEach(x => {
    //     //     var noticia = x.children;
    //     //     Array.from(noticia).forEach(y => document.body.appendChild(y));
    //     // });
    //     // var div2 = document.createElement("div");
    //     // div2.innerHTML = p;
    //     // document.body.appendChild(div2);
    });
}

function NerdonautasReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.nerdonautas.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPaginaNerd(this.responseText);
            console.log("OK nerdonautas");
        }
        else{
            console.log("erro");
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
        else{
            console.log("erro");
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
        else{
            console.log("erro");
        }
    };
    
    xhttp.send();
}