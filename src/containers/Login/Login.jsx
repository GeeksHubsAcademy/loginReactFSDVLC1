
import React , {useState} from 'react';
import Boton from '../../components/Boton/Boton';
import axios from 'axios';

import "./Login.css";


const Login = () => {

    
    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});
    const [msgError, setMensajeError] = useState('');

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const logeame = async () => {


        //Primero, testeamos los datos

        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email) ) {
            
            setMensajeError('Introduce un e-mail válido');
            return;
        };

        if(credentials.password.length < 4){
            setMensajeError('Introduce un password de por lo menos 4 caracteres');
            return;
        }

        //A continuación, generamos el body de datos
        let body = {
            email : credentials.email,
            password : credentials.password
        }

        console.log("HEMOS CRUZADO LA FRONTERA",body);

        //Axios..envio

        // let res = await axios.post('endpointDelBackend', body);

        //res viene de vuelta con el token y los datos

        

    }


    return (
        
        <div className="vistaLogin">
            <pre>{JSON.stringify(credentials, null,2)}</pre>
            <div className="loginCard">
                <input  type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <input  type='password'  name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <div className="sendButton" onClick={()=>logeame()}>Login</div>
                <div>{msgError}</div>
            </div>

            <div className="nav">
                <Boton destino="Home" path="/"/>
                <Boton destino="Register" path="/register"/>
            </div>
            
        </div>
    )
}

export default Login;