import {Link, useLocation, useParams} from "react-router-dom";

import './styles.css';

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades",
                   "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files",
                   "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)",
                   "Settings"];

    const { courseId } = useParams();
    const { pathname } = useLocation();

    return (
        <div className="home-main-content">
            <ul className="list-group no-border">
                <li className="list-group-item">
                    <span className="text-muted">202410_1 Fall 2023 Sem...</span>
                </li>
                {links.map((link, index) => (
                    <li key={index} className={`list-group-item && ${pathname.includes(link) && "active-item"}`}>
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation;