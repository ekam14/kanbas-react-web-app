import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useState} from "react";
import db from "./Database";
import {Provider} from "react-redux";
import store from "./store";

function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
         name: "Sample course",
         number: "New number",
         startDate: "2023-09-10",
         endDate: "2023-12-12",
    });

    const addNewCourse = () => {
        setCourses([...courses, {
            ...course,
            _id: new Date().getTime().toString()
        }])
    }

    const updateCourse = () => {
        setCourses(courses.map((c) => {
            return (c._id === course._id) ? course : c;
        }))
    }

    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    return (
        <Provider store={store}>
            <div className="row">
                <div className="col-1">
                <KanbasNavigation />
            </div>
                <div className="col-11">
                <Routes>
                    <Route path='/' element={<Navigate to="Dashboard" />} />
                    <Route path='/Account' element={<h1>Account</h1>} />
                    <Route path='/Dashboard' element={
                        <Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse}
                        />
                    } />
                    <Route path='/Courses/:courseId/*' element={<Courses courses={courses}/>} />
                </Routes>
            </div>
            </div>
        </Provider>
    );
}

export default Kanbas;