
import React , {useState} from 'react';
import Boton from '../../components/Boton/Boton';
import axios from 'axios';

import "./Login.css";


const Login = () => {

    
    //Hooks
    const [credentials, setCredentials] = useState({email:'',password:''});

    //Handlers
    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const logeame = async () => {


        //Primero, testeamos los datos

        //A continuación, generamos el body de datos
        let body = {
            email : credentials.email,
            password : credentials.password
        }

        //Axios..envio

        let res = await axios.post('endpointDelBackend', body);

        //res viene de vuelta con el token y los datos

        

    }


    return (
        
        <div className="vistaLogin">
            <pre>{JSON.stringify(credentials, null,2)}</pre>
            <div className="loginCard">
                <input  type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <input  type='password'  name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <div className="sendButton" onClick={()=>logeame()}>Login</div>
            </div>

            <div className="nav">
                <Boton destino="Home" path="/"/>
                <Boton destino="Register" path="/register"/>
            </div>
            
        </div>
    )
}

export default Login;