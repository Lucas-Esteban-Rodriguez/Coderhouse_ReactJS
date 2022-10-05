import { Link } from "react-router-dom"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <ul className="d-flex flex-row w-100 justify-content-evenly flex-wrap">
            { products.map(prod => 
                
                <div className="card-producto card mt-5 d-flex flex-column align-items-center">
                    <img src={prod.img}></img>
                    <div className="card-body">
                        <Link className="btn" to={`/detail/${prod.id}`}>{prod.name}</Link>
                    </div>
                </div>

                )}
        </ul>
    )
}

export default ItemList