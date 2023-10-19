import db from '../Database';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronDown,
    faChevronRight,
    faCircleCheck,
    faEllipsisVertical, faPlus
} from "@fortawesome/free-solid-svg-icons";

import './styles.css';
import {useParams} from "react-router-dom";

function ModuleList() {
    const { courseId } = useParams();

    const modules = db.modules.filter((module) => module.course === courseId);

    return (
        <div>
            <ul className="list-group">
                {modules.map((module, index) => (
                    <div key={index} className="module-div">
                        <li key={index} className="list-group-item list-group-item-action">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                            <FontAwesomeIcon className="mx-2" icon={faChevronRight} />
                            <span className="fw-bold">{module.name}</span>
                            <div className="float-end me-2">
                                <FontAwesomeIcon className="mx-1 fa-circle-check" icon={faCircleCheck} />
                                <FontAwesomeIcon icon={faChevronDown} />
                                <FontAwesomeIcon className="mx-4" icon={faPlus} />
                                <FontAwesomeIcon className="ms-3" icon={faEllipsisVertical} />
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;