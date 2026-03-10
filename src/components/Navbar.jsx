import { Link } from "react-router-dom";
function Navbar() {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Dynex Stores
                </Link>
                <Link className="btn btn-light" to="/add">
                    Add Product
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
