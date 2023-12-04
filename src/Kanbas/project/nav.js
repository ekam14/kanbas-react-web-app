import {Link, useLocation} from "react-router-dom";

function Nav() {
    const links = ["Home", "Search", "Signin", "Signup", "Account"];

    const {pathname} = useLocation();

    return (
        <div className="d-md-block">
            <nav className="navbar navbar-expand-md">
                <div className="fluid-container d-flex">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            {links.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <Link
                                        key={index}
                                        to={`/project/${link}`}
                                        className={`nav-link  ${pathname.includes(link) && "active"}`}>
                                        <br />
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;