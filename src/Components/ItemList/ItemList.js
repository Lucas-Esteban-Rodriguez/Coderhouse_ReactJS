import Item from "../Item/Item"
import { memo } from 'react'

const ItemList = ({products}) => {
    return (
        <ul className="d-flex flex-row w-100 justify-content-evenly flex-wrap">
            { products.map(prod => 
                <Item key={prod.id} {...prod} />
                )
            }
        </ul>
    )
}

export default memo(ItemList)