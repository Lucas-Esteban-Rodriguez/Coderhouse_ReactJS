import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFirestore , getDoc , doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    const {productId} = useParams()
    const [ product , setProduct ] = useState()
    const [ data , setData ] = useState()

    useEffect( () => {

        const db = getFirestore()
        const docRef = doc(db, 'Items' , productId )
        getDoc(docRef).then( doc => {
            
            const data = doc.data()
            setData(data)
            const productAdapted = {id: doc.id, ...data}
            setProduct(productAdapted)
            }
        )
    },[productId])

    return (
        <div>
            {data ? <ItemDetail {...product} />:<h1>El producto no existe</h1>}
        </div>
    )
}

export default ItemDetailContainer