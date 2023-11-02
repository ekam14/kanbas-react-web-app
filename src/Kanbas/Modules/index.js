import ModuleList from "./ModuleList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faEllipsisV, faPlus} from "@fortawesome/free-solid-svg-icons";

import './styles.css';

function Modules() {
    return (
        <div >
            <div>
                <div className='modules-buttons'>
                    <button type="button" className="btn btn-light"> Collapse All</button>
                    <button type="button" className="btn btn-light">View Progress</button>
                    <div className="dropdown" style={{display: "inline"}}>
                        <button className="btn btn-light dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faCircleCheck}/> Publish All
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Publish All</a></li>
                            <li><a className="dropdown-item" href="#">Delete All</a></li>
                        </ul>
                    </div>
                    <button type="button" className="btn btn-danger">
                        <FontAwesomeIcon icon={faPlus}/>Module
                    </button>
                    <button type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faEllipsisV}/>
                    </button>
                </div>
            </div>
            <hr />
            <ModuleList />
        </div>
    );
}

export default Modules;