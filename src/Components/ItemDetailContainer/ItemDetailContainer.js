import { useEffect , useState } from "react"
import { getProduct } from "../AsyncMock/AsynkMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    
    const {productId} = useParams()
    const [ product , setProduct ] = useState([])

    useEffect( () => {
        getProduct(productId).then( res => {
            setProduct(res)
        })
    },[productId])

    return (
        <div>
            <h1>Detalle del producto</h1>
            <p>{product?.name}</p>
            <p>{product?.desc}</p>
        </div>
    )
}

export default ItemDetailContainer