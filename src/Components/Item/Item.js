import { Link } from "react-router-dom"
import './Item.css'

const Item = ({img,id,name,price}) => {
    return(
        <article className="card-producto card mt-5 d-flex flex-column align-items-center">
            <header>
                <h5>{name}</h5>
            </header>
            <picture>
                <img src={img}></img>
            </picture>
            <section>
            <p className="mt-2">Precio: {price}</p>
            </section>
            <div className="card-body">
                <Link className="btn btn-success" to={`/detail/${id}`}>Ir al detalle</Link>
            </div>
        </article>
    )
}
export default Item