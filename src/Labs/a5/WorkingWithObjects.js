import React, {useEffect, useState} from "react";
import axios from "axios";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
         id: 1,
         title: "NodeJS Assignment",
         description: "Create a NodeJS server with ExpressJS",
         due: "2021-10-10",
         completed: false,
         score: 0,
     });

    const API_BASE = process.env.REACT_APP_LAB_BASE;
    const URL = `${API_BASE}/assignment`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${URL}`);
        setAssignment(response.data);
    };

    const updateTitle = async () => {
        const response = await axios
            .get(`${URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };

    useEffect(() => {
        fetchAssignment();
    }, []);


    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href={URL}
               className="btn btn-primary me-2">
                Get Assignment
            </a>
            <h4>Retrieving Properties - Title</h4>
            <a href={`${URL}/title`}
               className="btn btn-primary me-2">
                Get Title
            </a>
            <h4>Modifying Properties - Title</h4>
            <input type="text" value={assignment.title}
                onChange={(e) => setAssignment({...assignment, title: e.target.value})}/>
            <a href={`${URL}/title/${assignment.title}`}
                className="btn btn-primary me-2 float-end">
                Update title
            </a>
            <button onClick={updateTitle}
                    className="w-100 btn btn-primary mb-2">
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment}
                    className="w-100 btn btn-danger mb-2">
                Fetch Assignment
            </button>
            <h4>Retrieving Properties - Score</h4>
            <a href={`${URL}/score`}
               className="btn btn-primary me-2">
                Get Score
            </a>
            <h4>Modifying Properties - Score</h4>
            <input type="number" value={assignment.score}
                   onChange={(e) => setAssignment({...assignment, score: parseInt(e.target.value)})}/>
            <a href={`${URL}/score/${assignment.score}`}
               className="btn btn-primary me-2 float-end">
                Update score
            </a>
            <h4>Retrieving Properties - Completed</h4>
            <a href={`${URL}/completed`}
               className="btn btn-primary me-2">
                Get Completed
            </a>
            <h4>Modifying Properties - Completed</h4>
            <input type="checkbox" checked={assignment.completed}
                   onChange={(e) => setAssignment({...assignment, completed: !assignment.completed})}/>
            Completed
            <a href={`${URL}/completed/${assignment.completed}`}
               className="btn btn-primary me-2 float-end">
                Update Completed
            </a>
        </div>
  );
}
export default WorkingWithObjects;