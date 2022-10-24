import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around align-items-center'>
        <Link className='btn' to={'/'}>
            CoffeeStore
        </Link>
        <div className='d-flex justify-content-between align-items-center'>
            <Link className='px-3 btn' to={'/'}>Inicio</Link>
            <Link className='px-3 btn' to={'/category/Cafeteras'} >Cafeteras</Link>
            <Link className='px-3 btn' to={'/category/CafeMolido'} >Cafe molido</Link>
            <Link className='px-3 btn' to={'/category/CapsulasDeCafe'} >Cafe en capsulas</Link>
        </div>
        <CartWidget />
    </nav>
    )
};

export default Navbar;