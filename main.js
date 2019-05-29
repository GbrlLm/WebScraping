function getUrlObject(){
    return [ 
        {url:"https://www.comicstore.com.br/", callback: montarPaginaComic},
        {url: "https://www.studiogeek.com.br/", callback: montarPaginasGeekNerd}, 
        {url: "https://www.imaginarionerd.com.br/", callback: montarPaginasGeekNerd}
    ]
}

window.onload = async function() {
    getUrlObject().forEach(async item => {
        console.log("antes result", item.url)
        await makeRequest("GET", item.url, item.callback);
        console.log("result ", item.url);
    });
    console.log("carrosel");
    carrossel();

};

function makeRequest(method, url, pagina) {
    new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, false);
        xhr.onreadystatechange = async function () {
            if (this.status >= 200 && this.status < 300) {
                console.log("resolve makeReq");
                console.log("pagina",pagina);
                pagina(xhr.response);
                resolve({resultado: "OK"});
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
    
        document.querySelectorAll(".carousel");

                    $('.carousel').slick({
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  });
    console.log("fim do carrosel");
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