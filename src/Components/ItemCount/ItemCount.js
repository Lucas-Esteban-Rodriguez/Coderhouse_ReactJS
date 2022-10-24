import { useState } from "react"
import { Link } from "react-router-dom"

const ItemCount = ({initial = 0, stock, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="d-flex flex-column justify-content-center">
            <div className="d-flex mb-2">
                <button className="btn btn-danger" onClick={decrement}>-</button>
                <p className="mx-3 my-auto">{quantity}</p>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <button className="btn btn-success" onClick={ () => {onAdd(quantity); setQuantity(initial)}}>Agregar</button>
            <Link className="btn btn-primary my-2" to={'/cart'}>Ir al carrito</Link>
        </div>
    )
}

export default ItemCount