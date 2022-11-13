import React, { useContext } from "react";
import { DataContext } from "../../Context/Dataprovider"


export const Carrito = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;


    const tooglefalse = () => { //Funcion q vuelve falso el menu
        setMenu(false)
    }

    // para abrir y cerrar el carrito
    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    //Eliminar Producto del Carro
    const borrarProducto = id => {

        carrito.forEach((item, index) => {
            if (item.id === id) {
                item.cantidad = 1;
                carrito.splice(index, 1) //Elimina el producto
            }

        })
        setCarrito([...carrito])
    }

    //Restar productos en el carrito de compras
    const restarProducto = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
            }
            setCarrito([...carrito])
        })
    }

    //Sumar productos en el carrito de compras
    const sumarProducto = id => {
        carrito.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1;
            }
            setCarrito([...carrito])
        })
    }

    return (
        <div className={show1}>
            <div className={show2}>
                <div className="carrito_close" onClick={tooglefalse}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>
                <h2>Tú Carrito</h2>
                <div className="carrito_center">
                    {

                        carrito.length === 0 ? <h2 style={{
                            textAlign: "center", fontSize: "3rem"
                        }}> Carrito Vacío</h2> : <>
                            {
                                carrito.map((producto) =>

                                    <div className="carrito_item" key={producto.id}>
                                        <img src={producto.img} alt="" />
                                        <div>
                                            <h3>{producto.nombre}</h3>
                                            <p className="precio">${producto.precio}</p>
                                        </div>
                                        <div id="agregarProd">
                                            <svg xmlns="http://www.w3.org/2000/svg" color="red" width="24" height="24" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16" onClick={() => sumarProducto(producto.id)}>
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                            </svg>
                                            <p className="cantidad">{producto.cantidad}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" color="red" width="24" height="24" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" onClick={() => restarProducto(producto.id)} />
                                            </svg>
                                        </div>
                                        <div className="borrarProducto" onClick={() => borrarProducto(producto.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" color="red" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    }
                </div>

                <div className="carrito_total">
                    <h3>Total a pagar: ${total}</h3>
                    <button className="btn">Pagar</button>

                </div>
            </div>

        </div>
    )
}