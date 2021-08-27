import React, {useState, useEffect} from 'react'
import Product from '../Home/products'
import { auth, db } from '../../firebase-config'

function Cart() {
    const [cart, setCart] = useState([])
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        getUserId()
        getCartProducts()
    }, [])

    const getUserId = () => {
        auth.onAuthStateChanged(user => {
            if(user){
              setUserId(user.uid)
            }
    })
    }
    
    const getCartProducts = () => {
        db.collection(`cart ${userId}`).onSnapshot((querySnapshot) => {
            setCart(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    image: doc.data().image,
                    name: doc.data().name,
                    price: doc.data().price,
                })
            )
            )
        })
    }

    return (
        <div className="cart-container">
            {cart.map((item) => (
                 <Product image={item.image} name={item.name} price={item.price} id={item.id}/>
            ))}  
        </div>
    )


}

export default Cart
