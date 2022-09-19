import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='d-flex justify-content-around'>
        <div className='p-2'>CoffeStore</div>
        <div>
            <a className='btn'>Inicio</a>
            <a className='btn'>Categorias</a>
            <a className='btn'>Nosotros</a>
            <a className='btn'>Contacto</a>
        </div>
        <div></div>
    </nav>
    )
};

export default Navbar;