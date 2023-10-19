import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

function Kanbas() {
    return (
        <div className="row">
            <div className="col-1">
                <KanbasNavigation />
            </div>
            <div className="col-11">
                <Routes>
                    <Route path='/' element={<Navigate to="Dashboard" />} />
                    <Route path='/Account' element={<h1>Account</h1>} />
                    <Route path='/Dashboard' element={<Dashboard />} />
                    <Route path='/Courses/:courseId/*' element={<Courses />} />
                </Routes>
            </div>
        </div>
    );
}

export default Kanbas;