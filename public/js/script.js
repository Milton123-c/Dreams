//este codigo se ejecuta cuando el documento se alla cargado totalmente
document.addEventListener('DOMContentLoaded', (event)=>{

  //obtenemos todas las imagenes y las guardamos 
  const imagenes = [];

  
const imagenHtml = document.querySelectorAll('.img ');

imagenHtml.forEach((element) => {
  imagenes.push(element.src);
});

const botonsImagenes = document.querySelectorAll('.img')
const mostrar = document.getElementById("visual");
const change = document.getElementById('get-imagen');



const indexImg = {index : 0};

let position = -100;

botonsImagenes.forEach((element, index)=>{
  element.addEventListener('click', ()=>{

    change.src = imagenes[index];
    indexImg.index = index;

    position = -100;
     
    requestAnimationFrame(animacion)
  
  });
});


  
 

  function animacion () {
    position += 2;
    mostrar.style.top = `${position}%`

    if(position <= -1){
      requestAnimationFrame(animacion)
    }

  }

  
  const posicion = {posicion : indexImg.index};

  const left = document.getElementById("left");
  left.addEventListener('click', ()=> {
    change.src = goBack(imagenes, posicion);
  });

  const right = document.getElementById("right");
  right.addEventListener('click', ()=> {
    change.src = next(imagenes, posicion);
  });
  
  const next = (imagenes, posicion) => {
    posicion.posicion++;
   
   if(posicion.posicion > imagenes.length - 1){
     
     posicion.posicion =  0;
   }
  
   return imagenes[posicion.posicion] || '';
   
 }

 const goBack = (imagenes, posicion) => {
  posicion.posicion = posicion.posicion ? posicion.posicion - 1 : imagenes.length - 1;
  return imagenes[posicion.posicion] || '';
}

//cerramos la visualizacion del fondo
const hiddenVisual = document.getElementById("visual")
let currentPosition = 0;

const cerrar = document.getElementById("cerrar");

cerrar.addEventListener('click', ()=> {
  const ejes = hiddenVisual.getBoundingClientRect();

  currentPosition = ejes.top
  requestAnimationFrame(ofAnimationVisual)
})




function ofAnimationVisual () {
  currentPosition -= 2;
  hiddenVisual.style.top = `${currentPosition}%`

  if(currentPosition >= -100){
    requestAnimationFrame(ofAnimationVisual)
  }

}


const allBoton = document.querySelectorAll("#boton-na");


allBoton.forEach(element => {
  element.innerHTML = "Leer sueño 📚📚";

  element.addEventListener('click', ()=>{
    // Para verificar que está seleccionando el botón correcto
    const tarjeta = element.closest("article");
  
    const containerLeer = tarjeta.querySelector(".leer");
   
    let leftTarjet = -100;

    function animarLeft () {
      
      containerLeer.style.left = leftTarjet + "%";

      if(leftTarjet < 0){
        leftTarjet += 2;
        requestAnimationFrame(animarLeft);
      }else{
        leftTarjet = -100;
      }
    }

    animarLeft();

    const cerrarT = tarjeta.querySelector("#cerrar-tarjeta");
    cerrarT.addEventListener('click', ()=>{
     
    });
 
  });
})




// var botones = document.querySelectorAll(".cambiar-color");

// for (var i = 0; i < botones.length; i++) {
//   botones[i].addEventListener("click", function() {
//     var div = this.closest(".contenedor");
//     div.style.backgroundColor = "red";
//   });
// }


});