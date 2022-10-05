import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import { useEffect , useState } from 'react';
import { getProducts, getProductsByCategory } from '../AsyncMock/AsynkMock';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [ products , setProducts ] = useState([])

    useEffect( () => {
        if(!categoryId) {
            getProducts().then( res => {
                setProducts(res)
            })
        } else{
            getProductsByCategory(categoryId).then(res => {
                setProducts(res)
            })
        }
    },[categoryId])
    
    return (
        <ItemList products = {products} />
    )
}

export default ItemListContainer;