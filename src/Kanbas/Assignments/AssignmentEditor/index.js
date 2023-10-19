import {Link, useNavigate, useParams} from "react-router-dom";
import db from "../../Database";
import {faCircleCheck, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import './styles.css'

function AssignmentEditor(){
    const { courseId } = useParams();
    const { assignmentId } = useParams();
    const navigate = useNavigate();

    const assignments = db.assignments;

    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    const handleSave = () => {
        console.log("Saving assignment data.");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }

    return (
        <div>
            <div className="float-end my-2">
                    <FontAwesomeIcon className="green-color" icon={faCircleCheck}/>
                    <label className="green-color">Published</label>
                    <button className="btn btn-gray mx-3">
                        <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                    </button>
            </div>
            <hr/>
            <div>
                <label>Assignment Name</label>
                <input type="text" className="form-control mb-2" value={assignment.title}/>
            </div>
            <hr />
            <div className="float-end my-2">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-gray">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-danger mx-1">
                    Save
                </button>
            </div>
            <hr />
        </div>
    );
}

export default AssignmentEditor;