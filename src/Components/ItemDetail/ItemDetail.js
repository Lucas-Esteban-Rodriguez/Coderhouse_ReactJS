import { useContext, useState } from 'react'
import { CartContext } from '../../context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, desc, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem , getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        
        setQuantityToAdd(quantity)

        const productToAdd = {id, name, price, quantity, img}

        addItem(productToAdd)
    }

    const productAddedQuantity = getProductQuantity(id)

    return(
        <article className="card-producto card m-auto mt-2 d-flex flex-column align-items-center">
            <header>
                <h5>{name}</h5>
            </header>
            <picture>
                <img src={img}></img>
            </picture>
            <section>
                <p>Descripción: {desc}</p>
                <p>Category: {category}</p>
                <p>Precio: {price}</p>
            </section>
            <footer>
                <ItemCount stock={stock} onAdd={handleOnAdd} initial={productAddedQuantity} />
            </footer>
        </article>
    )

}

export default ItemDetail