const url = 'https://jsonplaceholder.typicode.com/posts';

const url_Rick = 'https://rickandmortyapi.com/api/character/';

const imagenes = document.querySelector('#imagenes');
const parrafos = document.querySelector('#parrafos');


fetch(url_Rick).then((response) => response.json()).then((data) => {
    data.results.forEach(dat => {
        let img = document.createElement('img');
        img.src = `${dat.image}`;
        imagenes.appendChild(img);
    });

    console.log(data.results[0].name);
});

const HTMLResponse = document.querySelector('#contenedor');
const tpl = document.createElement('ul');//crea un fragment como react

fetch(url).then((response) => response.json()).then((users) => {
    users.forEach(user => {
        let clon = document.createElement('li');
        clon.appendChild(document.createTextNode(`${user.userId} ${user.title}`));
        tpl.appendChild(clon);
    });

    HTMLResponse.appendChild(tpl)
    //const tpl = users.map(user => `<li>${user.userId} ${user.title}</li>`);
    //HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});

var pet = $('#main form').attr('action');
var met = $('#main form').attr('method');


$.ajax({
    url: url_Rick,
    type: 'GET',
    dataType: 'json',
    success: function(json) {
        json.results.forEach(data => {
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${data.name}`));
            parrafos.appendChild(p);
        });
    },
    error: function(xhr, status){
        alert('error');
    }
})

/*const xhr = new XMLHttpRequest;

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        //0 unset, no se ha llamado al metodo open
        //1 se ha llamado al método open
        //2 Headers received, se esta llamando al método send()
        //3 loading, esta recibiendo la respuesta
        //4 done, se ha completado todo
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector('#contenedor');

        const tpl = data.map(user => `<li>${user.userId} ${user.title}</li>`);

        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', url);
xhr.send();*/

let text = document.getElementById('text');

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    //var vlue = window.scrollY;
    $('.zoom img').css({
        width: (100 + scroll/5) + "%"
    })
    text.style.left = scroll * 0.15 + 'px';
})

var scrollBoton = document.getElementById('top');
window.addEventListener("scroll", function(){
    scrollBoton.style.transform = "rotate("+this.window.pageYOffset+"deg)";
})