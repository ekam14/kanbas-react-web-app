import {useParams} from "react-router-dom";

import {
    faFileExport,
    faFileImport, faFilter,
    faGear,
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

import './styles.css';

function Grades() {
    const { courseId } = useParams();

    const enrollments = [].filter((enrollment) => enrollment.course === courseId) // enrollments
    const assignments = [].filter((assignment) => assignment.course === courseId) // assignments

    return (
        <div>
            <div className="top-buttons">
                <button className="btn btn-gray mx-1">
                    <FontAwesomeIcon className="mx-2" icon={faFileImport}></FontAwesomeIcon>Import
                </button>
                <button className="btn btn-gray dropdown-toggle mx-1">
                    <FontAwesomeIcon className="mx-1" icon={faFileExport}></FontAwesomeIcon>Import
                </button>
                <button className="btn btn-gray mx-1">
                    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                </button>
            </div>
            <div className="row">
                <div className="col-6">
                <p className="fw-bold">Student Names</p>
                <div className="search-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
                    <input type="text" className="search-input form-control" placeholder="Search Students" />
                </div>
                </div>
                <div className="col-6">
                    <p className="fw-bold">Assignment Names</p>
                    <div className="search-container">
                        <FontAwesomeIcon className="search-icon" icon={faSearch} />
                        <input type="text" className="search-input form-control" placeholder="Search Assignments" />
                    </div>
                </div>
        </div>
            <div>
            <button className="btn btn-gray my-3 mx-1">
                <FontAwesomeIcon className="mx-1" icon={faFilter}></FontAwesomeIcon>Apply Filters
            </button>
        </div>
            <div className="table-responsive">
            <table className="table table-bordered table-striped table-striped-red text-center">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </tr>
                    {enrollments.map((enroll) => {
                    const user = [].find((user) => user._id === enroll.user) //users
                    return (
                        <tr>
                            <td>{user.firstName} {user.lastName}</td>
                            {assignments.map((assignment) => {
                                const grade = [].find((grade) => // grades
                                    grade.student === enroll.user
                                    && grade.assignment === assignment._id
                                );
                                return (<td>{grade?grade.grade : ""}</td>)
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Grades;