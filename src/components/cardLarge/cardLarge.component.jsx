import React from 'react';
import './cardLarge.styles.css';
import Container from '../container/container.component';

const CardLarge = ({ id, name, path }) => (
    <Container>
        <div className='col-md-8 offset-md-2 my-4'>
            <h2>{name}</h2>
            <div className="largeCard p-3">                
                <img src={path} alt={name} className="img-fluid w-100" />
            </div>
        </div>
    </Container>

);
export default CardLarge;