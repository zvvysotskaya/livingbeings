import React from 'react';
import './cardLarge.styles.css';
import { Link } from 'react-router-dom';

const CardLarge = ({ id, name, path }) => (    
        <div className='col-md-8 offset-md-2 my-4 col-sm-12 px-sm-0' >
        <h2 className="my-3 mx-0">{name}</h2>
        <Link to='/'>
            <div className="largeCard p-3">                
                <img src={path} alt={name} className="img-fluid w-100" />
            </div>
            </Link>
        </div>
);
export default CardLarge;