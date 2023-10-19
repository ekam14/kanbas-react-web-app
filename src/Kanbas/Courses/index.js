import {useLocation, useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseNavigation from "../CourseNavigation";
import {Navigate, Route, Routes} from "react-router";
import { Breadcrumb } from 'react-bootstrap';
import {faBars, faGlasses} from "@fortawesome/free-solid-svg-icons";
import Modules from "../Modules";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import Grades from "../Grades";
import Home from "../Home";
import db from "../Database";

import './styles.css'
import React from "react";

function Courses() {
    const { courseId } = useParams();

    let { pathname } = useLocation();
    let section = pathname.split("/")
    let subsection = "";
    let pathnameSubsection = "";
    let el = pathname.split("/");
    section = section[section.length - 1]

    const course = db.courses.filter((course) => course._id === courseId)[0];
    const assignment = db.assignments.filter((assignment) => assignment._id === section)[0];

    if(pathname.includes("Assignments") && section !== "Assignments") {
        subsection = "Assignments";
        section = assignment.title;
        pathnameSubsection = el.slice(0, el.length - 1).join('/');
    }

    if(section === "Home") {
        section = "Modules";
        pathname = el.slice(0, el.length - 1).join('/') + `/${section}`
    }

    section = decodeURIComponent(section);

    return (
        <div className="row">
            <div className="breadcrumb-div col-12">
                <div className="justify-content-between align-items-center my-2">
                    <Breadcrumb>
                        <FontAwesomeIcon className="mx-3 mt-1" icon={faBars}/>
                        <Breadcrumb.Item href="#">{course.number} FA23</Breadcrumb.Item>
                        {(subsection.length > 0) && (
                            <span className="mx-2">></span>
                        )}
                        {(subsection.length > 0) && (
                            <Breadcrumb.Item href={`${pathnameSubsection}`}>{subsection}</Breadcrumb.Item>
                        )}
                        <span className="mx-2">></span>
                        <Breadcrumb.Item className="breadcrumb-link" href={`${pathname}`}>{section}</Breadcrumb.Item>
                    </Breadcrumb>
                    {(section === "Modules") && (
                        <div className="student-view float-end">
                            <button className="btn btn-gray">
                                <FontAwesomeIcon className="mx-2" icon={faGlasses}></FontAwesomeIcon>
                                <span>Student View</span>
                            </button>
                        </div>
                    )}
                </div>
                <hr />
            </div>
            <div className="row">
                <div className="col-2">
                    <CourseNavigation />
                </div>
                <div className="col-10">
                    <div
                        // className="overflow-y-scroll position-fixed bottom-0 end-0"
                        // style={{
                        //     left: "320px",
                        //     top: "80px",
                        // }}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home/>} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />}
                            />
                            <Route path="Grades" element={<Grades />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;