import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import {faBook, faCircleCheck, faEllipsisV, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './styles.css';
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment, setAssignment} from "./assignmentsReducer";

function Assignments() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const assignments = useSelector((state) => state.assignmentsReducer.assignments)
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);

    const [ showPopup, setPopUp ] = useState(false);
    const [ assignmentId, setAssignmentId ] = useState(-1);

    const handleClose = () => {
        setAssignmentId(-1);
        setPopUp(false);
    }

    return (
        <div style={{width: "90%"}}>
            { showPopup &&
              <div className="modal-container">
                  <div className="modal-content">
                      <div>
                          Do you want to delete this assignment?
                      </div>
                      <div>
                          <button className="btn btn-danger mx-2"
                                  onClick={() => {
                                      dispatch(deleteAssignment(assignmentId));
                                      handleClose();
                                    }
                                  }>
                              Yes
                          </button>
                          <button className="btn btn-primary"
                                  onClick={handleClose}>
                              No
                          </button>
                      </div>
                  </div>
              </div>
            }
            <div>
                <div>
                    <input type="text" className="w-25" placeholder="Search for Assignment" />
                    <div className="float-end">
                        <button className="btn btn-gray mx-1">+Group</button>
                        <button className="btn btn-danger">
                            <Link to={`/Kanbas/Courses/${courseId}/Assignments/-1`}
                                  className="add-assignment">
                                + Assignment
                            </Link>
                        </button>
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
                                            onClick={() => dispatch(setAssignment({...assignment}))}
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
                                        <button className="btn btn-danger mx-2"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setAssignmentId(assignment._id);
                                                    setPopUp(true)
                                                }}>
                                            Delete
                                        </button>
                                        <FontAwesomeIcon className="assignment-fa-circle-check" icon={faCircleCheck}/>
                                        <FontAwesomeIcon icon={faEllipsisV}/>
                                     </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Assignments;