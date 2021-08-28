import React from 'react'

function CartProduct(props) {

    const deleteProducts = () => {
        props.deleteCartProducts({
            id: props.id,
        })
    }

    return (
        <div className="product-card">
        <img src={props.image}/>
        <h5>{props.name}</h5>
        <h5>Rs {props.price}</h5>
        <button onClick={deleteProducts}>Remove from Cart</button>
        </div>
    )
}

export default CartProduct