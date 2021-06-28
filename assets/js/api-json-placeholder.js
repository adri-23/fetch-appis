let btnUsers = document.querySelector('#btnUsers');
let divUsers = document.querySelector('#divUsers');
btnUsers.addEventListener('click', displayData);
/*
btnUsers.addEventListener('click', () => {
    let getUsers = fetch('https://jsonplaceholder.typicode.com/users');

    getUsers
        .then(resp => resp.json())
        .then(data => {
            data.forEach(user => {
                let parr = document.createElement('p');
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            });
        }).catch(e => console.log(e));

})
*/
async function displayData() {
    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);

    let data = await getUsers.json();
    data.forEach(user => {
        let parr = document.createElement('p');
        parr.textContent = `nombre de usuario:${user.name}.email:${user.email}.ciudad${user.address.city}`;
        divUsers.appendChild(parr);
    });
    console.log(data);
}



/*
 // otra manera mas sencilla de hacerlo
async function displayData() { // async hace que se vuelva asincrona
    console.log(await displayData());

    let getUsers = await fetch('https://jsonplaceholder.typicode.com/users'); //await: hace la peticion y espera la respuesta. peticion por fetch: espera a q responda
     let data = await getUsers.json(); // recibo datos en forma de json
     console.log(data); //mando a imprimir los dats solo en consola
 }

 displayData(); // mando a llamar la funcion
*/