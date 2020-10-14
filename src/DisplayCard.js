import React from 'react';
import './Card.css';
import PaymentGateWay from './PaymentGateWay';
import { Link } from "react-router-dom";
export default function DisplayCard({
    url,
    name,
    price
}) {

    return (
    <div className="display_card">
        <Link to={`/payment/${price}`}>
            <img src={url}
            height="100px"
            width="230px"
            id={name}
            ></img>
            <div className="container">
                <h4>Name :  {name}</h4>
                <h4>Price :  {price} </h4>
            </div>
            </Link>
        </div>
    
    );
}