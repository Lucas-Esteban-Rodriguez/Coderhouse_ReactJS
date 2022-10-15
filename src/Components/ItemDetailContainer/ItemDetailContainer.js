import { useEffect , useState } from "react"
import { getProduct } from "../AsyncMock/AsynkMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    
    const {productId} = useParams()
    const [ product , setProduct ] = useState()

    useEffect( () => {
        getProduct(productId).then( res => {
            setProduct(res)
        })
    },[productId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer