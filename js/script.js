class Articulo {
    constructor(rubro, palabraClave, clase, producto, precio) {
        this.rubro = rubro;
        this.palabraClave = palabraClave;
        this.clase = clase;
        this.producto = producto;
        this.precio = precio;
    }
}




const Articulos = [
    new Articulo('fumigacion', 'hormigas', 'hormiguicida', 'glacoXAN E', '$250'),
    new Articulo('fumigacion', 'insectos', 'insecticida', 'CapXAN I', '$400'),
    new Articulo('siembra', 'cesped', 'puras', 'Bermuda', '$2000'),
    new Articulo('siembra', 'cesped', 'mezcla', 'Patagonia', '$1500'),

]

let ordenamiento = prompt('Elija la opcion de visualización: \n1 Rubro \n2 Precio');

function ordenar(ordenamiento, array) {
    let arrayordenado = array.slice(0);

    switch (ordenamiento) {
        case '1':
            let rubroordenado = arrayordenado.sort((a, b) => a.rubro.localecompare(b.rubro));
            return rubroordenado;
        case '2':
            return arrayordenado.sort((a, b) => a.precio - b.precio);
        default:
            Alert('opcion incorrecta')
            break;
    }
}
function respuesta(array) {
    let info = '';

    array.foreach(elemento => {
        info += 'rubro: ' + elemento.rubro + '\nclase: ' + elemento.clase + '\nProducto: ' + elemento.producto + '\nPrecio: ' + elemento.precio
    })
}
alert(respuesta ( ordenar (ordenamiento, Articulos)))
