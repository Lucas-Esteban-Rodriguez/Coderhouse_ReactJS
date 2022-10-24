import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const CartItem = ({ id , name , img , quantity , price }) => {

    const { removeItem } = useContext(CartContext)
    const handleRemove = (id) => {
        removeItem(id)
    }

    return(
        <div className="d-flex flex-row justify-content-around align-items-center w-100">
            <img src={img}></img>
            <p>{name}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio: {price}</p>
            <p>Subtotal: {quantity*price}</p>
            <button className="btn btn-danger" onClick={() => handleRemove(id)} >X</button>
        </div>
    )
}

export default CartItem