import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

    const { totalQuantity , cart , totalPrice , removeCart } = useContext(CartContext)

    if (totalQuantity === 0) {
        return(
            <h1>No hay productos en el carrito</h1>
        )
    }

    return(
        <div>
            <h1>Carrito</h1>
            {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            <h5>Total: {totalPrice} </h5>
            <button className="btn btn-danger" onClick={() => removeCart()}>Vaciar carrito</button>
            <Link className="btn btn-success" to={'/checkout'}> Finalizar compra </Link>
        </div>
    )
}

export default Cart