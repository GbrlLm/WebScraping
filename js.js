function montarPaginaNerd(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha .span4 a");
    aaa.forEach(item => {
        console.log(item)
        var div2 = document.createElement("a");
        div2.setAttribute("href", item.href);
        div2.innerHTML = item.title;
        document.body.appendChild(div2);
    });
}

function montarPaginaGeek(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha .span4 a");
    aaa.forEach(item => {
        console.log(item)
        var div2 = document.createElement("a");
        div2.setAttribute("href", item.href);
        div2.innerHTML = item.title;
        document.body.appendChild(div2);
    });
}

function montarPaginaComic(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    let aaa = documento.querySelectorAll(".listagem-linha .span3 a");
    aaa.forEach(item => {
        console.log(item)
        var div2 = document.createElement("a");
        div2.setAttribute("href", item.href);
        div2.innerHTML = item.title;
        document.body.appendChild(div2);
    });
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