import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }) {
    const colorClasses = ["dark-blue", "blue", "gray"]

    const randomBackgroundClass = () => Math.floor(Math.random() * colorClasses.length)

    return (
        <div>
            <p className="fs-1 fw-lighter">Dashboard</p>
            <hr />
            <h5>Course</h5>
            <form>
                <input value={course.name} className="form-control my-2"
                    onChange={(e) => setCourse({...course, name: e.target.value})}/>
                <input value={course.number} className="form-control"
                    onChange={(e) => setCourse({...course, number: e.target.value})}/>
                <input value={course.startDate} className="form-control my-2"
                       onChange={(e) => setCourse({...course, startDate: e.target.value})}/>
                <input value={course.endDate} className="form-control"
                       onChange={(e) => setCourse({...course, endDate: e.target.value})}/>
                <button onClick={(event) => {
                    event.preventDefault();
                    addNewCourse();
                }} className="btn btn-success my-2">
                    Add
                </button>
                <button onClick={(event) => {
                    event.preventDefault();
                    updateCourse();
                }} className="btn btn-primary my-2 mx-2">
                    Update
                </button>
            </form>
            <hr />
            <div className="m-4">
                <p className="fs-3 fw-light">Published Courses(8)</p>
                <hr />
                <div className="d-flex flex-wrap">
                    {courses.map((course) => (
                        <Link
                            key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="list-group-item">
                            <div className={`card ${colorClasses[randomBackgroundClass()]}`}>
                                <div className="backgroundDiv" />
                                <div className="card-body">
                                    <p className="card-title">{course.name}</p>
                                    <p className="card-text">
                                        {course.number}<br />
                                        <span className="text-muted">Fall'2023 Full semester</span>
                                    </p>
                                    <div className="card-bottom">
                                        <FontAwesomeIcon icon={faBook} />
                                        <button className="mx-2 btn btn-warning"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course)
                                        }}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id)
                                                }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;