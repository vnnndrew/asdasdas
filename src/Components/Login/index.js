import React, {useState }from "react";
import { Title } from "./componentes/Title/Title"
import { Label } from "./componentes/Label/Lable";
import { InputL } from "../Login/componentes/Input/InputL";
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';




export const Login = () => {

    const[ user, setUser ] = useState('');
    const[ password, setPassword ] = useState('');



    function handleChange(name,value){
        if(name === 'user'){
            setUser(value)
        } else {
            setPassword(value)
        }
    };

    console.log('usuario: ',user)
    console.log('password: ',password)

    function handleSubmit(){
        let account= {user,password}
        if(account){
            console.log('account:',account)
        }
    }

    const[estadoModal1,cambiarEstadoModal1] = useState(true)

    return (  
        <Modal classname='Modal'estado={estadoModal1}cambiarEstado={cambiarEstadoModal1}>
            <div className="login">
            <Label text="Usuario" />
            <InputL attribute={{ id: 'user',name: 'user',type: 'text',placeholder: 'Ingrese Usuario'}}handlechange={handleChange}/>
            <Label text="Contraseña" />
            <InputL attribute={{ id: 'contraseña',name: 'contraseña',type: 'password',placeholder: 'Ingrese Contraseña'}}handlechange={handleChange}/>
            <ContenedorBotones>
            <Boton onClick={handleSubmit}>
                Ingresar
            </Boton>
            <Boton onClick={handleSubmit}>
                Registrar
            </Boton>
            </ContenedorBotones>
        </div>
</Modal>
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
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;

	&:hover {
		background: #0066FF;
	}
`;




