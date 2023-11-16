import CartWidget from "./CardWidget/CardWidget"

const NavBar = () => { 
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Tortas</button>
                <button>Postre</button>
                <button>Mesa Dulce</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar