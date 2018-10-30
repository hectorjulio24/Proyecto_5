
function inicioJuego(){
  ordenarBloques();
  animateForever();
}
function ordenarBloques(){
  $$('.contenido').each(function(item){
    item.setStyle({order: makeUniqueRandom()})
  })
}
var uniqueRandoms = [];
var numRandoms = 20;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;
}

function animateForever()
{
  var div = $('.main-titulo');
  var color1 = '#DCFF0E';
  var color2 = '#3BD6C6';

  div.animate({color: color1}, 500, function()
  {
    div.animate({color: color2}, 500, function()
    {
      animateForever();
    });
  });
}


document.observe("dom:loaded", function(){
  inicioJuego();
  $('activarJuego').observe('change', inicioJuego);
})



/*  //Evento para el botón mas (+)
    //document.write("<img src='image/back.jpg' class='carta'/>");
  //  $(".carta").after("<img src='image/back.jpg' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
function prueba(){
  document.write("<img src='image/6.png' class='carta'/>");
  document.write("<img src='image/back.jpg' class='carta'/>");



  //document.write("<img src='image/3.png' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
  //document.write("<img src='image/back.jpg' class='carta'/>");
document.write("<img src='image/4.png' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
  document.write("<img src='image/2.png' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
document.write("<img src='image/back.jpg' class='carta'/>");
  document.write("<img src='image/1.png' class='carta'/>");

}
  function showImage(){
      var numero = Math.floor((Math.random() * 4) + 1);
  		var imgs =  document.write("<img src='image/"+numero+".png' class='carta'/>");
        for (var i = 0; i < imgs.length; i++) {
  			imgs[i].style.visibility = "visible";
      }
  		}
showImage();
*/


/*
  //Evento para el botón menos (-)
  $("#menos").click(function(){
    $(".carta:last-of-type").remove();
  });

  //Evento al hacer click en una carta
  $(document).on("click", "img.carta", function(){
    //Función que carga una imágen aleatoria a la carta
    $(this).attr("src",function(){
      var numero = Math.floor((Math.random() * 52) + 1);
      var ruta = "image/"+numero+".png";
      return ruta;
    });

    //Calculo del número de la carta en la baraja y muestra en pantalla
    var ruta = $(this).attr("src");
    var numeroCarta = ruta.slice(0,-4);
    numeroCarta = numeroCarta.substr(6,2);
    $("#contenido-pantalla").html("La carta es la número: <b>" + numeroCarta + "</b> de la baraja");
  });

  //Evento de hover
  $(document).on({
    //Función al mouse estar sobre la carta
    mouseenter: function(){
      $(this).addClass("carta-seleccionada");
      $(this).css("border","2px solid yellow");
    },

    //Función al mouse dejar la carta
    mouseleave: function(){
      $(this).removeClass("carta-seleccionada");
      $(this).addClass("carta");
      $(this).css("border","0px");
    }
  }, "img.carta");

*/
