
//function listarTareas(){
  //var listado=document.getElementById("listarT")
//hago un arreglo con for para imprimir las 10 primeras tareas
//document.write('<div> <h1> Las tareas son: </h1></div>');
//for (var i = 0; i <res[11]; i++) {
 // listado.innerHTML += "<li>" + res[i].title + "</li>";
  //  document.write("<div><li>" + res[i].title + "</div></li>");


var tareas = [];
var pendientes = document.getElementById("pendientes");

// Constructor para generar un nuevo producto
function Nueva(title) {
  this.title = title.toLowerCase();

};

//Método para imprimir un producto en html
Nueva.prototype.toHTML = function () {
  var html = '';
  html += this.title.toUpperCase() + '<br>';
  html += '<br><br>';
  return html;
}

//Función que une todas las compras guardadas en el array productos
function mergeHTML (){
  var html = '';
  for (i=0; i<res.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addNueva = document.getElementById('nuevaTarea');
addNueva.onclick = function() {

  var tarea = new Nueva (title);
  tareas.push(tareas);
  printHTML(tareas.toHTML());
};
