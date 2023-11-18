import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
         name: "Sample course",
         number: "New number",
         startDate: "2023-09-10",
         endDate: "2023-12-12",
        _id: new Date().getTime().toString()
    });

    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;

    const findAllCourses = async () => {
        await axios.get(URL).then((response) => {
            setCourses(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
             ...courses,
             response.data
        ]);
        setCourse({name: ""});
    }

    const updateCourse = async (course) => {
        console.log("Course is: ", course);
        await axios.put(`${URL}/${course._id}`, course)
            .then((response) => {
                setCourses(courses.map((c) => {
                    return (c._id === course._id) ? course : c;
                }))
            }).catch((error) => {})
    }

    const deleteCourse = async (courseId) => {
        await axios.delete(`${URL}/${courseId}`);
        setCourses(courses.filter((course) => course._id !== courseId));
    }

    useEffect(() => {
        findAllCourses();
    }, []);

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