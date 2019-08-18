import React from 'react';
import '../style.css';

function Breadcrumb(){
    return (
        <div className="breadcumb-area">
            <div className="container h-100">
                <div className="row h-100 align-items-end">
                    <div className="col-12">
                        <div className="breadcumb--con">
                            <h2 className="title">Project</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Project</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Breadcrumb;