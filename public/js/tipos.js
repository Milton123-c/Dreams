// function getOffset( el ) {
//     var _x = 0;
//     var _y = 0;
//     while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
//           _x += el.offsetLeft - el.scrollLeft;
//           _y += el.offsetTop - el.scrollTop;
//           el = el.offsetParent;
//     }
//     return { top: _y, left: _x };
//     }
// let x = getOffset( document.getElementById('prueva') ).left;

// const myMove = (idClase) => {

//     let id = null;
//     const elem = document.getElementById(idClase);
//     let pos = 0;

//     const ejeX = window.innerWidth ;
//     const ejeY = window.innerHeight;

//     let eje  = elem.getBoundingClientRect();
//     let x = Math.floor( eje.left) + 125;
//     let y = Math.floor(eje.top) + 130;



//     // obtenemos la mitad de la pantalla 
//     const mitadX =  (ejeX / 2);
//     const mitadY = (ejeY / 2);

//     // obtenemos el resto que hace falta para la mitad
//     const restoX = mitadX - x;
//     const restoY = mitadY - y;

//     //incremento indexy
//     let indexY = 0;

//     //rotacion 
//     const rotateT = 3.142;

//     let incremento = 0;
//     let r = 0;

//     clearInterval(id);
//     id = setInterval(frame, 1);
//     function frame(){
//         if(pos == Math.abs(restoX)){
//             clearInterval(id);
//         }else {
//             pos += 1;


//     }
// } 

