
import React from 'react';
import {useHistory} from 'react-router-dom';

import './Boton.css';

const Boton = (props) => {

    let history = useHistory();

    const llevame = () => {

        history.push(props.path);

    }


    return (
        <div className="boton" onClick={()=>llevame()}>
            {props.destino}
        </div>
    )
}

export default Boton;