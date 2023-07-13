//url:https://superheroapi.com/api.php/6731571410209674/search/


//se realiza el llamado a cada elemento
const NombrePersonaje = document.getElementById('Nombre');

const Button = document.getElementById('Seleccionar');
const ImagenPersonaje = document.getElementById('imagenPers');

let query = "";







//console.log(NombrePersonaje);
//se hace llamado al evento en la buscada dentro de la url de la api
Button.addEventListener('click', async (e) => {
e.preventDefault();
query = NombrePersonaje.value;
const URL =  `https://superheroapi.com/api.php/6731571410209674/search/${query}`;
const response = await fetch(URL)
const data = await response.json()
//console.log(data);
console.log(data.results);
//console.log(data.results.powerstats)
//se captura y se unen  la url y el dato ingresado 
//para realizar la busqueda dentro de un forEach 
data.results.forEach((element) => {
    ImagenPersonaje.innerHTML += `
    <div class="Representacion" >
    <h4>${element.name}</h4>
    <img src=${element.image.url} class="Hero" alt=${element.name}>
    </div>
    
    `

});



console.log(data);

//console.log(Grafico);
const ctx = document.getElementById('myChart');

const Grafico = (data) => {
//let Powerstats = element.powerstats;
  //  let Poder = Powerstats.flatMap((ele) => ele.name);
    


const valor = data.results[0].map(function(numero){

    return numero.powerstats.name[0];
});
console.log(valor);
const poder = data.results[0].map(function(nombre){

    return nombre.powerstats;
});
console.log(poder);
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
            labels: poder,
            datasets: [{
                        label: Grafico.name,
                        data:valor ,
                        backgroundColor:[
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(205, 99, 132)',
                        'rgb(250, 162, 235)',
                        'rgb(50, 205, 86)'
                        ],
                        hoverOffset: 4
    }]
            }
    
    
});
};


});
