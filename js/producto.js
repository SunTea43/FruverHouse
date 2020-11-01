$(document).ready(function(){
    if (getCookie("idCategoria")===""){
        obtenerProducto()
    }
    else{
        var obj={id:getCookie("idCategoria")};
        obtenerIdProducto(obj);
    }
});

$("#btnAgregar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
    var nombre=$("#nombre").val();
    var unidad=$("#unidad").val();
    var precio=$("#precio").val();
    var imagen=$("#imagen").val();
    var obj={
        idCategoria: idCategoria,
        nombre: nombre,
        unidad: unidad,
        precio: precio,
        imagen: imagen
    }  
    crearCategoria(obj)
}
);

$("#btnActualizar").click(function(e){
    e.preventDefault();
    var idCategoria=$("#idCategoria").val();
    var idProducto=$("#idProducto").val();
    var nombre=$("#nombre").val();
    var unidad=$("#unidad").val();
    var precio=$("#precio").val();
    var imagen=$("#imagen").val();
    var obj={
        idCategoria: idCategoria,
        idProducto: idProducto,
        nombre: nombre,
        unidad: unidad,
        precio: precio,
        imagen: imagen
    };
    actualizarProducto(obj)
}
);

$("#btnEliminar").click(function(e){
    e.preventDefault();
    var idProducto=$("#idProducto").val();
    var nombre=$("#nombre").val();
    var imagen=$("#imagen").val();
    var obj={
            idProducto: idProducto
    };
    eliminarProducto(obj)
}
);