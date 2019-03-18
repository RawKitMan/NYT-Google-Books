
class Nav extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <Link to="/" className="navbar-brand">Google Books</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/saved" className="nav-link">Saved</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};


export default Nav;