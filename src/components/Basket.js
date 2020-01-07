import React, { Component } from 'react'
import util from '../util';
export default class Basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className="alert alert-info">
                {cartItems.length==0 ? 'Basket is Empty' : <div> You have {cartItems.length} products in basket </div>}
                {cartItems.length>= 0  && 
                    <div>
                        <ul>
                            {cartItems.map(item => 
                                <li>
                                    <b>
                                        {item.title}
                                    </b> X {item.count} = {item.count} * {item.price}
                                    <button className="btn btn-danger"
                                    onClick={(e) => this.props.handleRemoveFromCart(e,item)}
                                    >X</button>
                                </li>
                                )}
                        </ul>
                        Total Price = {util.formatCurrency(cartItems.reduce((a,c) => a+ c.price*c.count , 0))}
                    </div>
                }
            </div>
        )
    }
}
