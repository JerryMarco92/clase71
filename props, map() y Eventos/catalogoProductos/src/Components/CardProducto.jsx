import "./CardProducto.css";


export function CardProducto() {
    return (
         <div className="container">
            {productos.map(({id, nombre, precio}) =>{
                return(
                <div key={id} className="card">
                    <p>{nombre} - {precio}€</p>
                    <button onClick={() =>{console.log(nombre)}}>Ver producto</button>
                </div>
                );
            }) }
        </div>
    );
}


const productos = [{
    id: 1, nombre: "producto1", precio: 40
}, {
    id: 2, nombre: "producto2", precio: 100
}, {
    id: 3, nombre: "producto3", precio: 70
}, {
    id: 4, nombre: "producto4", precio: 130
}, {
    id: 5, nombre: "producto5", precio: 300
}];
