import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({id,name,img,price,desc,category,stock}) => {

    const { addItem } = useContext(CartContext)

    const [quantityToAdd , setQuantityToAdd] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)
        const productToAdd = {id, name, price, img, quantity}
        addItem(productToAdd)
    }

    return(
        <article className="card-producto card m-auto mt-5 d-flex flex-column align-items-center">
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
                <ItemCount stock={stock} onAdd={handleOnAdd} />
            </footer>
        </article>
    )

}

export default ItemDetail