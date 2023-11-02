import Modules from "../Modules";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import './styles.css'
import Modal from "./Modal";

function Home({courseNumber}) {
    return(
        <div className="row">
            <Modal courseNumber={courseNumber}/>
            <div className="col-lg-9 col-md-9 col-sm-12 d-md-block d-sm-block">
                <Modules />
            </div>
            <div className="col-lg-3 d-none d-lg-block">
                <div>
                    <ul className="list-group normal-text">
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Import Existing Content
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Import From Commons
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            Choose Home Page
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            View Course Stream
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            New Announcement
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            New Analytics
                        </li>
                        <li className="list-group-item list-group-item-secondary list-group-item-action mb-1">
                            View Course Notifications
                        </li>
                    </ul>
                </div>
                <div className="todo">
                    <h5>To Do</h5>
                    <hr />
                    <div>
                        <div>
                            <FontAwesomeIcon className="" icon={faCircle} />
                            <a className="ms-1" href="#">Grade A1 - ENV + HTML</a>
                            <div className="float-end">
                                <span className="text-muted">X</span>
                            </div>
                        </div>
                        <p className="ms-4 text-muted">
                            100 points &#x2022; Sep 11 at 11:45am
                        </p>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon className="" icon={faCircle} />
                            <a className="ms-1" href="#">Grade A2 - CSS</a>
                            <div className="float-end">
                                <span className="text-muted">X</span>
                            </div>
                        </div>
                        <p className="ms-4 text-muted">
                            100 points &#x2022; Oct 02 at 11:45am
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;