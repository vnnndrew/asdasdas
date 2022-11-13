import React, { createContext, useState, useEffect } from "react";
import Data  from '../Data.js';
import DataPromo from "../DataPromo.js";

export const DataContext = createContext();

//Datos globales
export const Dataprovider = (props) => {
    //Manejadores de estados
    const[productos, setProductos] = useState([])
    const[productosPromo, setProductosPromo] = useState([])
    const[menu, setMenu] = useState(false)
    const[carrito, setCarrito] = useState([])
    const[total, setTotal] = useState(0)

    //Productos Menú
    useEffect(() => {
        const producto = Data.items
        if (producto){
            setProductos(producto)
        } else {
            setProductos([])
        }
    }, [])

    //Productos Promo en pagina inicio
    useEffect(() => {
        const productoP = DataPromo.items
        if (productoP){
            setProductosPromo(productoP)
        } else {
            setProductosPromo([])
        }
    }, [])

    //Añadir al carrito
    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id; //Cada vez q la id sea diferente manda un false
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id === id
            })
            setCarrito([...carrito, ...data])
        } else {
            alert("El producto se ha añadido al carro")
        }
    }

    useEffect(() =>{
        const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
        if(dataCarrito){
            setCarrito(dataCarrito)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCarrito', JSON.stringify(carrito))
    }, [carrito])

    useEffect(() => {
        const getTotal = () => {
            const res = carrito.reduce((prev, item) => {
                return prev + (item.precio * item.cantidad); //Multiplica el precio por la cantidad para el total
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carrito])


    const value = {
        productos:[productos],
        productosPromo:[productosPromo],
        menu:[menu,setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito],
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}