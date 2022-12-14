
import { DataContext } from "../../Context/Dataprovider";
import { ProductoItemPromo } from "../Productos/ProductosItems";
/*----------------------------------PARA EL CARRUSEL---------------------------------------*/
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
    src: require('../../Images/SliderMenu.png'),
    altText: '',
    caption: ''
  },
  {
    src: require('../../Images/Slider2.jpg'),
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
      <div className="Carrusel">
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


/*-----------------------------------------------------------------------------------------*/

export const ProductosPromociones = () => {

  const value = useContext(DataContext)
  const [productosPromo] = value.productosPromo //Variable q tiene datos de los productos
  console.log(productosPromo)
  return (
    <>
      <h1 className="tituloPromo">Promociones</h1>
      <div className="productosPromo">
        {
          productosPromo.map(producto => (   //Para recorrer la data de productos e ir poniendola en la p??gina
            <ProductoItemPromo
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              monto={producto.monto}
              img={producto.img}
              img1={producto.img1}
              categoria={producto.categoria}
              cantidad={producto.cantidad}
            />
          ))
        }

      </div>
    </>
  )
}




/***************************************************/

export const Inicio = () => {
  return (
    <div id="inicioPag">
      <div className="Inicio">
        <Carrusel className="Carrusel" />
        <ProductosPromociones />
      </div>
    </div>
  )

}