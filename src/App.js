import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar/Navbar.js'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer saludo='Bienvenido' />
    </div>
  );
}

export default App;
