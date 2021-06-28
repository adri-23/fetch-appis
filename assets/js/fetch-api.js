/*haremos consulta a la api de los gatos
let apiFetch = fetch('https://api.thecatapi.com/v1/images/search');
//fetch: hace la peticion
appiFetch
    .then(resp => resp.json()) // .then :lo que se va ejecutar despues de averse hecho la respuesta
    .then(resp => {
        console.log(resp);
    });
*/

let button = document.querySelector('#button');
button.addEventListener('click', () => {
    let apiFetch = fetch('https://api.thecatapi.com/v1/images/search'); // fetch:hacer peticiones http 
    apiFetch
        .then(resp => resp.json()) // respuesta en formato jeison
        .then(data => {  // datos q estamosobteniendo
            let cat = document.querySelector('#cat');
            cat.src = data[0].url;  // cat: id del src=le la imagen.data: son los dastos q nos dieron en js. url: de la imagen
            console.log(data);  // imprimimos el dato q es el data
    }).catch(e => console.log(e))
})    