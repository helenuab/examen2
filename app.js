
// contador
let contador = 0;
let contadorSpan = document.getElementById('contador')

function click (){
    contador ++
    contadorSpan.textContent = contador

}

document.addEventListener('click', click)


//Cambia color fondo
const btn = document.querySelector('button')
// const btn = document.querySelector('label')
const body = document.querySelector('body')

//Creamos el arrays para cambiar los colores
// const colores = ['red', 'blue', 'yellow', 'green', 'black']
const colores = ['lightcyan', 'powderblue', 'palegreen', 'mediumaquamarine', 'cornsilk', 'lightyellow', 'moccasin', 'lavender', 'gainsboro']


btn.addEventListener('click', fondo)

function fondo(){
    const indice = parseInt(Math.random()*colores.length)
    body.style.backgroundColor = colores[indice]
}


// RELOJ
function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + " : " + mm + " : " + ss;
    let watch = document.querySelector('.watch');
    watch.innerHTML = time;
}

setInterval(currentTime, 1000);
