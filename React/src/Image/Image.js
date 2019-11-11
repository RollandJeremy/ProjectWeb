import React from 'react';
import '../Image/Image.css';

const image = (props) => {
    return (    
        <div className="Person">
            <h3>
                 {props.nom}              
            </h3>  
            <p> He has killed {props.nombre} people </p> 
            <div>
         <a target="_blank" href={props.wiki}>               
                <img  src={props.image} height="300" width="200" alt="new"/>
        </a> 

        <p>
            Description : {props.desc}

        </p>

</div>
            
        </div>
    )
}

export default image;