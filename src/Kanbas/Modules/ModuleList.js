import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";

import './styles.css';
import {useParams} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const modulesForCourse = modules.filter((module) => module.course === courseId);

    return (
        <div>
            <ul className="list-group">
                <div className="list-group-item">
                    <input value={module.name} className="form-control"
                              onChange={(e) => dispatch(setModule({...module, name: e.target.value}))}/>
                    <textarea value={module.description} className="my-2 form-control"
                              onChange={(e) => dispatch(setModule({...module, description: e.target.value}))}/>
                    <button onClick={(event) => {
                        event.preventDefault();
                        dispatch(addModule({...module, course: courseId}))
                    }} className="btn btn-success">
                        Add
                    </button>
                    <button onClick={(event) => {
                        event.preventDefault();
                        dispatch(updateModule(module))
                    }} className="btn btn-primary my-2 mx-2">
                        Update
                    </button>
                </div>
                {modulesForCourse.map((module, index) => (
                    <div key={index} className="module-div">
                        <li key={index} className="list-group-item list-group-item-action">
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                            <FontAwesomeIcon className="mx-2" icon={faChevronRight} />
                            <span className="fw-bold">{module.name}</span>
                            <div className="float-end me-2">
                                {/*<FontAwesomeIcon className="mx-1 fa-circle-check" icon={faCircleCheck} />*/}
                                {/*<FontAwesomeIcon icon={faChevronDown} />*/}
                                {/*<FontAwesomeIcon className="mx-4" icon={faPlus} />*/}
                                {/*<FontAwesomeIcon className="ms-3" icon={faEllipsisVertical} />*/}
                                <button className="mx-2 btn btn-warning"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(setModule(module))
                                        }}>
                                    Edit
                                </button>
                                <button className="btn btn-danger"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            dispatch(deleteModule(module._id))
                                        }}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ModuleList;