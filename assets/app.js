//url:https://superheroapi.com/api.php/6731571410209674/search/


//se realiza el llamado a cada elemento
const NombrePersonaje = document.getElementById('Nombre');

const Button = document.getElementById('Seleccionar');
const ImagenPersonaje = document.getElementById('imagenPers');
const lista = document.getElementById('lista');
const form = document.getElementById('formulario');
let query = "";





//console.log(NombrePersonaje);
//se hace llamado al evento en la buscada dentro de la url de la api
Button.addEventListener('click', async (e) => {
e.preventDefault();

query = NombrePersonaje.value;
const URL =  `https://superheroapi.com/api.php/6731571410209674/search/${query}`;
const response = await fetch(URL)
const data = await response.json()

// conexion de la misma url para los datos del graficos
    const URLGRAF =  `https://superheroapi.com/api.php/6731571410209674/search/${query}`;
    const responsegraf = await fetch(URLGRAF)
    const dato= await responsegraf.json()

    let nombre = dato.results[0];
    

//console.log(data);


//console.log(data.results.powerstats)



//se captura y se unen  la url y el dato ingresado 
//para realizar la busqueda dentro de un forEach para llamar la imagen de la busqueda y presentar en el html

    
data.results.forEach((element) => {
    ImagenPersonaje.innerHTML += `
    <div class="Representacion" >
    <h4>${element.name}</h4>
    <img src=${element.image.url} class="Hero" alt=${element.name}>
    </div>
    
    `
        
});


console.log(nombre.powerstats);




    
//arreglo de super poderes
    const poder = [ "Combate" , "duravilidad" , "inteligencia" , "power" , "velocidad" , "strength"];

 //ingreso del valor para el grafico    
    const valor = [nombre.powerstats.combat, nombre.powerstats.durability, nombre.powerstats.intelligence, nombre.powerstats.power, nombre.powerstats.speed, nombre.powerstats.strength];
    
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: poder,
        datasets: [{
        label: nombre.name,
        data: valor,
        borderWidth: 1
        }]
        },
        options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
                }
    });

    

});




