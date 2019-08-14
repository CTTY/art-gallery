import React from 'react';
import '../style.css';

function Preloader(){
    return (
        <div id="preloader">
            <div className="wrapper">
                <div className="cssload-loader"></div>
            </div>
        </div>
    )
    
}

export default Preloader;