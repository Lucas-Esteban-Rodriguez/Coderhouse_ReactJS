import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar/Navbar.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js'
import Cart from './Components/Cart/Cart.js'
import Checkout from './Components/Checkout/Checkout'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import {CartContextProvider} from './context/cartContext.js'

function App() {
  return (
    
    
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element='ERROR 404' />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
