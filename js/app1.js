$( document ).ready(function() {
animateForever();
insertarDulces();

});

var uniqueRandoms = [];
var numRandoms = 49;
function makeUniqueRandom() {

}
function insertarDulces(){
$(".btn-reinicio").click(function(){
  for (var i = 1; i < 8; i++) {
    for (var j = 1; j < 8; j++) {
      var numero = Math.floor((Math.random() * 7 ) + 1);
      var contenido = "<img src='image/"+numero+".png' />";
      var aleatorio = Math.floor(Math.random() * 7) + 1;
      contenido += "<div class='class-"+aleatorio+"'></div>";
  $("#panel-tablero").append("<div class='col-" + i + "'>" + contenido + "</div>" );

    }

  }
eliminar()

});
};




/*
function eliminar(array, elemento) {
  var resultado = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== elemento) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

array = eliminar(array, 4);



console.log( array );








function deseteate(){

var pos= this.posicion-1; //obtengo el indice del array del objeto que selecciono el cliente.

if(array.length >1)
	{	i=0;
		for(i=pos;i<=array.length-this.posicion;i++)

	{
			array[i]=array[i+1];
			array[i].posicion=[i+1];

		}
	}
}

	//elimina ultima posicion del array array.pop();


    // refill the array if needed


function BorrarVariorsElementosArray(uniqueRandoms, numRandoms){
    for(var i = uniqueRandoms.length - 1; i>=0 ;i--){
        if(uniqueRandoms[i] == numRandoms)
            uniqueRandoms.splice(i,1);
    }
  return uniqueRandoms;
};




function ordenarBloques(){
  $('.contenido').each(function(item){
    item.sortMe("both",{reverse: makeUniqueRandom()})
  })
}


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
*/



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
