import React from 'react';

const Cart = (props) => {
    const { cart, clearCart } = props;
    let total = 0;
    let quantity = 0;
    let shipping = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping;
    };
    const tax = parseFloat((total * 0.1).toFixed(2))
    const grandTotal = total + shipping + tax;


    return (
        <div>
            <h6>Order summary</h6>
            <p>Selected items:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart} className='btn btn-sm btn-outline-success texr-white border-white'>Clear cart</button>
            <br />
            <button className=' mt-2 btn btn-sm btn-outline-success texr-white border-white'><a className='text-white text-decoration-none' href=
                "/order-review">Review order</a></button>


        </div>
    );
};

export default Cart;