import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faBars,
    faBook, faCalendar,
    faChevronDown, faClock,
    faGauge,
    faGlasses, faInbox, faNetworkWired, faQuestion,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import './styles.css';
import Image from "../../images/north.png";
import {Link, useLocation} from "react-router-dom";

function Modal({courseNumber}){
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio",
                   "Commons", "Help"]
    const faIcons = [faUser, faGauge, faBook, faCalendar, faInbox, faClock, faNetworkWired,
                     faArrowRightFromBracket, faQuestion]

    const { pathname } = useLocation();

    return (
        <div>
            <div className="d-md-none">
                <nav className="navbar navbar-dark bg-black">
                    <div
                        className="container-fluid black-navbar d-flex justify-content-between align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal"
                                data-bs-target="#navbarContentModal">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </button>
                        <div className="d-flex align-items-center mx-auto">
                            <div className="modules-text">{courseNumber} <br /> Modules</div>
                        </div>
                        <FontAwesomeIcon className="mx-2" icon={faGlasses}></FontAwesomeIcon>
                        <button className="navbar-toggler" type="button" data-bs-toggle="modal"
                                data-bs-target="#collapseMenuModal">
                            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                        </button>
                    </div>
                </nav>
            </div>
            <div className="d-md-none modal fade" id="navbarContentModal" tabIndex="-1"
                 aria-labelledby="navbarContentModalLabel">
                <div>
                    <div className="modal-content p-4">
                        <button className="close" data-bs-dismiss="modal" aria-label="Close">
                            <div className="float-end" aria-hidden="true">&times;</div>
                        </button>
                        <ul className="navbar-nav flex-column">
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
            </div>
        </div>
    );
}

export default Modal;