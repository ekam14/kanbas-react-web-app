import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import {faBook, faCircleCheck, faEllipsisV, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './styles.css';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div style={{width: "90%"}}>
            <div>
                <input type="text" className="w-25" placeholder="Search for Assignment" />
                <div className="float-end">
                    <button className="btn btn-gray mx-1">+Group</button>
                    <button className="btn btn-danger">+ Assignment</button>
                    <button className="btn btn-gray mx-1">
                        <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            <hr />
            <div className="p-4 assignments-top-section">
                <div style={{display: "inline"}}>
                    <span>&#8286;</span>
                    <span>&#8286;</span>
                    <span className="mx-3">&#9660;</span>
                    <span><b>ASSIGNMENTS</b></span>
                </div>
                <div className="mb-1 float-end">
                    <button className="btn btn-light total">40% of Total</button>
                    <FontAwesomeIcon className="mx-2" icon={faPlus}/>
                    <FontAwesomeIcon className="mx-3" icon={faEllipsisV}/>
                </div>
            </div>
            <div className="assignments-section">
                <ul className="list-group">
                {courseAssignments.map((assignment, index) => (
                    <div key={index} className="list-group-item assignment-div">
                        <div className="row">
                            <div className="col-1 mt-4">
                                <span>&#8286;</span>
                                <span>&#8286;</span>
                                <FontAwesomeIcon className="fa-book ml-1" icon={faBook}/>
                            </div>
                            <div className="col-9 assignment-content">
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    className="list-group-item">
                                    <b>{assignment.title}</b>
                                    <br />
                                    <span className="assignment-sub-content">
                                        <span style={{color: "red"}}>Multiple Modules</span>&nbsp;|&nbsp;
                                        <strong>Due</strong> Sep 18, 23 at 11:59pm | 100 pts
                                    </span>
                                </Link>
                            </div>
                            <div className="col-2 text-end mt-4">
                                <FontAwesomeIcon className="assignment-fa-circle-check" icon={faCircleCheck}/>
                                <FontAwesomeIcon icon={faEllipsisV}/>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            </div>
        </div>
    );
}
export default Assignments;