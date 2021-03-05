$(document).ready(function(){
   $(window).scroll(function(){
       if( $(this).scrollTop() > 0){
           $('header').addClass('header2');
       } else{
           $('header').removeClass('header2');
       }
   });
});

function verificarRespuestas(){
    var total = 12;
    var puntos = 0;

    var testuno = document.forms["test"];
    var respuestas = ["c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c", "c"];

    for(var i = 1; i <= total; i++){
        if(testuno["p" + i].value === null || test["p" + i].value === ""){
            alert("Por favor responde la pregunta " + i);
            return false;
        }else {
            if(testuno["p" + i].value === respuestas [i -1]){
                puntos++;
            }
        }
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<H3>El empleado obtuvo <span>' + puntos + '</span> de <span>' + total + ' puntos</span></h3>';

    return false;
}