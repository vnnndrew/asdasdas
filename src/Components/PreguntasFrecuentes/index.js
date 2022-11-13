import React from 'react';
import Accordion from 'react-bootstrap/Accordion';


export function Acordeon() {
    return (
        <div className='Main'>
            <Accordion className='Acordeon'>
                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><h2>¿Hay un minimo para pedir en el local?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            No contamos con pedido minimo en nuestro local.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>¿Tiene costo de envio?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            Si, el costo de envio depende del lugar en que adquieras nuestro servicio.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h2>¿Cuanto demora el retiro en local?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            El retiro puede demorar entre 30 a 50 minutos dependiendo de la demanda.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h2>¿Se le da propina al repartidor?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            La propina es voluntaria, ya que el cargo por envio es en parte para el repartidor.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header><h2>¿Puedo cambiar los ingredientes de los rolls?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            Si, puedes cambiar los ingredientes que quieras. Debes solicitarlo al momento de
                            hacer tu pedido. Algunos cambios están sujetos a costos asociados, pregunta al momento de solicitar tu cambio.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header><h2>¿Puedo pagar con Junaeb Sodexo?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            Si!, nuestro local admite pago Junaeb en todos los productos del menú.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

                <div className='cajaAcordeon'>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header><h2>¿Cuál es el horario de atención en el local?</h2></Accordion.Header>
                        <Accordion.Body className='Descripcion'>
                            El local está disponible los 7 diás de la semana!<br></br>
                            De lunes a viernes de 10 am hasta las 21pm y los fin de semana y festivos de 10am hasta las 4pm.
                        </Accordion.Body>
                    </Accordion.Item>
                </div>

            </Accordion>
        </div>
    );
}



export const Preguntas = () => {
    return (
        <div>
            <Acordeon />
        </div>
    )
} 