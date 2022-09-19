import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around align-items-center'>
        <p>CoffeeStore</p>
        <div>
            <a className='btn'>Inicio</a>
            <a className='btn'>Categorias</a>
            <a className='btn'>Nosotros</a>
            <a className='btn'>Contacto</a>
        </div>
        <CartWidget />
    </nav>
    )
};

export default Navbar;