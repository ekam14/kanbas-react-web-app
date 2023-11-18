import {Link, useNavigate, useParams} from "react-router-dom";
import {faCircleCheck, faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import './styles.css'

import { useSelector, useDispatch } from "react-redux";
import {addAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";

import * as client from "../client";

function AssignmentEditor(){
    const { courseId } = useParams();
    const { assignmentId } = useParams();
    const navigate = useNavigate();

    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const handleSave = async () => {
        console.log("Saving assignment data.");
        if(assignmentId === "-1") {
            await client.createAssignment(courseId, assignment).then((assignment) => {
                dispatch(addAssignment(assignment));
            });
        } else {
            await client.updateAssignmentForCourse(assignment).then(() => {
                dispatch(updateAssignment(assignment));
                console.log(assignment);
            })
        }
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
                <input type="text" className="form-control mb-2" value={assignment.title}
                       onChange={(e) => dispatch(setAssignment({...assignment, title: e.target.value}))}/>
                <textarea className="form-control" value={assignment.description}
                          onChange={(e) => dispatch(setAssignment({...assignment, description: e.target.value}))}/>
            </div>
            <div className="row my-4">
                <div className="col-4 text-end">
                    <label>Points</label>
                </div>
                <div className="col-8">
                    <input type="text" className="form-control" value="100" />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-4 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-8">
                    <div className="assign-to p-3">
                        <p className="fw-bold">Assign To</p>
                        <div className="assign-to p-2">
                            <div className="inside-assign-to">
                                <label>Everyone</label>
                                <label className="float-end">&#10005;</label>
                            </div>
                        </div>
                        <div className="my-2">
                            <p className="fw-bold">Due</p>
                            <input type="date" className="form-control" />
                        </div>
                        <div className="row my-2">
                            <div className="col-6">
                                <p className="fw-bold">Available from</p>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-6">
                                <p className="fw-bold">Until</p>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
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