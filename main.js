function getUrlObject(){
    return [ 
        {url:"https://www.comicstore.com.br/", callback: montarPaginaComic},
        {url: "https://www.studiogeek.com.br/", callback: montarPaginasGeekNerd}, 
        {url: "https://www.imaginarionerd.com.br/", callback: montarPaginasGeekNerd}
    ]
}

window.onload = async function() {
    getUrlObject().forEach(async item => {
        let result = await makeRequest("GET",item.url);  
        item.callback(result);
    });
    console.log("carrosel");
    await carrossel();

};

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

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
    console.log("pagina montada");
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
    console.log("pagina montada");
}

function carrossel(){
    return new Promise(function (resolve, reject) {
        let classe = document.querySelectorAll(".carousel");
        if (classe.length > 0) {
                resolve(
                    $('.carousel').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  })
                );
        } else {
            reject(
                console.log("Erro!")
            );
        }
    console.log("fim do carrosel");
    });
}


    
// var classes = document.querySelectorAll(".carousel");
// classes.forEach( item => {
//     $(`.${item.className}`).slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//     });
// });

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