import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection , getDocs, getFirestore , query , where} from 'firebase/firestore'


const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [ products , setProducts ] = useState([])

    useEffect( () => {

        const db = getFirestore()
        const itemsCollection = categoryId ? query(collection(db,'Items'), where('category', '==', categoryId )) : collection(db,'Items')
        getDocs(itemsCollection).then((res) => {setProducts(res.docs.map((doc) => ({ id: doc.id , ...doc.data() }) ))} )


    },[categoryId])
    
    return (
        <ItemList products = {products} />
    )
}

export default ItemListContainer;