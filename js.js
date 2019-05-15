function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    documento.querySelectorAll(".slick-slide").forEach(div => {
        var li = div.children;
        // Array.from(as).forEach(function(a){
        //     var noticia = a.children;
        //     Array.from(noticia).forEach(x => document.body.appendChild(x));
        // });
        console.log(li);
        // var div2 = document.createElement("div");
        // div2.innerHTML = p;
        // document.body.appendChild(div2);
    });
}

//Nerdonautas
function NerdonautasReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://www.nerdonautas.com.br/", true);
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            montarPagina(this.responseText);
            console.log("OK");
        }
        else{
            console.log("erro");
        }
    };
    
    xhttp.send();
}

function teste(){
    NerdonautasReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;