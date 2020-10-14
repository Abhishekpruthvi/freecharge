import React from 'react';
import './Card.css';
import {useParams} from 'react-router-dom'
export default function PaymentGateWay() {

    const {price} = useParams();

    return (
        console.log("pricxe",price),
        <div className="payment_gateway">
            <h1> Welcome to Payment Gateway</h1>
            <h4> Payment of {price} needs to be done</h4>
            <h5> Please enter the card details</h5>

            <form className="creditcard">
                <label>Enter the name of the card holder :  </label>
                <input type="text" /> <br/> <br/>
                <label>Enter the card number :  </label>
                <input type="text" /> <br/> <br/>
                <label>Enter cvv :  </label>
                <input type="text" /> <br/> <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}