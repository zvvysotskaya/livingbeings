import React from 'react';
import './card.styles.css';
import {Link } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
const Card = ({ id, name , path }) => (
    <div className="col-md-3 p-2" >
        <Link to={`/card/${id}`}>
            <div className="bg_white p-2">
                <img src={path} className="img-fluid w-100" alt={name} />
            </div>
        </Link>
        </div>);
export default Card;