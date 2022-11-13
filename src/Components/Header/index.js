import React, { useState, useContext } from "react";
import logo_fuko from "../../Images/logo_fuko.png";
import { Link } from 'react-router-dom'; //para conectar las paginas
import { DataContext } from "../../Context/Dataprovider";


import { Label } from "../Login/componentes/Label/Lable";
import { InputL } from "../Login/componentes/Input/InputL";
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';

import { FormGroup, Form, Input } from "reactstrap";

export const Header = () => {
    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu;
    const [carrito] = value.carrito;

    const toogleMenu = () => {
        setMenu(!menu)
    }


    /*___________Login_____________________________*/
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    function handleChange(name, value) {
        if (name === 'user') {
            setUser(value)
        } else {
            setPassword(value)
        }
    };

    console.log('usuario: ', user)
    console.log('password: ', password)

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            console.log('account:', account)
        }
    }

    const [estadoModal1, cambiarEstadoModal1] = useState(false)
    const toogleLogin = () => {
        cambiarEstadoModal1(!estadoModal1)
    }

    /*___________Register_____________________________*/
    const [estadoModal2, cambiarEstadoModal2] = useState(false)
    const toogleRegister = () => {
        cambiarEstadoModal2(!estadoModal2)
    }

    return (
        <header >
            <Link to="/">
                <div className="logo">
                    <img src={logo_fuko} alt="logo" width="150" />
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/" className="colorhover" onClick="scroll(100, 0)">INICIO</Link>
                </li>
                <li>
                    <Link to="/menu" className="colorhover" onClick="scroll(100, 0)">MENÚ</Link>
                </li>
                <li>
                    <Link to="/locales" className="colorhover" onClick="scroll(100, 0)">LOCALES</Link>
                </li>
                <li>
                    <Link to="/preguntas" className="colorhover" onClick="scroll(100, 0)">PREGUNTAS FRECUENTES</Link>
                </li>
                <li>
                    <button onClick={toogleLogin} >INGRESAR</button>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu} >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"  color = "white"fill="currentColor" class="bi bi-basket2" viewBox="0 0 16 16">
                    <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
                </svg>
                <span className="item__total">{carrito.length}</span>

            </div>


            {/*________login______________*/}
            <Modal id="ModalLogin" estado={estadoModal1} cambiarEstado={cambiarEstadoModal1}>
                <div id="CajaLogin">
                    <h3 id="tit-reg"> Login</h3>
                    <Label text="Email" />
                    <InputL attribute={{ id: 'user', name: 'user', type: 'text', placeholder: 'Ingrese Email' }} handlechange={handleChange} />
                    <Label text="Contraseña" />
                    <InputL attribute={{ id: 'contraseña', name: 'contraseña', type: 'password', placeholder: 'Ingrese Contraseña' }} handlechange={handleChange} />
                    <ContenedorBotones>
                        <Link to="/menu" id="link-css" onClick={handleSubmit}><Boton className="btn btn-outline-info" onClick={toogleLogin} id="bt-reg">
                            INGRESAR
                        </Boton></Link>
                        <Link onClick={toogleLogin} id="link-css"><Boton className="btn btn-outline-info" onClick={toogleRegister}>
                            REGISTRAR
                        </Boton></Link>
                    </ContenedorBotones>
                </div>
            </Modal>

            {/*________Register______________*/}
            <Modal id='ModalRegister' estado={estadoModal2} cambiarEstado={cambiarEstadoModal2}>
                <Form >
                    <div id="Caja">
                        <h3 id="tit-reg"> Registrar</h3>
                        <FormGroup>
                            <label className="form-control-label" htmlFor="example-text-input">
                                Nombre
                            </label>
                            <Input id="example-text-input" type="text">
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-search-input">
                                Rut
                            </label>
                            <Input
                                id="example-search-input" type="text">
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-url-input">
                                Email
                            </label>
                            <Input
                                id="example-url-input" type="email">
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-password-input">
                                Password
                            </label>
                            <Input
                                id="example-password-input" type="password"
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <label className=" form-control-label" htmlFor="example-number-input">
                                Direccion
                            </label>
                            <Input id="example-number-input" type="text"
                            ></Input>
                        </FormGroup>
                        <Link to="/menu" id="link-css" ><Boton className="btn btn-outline-info" onClick={toogleRegister} id="bt-reg">
                            REGISTRAR
                        </Boton></Link>
                    </div>
                </Form>
            </Modal>

        </header>

    )
};

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	border: none;
	cursor: pointer;
	transition: .3s ease all;
    background-color: rgb(100, 11, 11);
    font-family: 'Berlin Sans FB Demi', sans-serif;
    color: white;
    text-decoration: none;
	&:hover {
		background: #0066FF;
        text-decoration: none;
	}
`;