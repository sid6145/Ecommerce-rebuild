import React, {useState, useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
import { auth, db } from '../../firebase-config'
import CartProduct from './cartProduct';

function Cart() {
    const [cart, setCart] = useState([])
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        getUserId()
        getCartProducts()
    }, [cart])

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

    const deleteCartProducts = (product) => {
        db.collection(`cart ${userId}`).doc(product.id).delete()
        console.log(product.id)
    }

    return (
        <div className="cart-container">
        <Row>
            
           {cart.map((item) => (
               <Col md={3} sm={6}>
                  <CartProduct image={item.image} name={item.name} price={item.price} id={item.id} deleteCartProducts={deleteCartProducts}/>
                </Col>
           ))}
           

        </Row>
        </div>
    )


}

export default Cart
