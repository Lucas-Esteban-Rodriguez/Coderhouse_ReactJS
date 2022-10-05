import { Link } from "react-router-dom"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <ul className="d-flex flex-column w-100">
            { products.map(prod => 
                
                <div className="card_productos">
                    <img className="img-fluid" src={prod.img}></img>
                    <Link to={'/detail/:productId'}>{prod.name}</Link>
                </div>

                )}
        </ul>
    )
}

export default ItemList