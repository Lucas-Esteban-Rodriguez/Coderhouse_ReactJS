import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar/Navbar.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.js'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

function App() {
  return (
    
    
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
