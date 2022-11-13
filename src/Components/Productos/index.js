
import { DataContext } from "../../Context/Dataprovider";
import { ProductoItem } from "./ProductosItems";

import React, { Component, useContext } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
    {
        src: require('../../Images/Slider1.png'),
        altText: '',
        caption: ''
    },
    {
        src: require('../../Images/Slider3.jpg'),
        altText: '',
        caption: ''
    },
    {
        src: require('../../Images/Slider4.jpg'),
        altText: '',
        caption: ''
    },

];

class Carrusel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} width="100%" />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <div className="carruselPromo">
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}



export const ProductosLista = () => {

    const value = useContext(DataContext)
    const [productos] = value.productos //Variable q tiene datos de los productos
    console.log(productos)
    return (
        <>
            <div className="carruselMenu">
                <Carrusel />
            </div>
            <h1 className="titulo">MENÚ</h1>
            <div className="productos">
                {
                    productos.map(producto => (   //Para recorrer la data de productos e ir poniendola en la página
                        <ProductoItem
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            descripcion={producto.descripcion}
                            monto={producto.monto}
                            img={producto.img}
                            categoria={producto.categoria}
                            cantidad={producto.cantidad}
                        />
                    ))
                }
            </div>
        </>
    )
}

