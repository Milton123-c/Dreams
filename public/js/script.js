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


//codigo para las lecturas de los sueños
const allBoton = document.querySelectorAll("#boton-na");
allBoton.forEach(element => {
  element.innerHTML = "Leer sueño 📚📚";

  element.addEventListener('click', ()=>{

  });
})


});