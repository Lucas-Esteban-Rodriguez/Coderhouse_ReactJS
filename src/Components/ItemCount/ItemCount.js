import { useState } from "react"

const ItemCount = ({initial = 1, stock, onAdd}) => {

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
        <div>
            <div className="d-flex mb-2">
                <button className="btn btn-danger" onClick={decrement}>-</button>
                <p className="mx-3 my-auto">{quantity}</p>
                <button className="btn btn-primary" onClick={increment}>+</button>
            </div>
            <button className="btn btn-success" onClick={ () => {onAdd(quantity); setQuantity(1)}}>Agregar</button>
        </div>
    )
}

export default ItemCount