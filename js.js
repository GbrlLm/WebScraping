function montarPagina(pagina){
    var parser = new DOMParser();
    var documento = parser.parseFromString(pagina, "text/html");
    console.log(documento);
    // documento.querySelectorAll(".noticias-direita").forEach(function(div){
    //     var as = div.children;
    //     Array.from(as).forEach(function(a){
    //         var noticia = a.children;
    //         Array.from(noticia).forEach(x => document.body.appendChild(x));
    //     })
        //var div2 = document.createElement("div");
        //div2.innerHTML = p;
        //document.body.appendChild(div2);
    // });
}

//description-noticia
function sendReq() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        montarPagina(this.responseText);
        console.log("OK");
      }
      else{
          console.log("erro");
      }
    };
  
  xhttp.open("GET", "https://www.nerdonautas.com.br/", true);
  xhttp.send();
}

function teste(){
    sendReq();
}

function criarEvento(){
    document.querySelector("button").addEventListener("click",function(){
        teste();
    })
}

window.onload = criarEvento;