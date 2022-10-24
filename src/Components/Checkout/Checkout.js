import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/cartContext"
import { getFirestore , collection , query , where , getDocs , documentId , writeBatch , addDoc } from 'firebase/firestore'
import CartItem from "../CartItem/CartItem"

const Checkout = () => {

    const { cart , totalPrice , removeCart } = useContext(CartContext)

    const [ idOrder , setIdOrder ] = useState()

    const [ name , setName ] = useState()
    const [ surname , setSurname ] = useState()
    const [ phone , setPhone ] = useState()
    const [ email , setEmail ] = useState()
    const [ confirmedEmail , setConfirmedEmail ] = useState()

    const [ formComplete , setFormComplete ] = useState(false)



    const createOrder = async () => {

        try {
            
            const order = {
                buyer : {name: name + ' ' + surname, phone: phone, email: email},
                items: cart,
                total: totalPrice,
                state: 'complete',
                fecha: new Date
            }

            const db = getFirestore()
            const ids = cart.map(prod => prod.id)
            const itemsRef = collection(db,'Items')
            const itemsFirestoreInCart = await getDocs(query(itemsRef, where(documentId(), 'in' , ids )))
            const docs = itemsFirestoreInCart
            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const docData = doc.data()
                const docStock = docData.stock

                const itemInCart = cart.find(item => item.id === doc.id )
                const itemQuantity = itemInCart?.quantity

                if (docStock >= itemQuantity ) {
                    batch.update(doc.ref , {stock: docStock - itemQuantity })
                } else {
                    outOfStock.push({id: doc.id, ...docData})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const collectionRef = collection(db,'Orders')
                addDoc(collectionRef, order).then( ({id}) => setIdOrder(id) )
                removeCart()
            } else {
                console.log('hay productos fuera de stock')
            }

        } catch (error) {
            console.log(error)
        }

    }

    if (name, surname, phone, email && email === confirmedEmail) {
        console.log('Listo para finalizar compra')
    } else {
        console.log('Faltan datos')
    }

    return(
        <div className="d-flex flex-row">
            <div className="px-5 bg-light col-8">
                <form className="row justify-content-center px-5">
                    <div className="col-6">
                        <label className="form-label">Nombre:
                            <input autoComplete="false" type='text' className="form-control" id="name" onChange={(e)=> setName(e.target.value)} value={name}></input>
                        </label>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Apellido:
                            <input autoComplete="false" type='text' className="form-control" id="surname" onChange={(e) => setSurname(e.target.value)} value={surname}></input>
                        </label>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Cel:
                            <input autoComplete="false" type='tel' className="form-control" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
                        </label>
                    </div>
                    <div className="col-12">
                        <label className="form-label">Email:
                            <input autoComplete="false" type='email' className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                        </label>
                    <div className="col-12">
                        <label className="form-label">Confirmar Email:
                            <input autoComplete="false" type='email' className="form-control" id="confirmedEmail" onChange={(e) => setConfirmedEmail(e.target.value)} value={confirmedEmail}></input>
                        </label>
                    </div>
                    </div>
                    {formComplete ? <button type="button" className='btn btn-primary col-auto my-3' onClick={()=> createOrder()}>Enviar</button> : <p>Completá los datos para poder finalizar la compra</p>}
                </form>
                <p>{idOrder}</p>
            </div>
            <div className="col-4">
                {cart.map(prod =>
                    <div className="d-flex flex-row">
                        <p>Nombre: {prod.name}</p>
                        <p>Precio: {prod.price}</p>
                        <p>Cantidad: {prod.quantity}</p>
                        <p>Subtotal: {prod.quantity*prod.price}</p>
                    </div>
                    )}
                    <p className="fw-bold">Total: {totalPrice}</p>
            </div>
        </div>
    )

}
export default Checkout