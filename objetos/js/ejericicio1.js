/** 
 *1.- Gestión de biblioteca.
La web presentará una interfaz gráfica como la reflejada en la imagen.
La aplicación se basará en crear un objeto, con función constructora, llamado Libro y deberá constar de las propiedades adecuadas a la interfaz.
Para añadir libros a la biblioteca se hará uso de una instancia, llamada “Ejemplar”, del objeto Libro.
Los libros se irán añadiendo a un array llamado biblioteca.
El botón “Buscar” deberá permitir averiguar si se encuentra el libro solicitado. Para ello se utilizará el título del libro. Si el título se encontrara en la biblioteca se deberán visualizar todos los datos relativos a ese libro en la interfaz creada.
(sugerencia: implementarlo en dos versiones: arrays y map)
*/

var libros = new Array();

const Libro = {
    titulo: "",
    autor: "",
    descripcion: "",
    getAutor: function() {
        return this.autor;
    },
    getTitulo: function() {
        return this.titulo;
    },
    getDescripcion: function () {
        return this.descripcion;
    }
};



let addNewLibro = () =>{
  
    let atributos = document.getElementsByName("info-libro");
    console.log(atributos);
    
    if(atributos[0].value == "" || atributos[1].value == "" || atributos[2].value  == ""){
        alert("Rellena correctamente el formulario");
    }else{

        const current_libro = Object.create(Libro);
        current_libro.titulo = atributos[0].value;
        current_libro.autor = atributos[1].value;
        current_libro.descripcion = atributos[2].value;

        libros.push(current_libro);
    }


}

let listLibros = () =>{
    let container_tabla = document.getElementById("tabla");
    let autor_buscado = document.getElementById("autor_buscado").value;

    if(autor_buscado == ""){
        alert("Introduce un autor para buscar");
    }else{
        container_tabla.innerHTML = "";
        container_tabla.innerHTML += '<tr><th class="bg-dark text-light">Titulo</th><th class="bg-dark text-light">Autor</th><th class="bg-dark text-light">Descripcion</th></tr>';
        
        for (const libro of libros) {
            current_autor = libro.getAutor();
            console.log(libro.getAutor());

            (current_autor == autor_buscado) ? container_tabla.innerHTML += `<tr><td>${libro.getTitulo()}</td><td>${libro.getAutor()}</td><td>${libro.getDescripcion()}</td></tr>`:"no hace nada";
        }
    }

}



let cargarVariables = () =>{

    let boton_add = document.getElementById("btnAdd");
    let boton_search = document.getElementById("btnSearch");

    boton_add.addEventListener('click', addNewLibro);
    boton_search.addEventListener('click', listLibros);
}
