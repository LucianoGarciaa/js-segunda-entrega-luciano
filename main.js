const Producto = function(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}
let producto1 = new Producto("Energy Gel", 1000,23)
let producto2 = new Producto("Whey Protein", 31200,12)
let producto3 = new Producto("creatina", 36000,20)
let producto4 = new Producto("multivitaminico", 4700,5)

let lista = [producto1,producto2,producto3,producto4]

function filtrarProductos(){
    let palabraClave= prompt("ingresa el producto").toUpperCase()
    let resultado = lista.filter( (producto)=> producto.nombre.toUpperCase().includes(palabraClave)  )


    if(resultado.length>0){
        console.table(resultado)
    }else{
        alert("no se encontro coincidencia")
    }
}
filtrarProductos()