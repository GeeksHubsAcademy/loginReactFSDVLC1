
import React from 'react';
import Boton from '../../components/Boton/Boton';

import "./Home.css";


const Home = () => {
    return (
        <div className="vistaHome">
            <Boton destino="Login" path="/login"/>
            <Boton destino="Register" path="/register"/>
        </div>
    )
}

export default Home;