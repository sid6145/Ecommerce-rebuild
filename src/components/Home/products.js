import React from 'react'

function Product(props) {

    const handleAddToCart = () => {
        props.addtoCart({
            id: props.id,
            image: props.image,
            name: props.name,
            price: props.price
        })
    }

    return (
        <div className="product-card">
        <img src={props.image}/>
        <h5>{props.name}</h5>
        <h5>Rs {props.price}</h5>
        <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default Product