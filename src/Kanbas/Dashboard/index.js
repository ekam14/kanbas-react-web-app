import db from '../Database';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBook} from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function Dashboard() {
    const courses = db.courses;

    const colorClasses = ["dark-blue", "blue", "gray"]

    const randomBackgroundClass = () => Math.floor(Math.random() * colorClasses.length)

    return (
        <div>
            <p className="fs-1 fw-lighter">Dashboard</p>
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
                                    <FontAwesomeIcon icon={faBook} />
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