import {Link, useLocation} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCalendar,
    faGauge,
    faUser,
    faInbox,
    faClock, faNetworkWired, faArrowRightFromBracket, faQuestion
} from "@fortawesome/free-solid-svg-icons";

import './styles.css';

import Image from "../images/north.png";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio",
                   "Commons", "Help"]
    const faIcons = [faUser, faGauge, faBook, faCalendar, faInbox, faClock, faNetworkWired,
                     faArrowRightFromBracket, faQuestion]
    const {pathname} = useLocation();

    return (
        <div>
            <nav className="main-navbar navbar navbar-expand-lg">
                <div className="fluid-container">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav flex-column">
                            <img className="logo" src={Image}  alt={"Northeastern"}/>
                            {links.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <Link
                                        key={index}
                                        to={link === "Courses" ? "/Kanbas/Courses/RS101/Home" : `/Kanbas/${link}`}
                                        className={`nav-link  ${pathname.includes(link) && "active"}`}>
                                        <FontAwesomeIcon className={`fa-icon ${link === "Account" && !pathname.includes(link) && "white-selected"}`} icon={faIcons[index]} />
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

export default KanbasNavigation;