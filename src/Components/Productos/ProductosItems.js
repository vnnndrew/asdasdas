import React, { useContext} from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../../Context/Dataprovider"

export const ProductoItem = ({
    id,
    nombre,
    precio,
    img,
    categoria,
    descripcion,
}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;

    return (
        <div>
            <div className="producto">
                <Link to={`/producto/${id}`}> {/*Para ir a la descripcion cuando pincho una imagen*/}
                    <div className="producto_img">
                        <img src={img} alt={nombre}></img>
                    </div>
                </Link>
                <div className="productoDescripcion">
                    <h1> {nombre}</h1>
                    <p> {categoria} </p>
                    <p className="precio">${precio}</p>
                    <p class="descripcion">{descripcion}</p>
                </div>
                <div className="botonAgregar">
                    <button className="btn" onClick={() => addCarrito(id)}> Añadir al Carrito</button>
                </div>
            </div>
        </div>
    )
}

// Diseño pagina Inicio Promociones
export const ProductoItemPromo = ({
    nombre,
    precio,
    img1,
    categoria,
}) => {

    return (
        <div className="container-fluid">
            <div className="productoPromo">
                <div >
                    <div className="producto_img">
                        <img src={img1} alt={nombre}></img>
                    </div>
                </div>
                <div className="productoDescripcionPromo">
                    <h1> {nombre}</h1>
                    <p> {categoria} </p>
                    <p className="precioPromo"><p style={{color:"gray", fontSize:"1.4rem", 
                }}>Precio Real ${precio+1000} </p><br></br>Oferta ${precio-2000}</p>
                </div>
                <div className="botonPromo">
                    <Link to="/menu">
                        <button className="btnPromo">Ver Promo</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}