import React from 'react';
import Cerber from "../storage/error404.jpg"
import "../Error/Error.css"
const Error = () => {
    return (
        <div className='back' style={{backgroundImage: `url(${Cerber})`}} >
            <h2 className='h2error'>ERROR 404</h2>
            <h2 className='h2error'>PAGE NOT FOUND</h2>
        </div>
    );
};

export default Error;