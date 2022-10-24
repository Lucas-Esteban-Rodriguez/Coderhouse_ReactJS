import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [ cart , setCart ] = useState([])
    const [ totalQuantity , setTotalQuantity ] = useState(0)
    const [ totalPrice , setTotalPrice ] = useState(0)

    useEffect( () => {
        const totalQuantity = getTotalQuantity()
        setTotalQuantity(totalQuantity)
    },[cart] )

    useEffect(() => {
      const totalPrice = getTotalPrice()
      setTotalPrice(totalPrice)
    },[cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart([...cart, productToAdd])
        } else {
          console.log('ya esta agregado')
        }
      }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const getProductQuantity = (id) => {
      const product =  cart.find(prod => prod.id === id)
      return product?.quantity
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {totalQuantity += prod.quantity})
        return totalQuantity
    }

    const getTotalPrice = () => {
      let totalPrice = 0
      cart.forEach(prod => {
        totalPrice += prod.price * prod.quantity
      })
      return totalPrice
    }

    const removeCart = () =>{
      setCart([])
    }

    return (
        <CartContext.Provider value = {{ cart, addItem, totalQuantity, getTotalQuantity, removeItem, totalPrice, removeCart, getProductQuantity }}>
        {children}
        </CartContext.Provider>
    )

}