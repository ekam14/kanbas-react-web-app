import {useEffect, useState} from "react";
import axios from "axios";

function EncodingParametersInURLs() {
    const [a, setA] = useState(34);
    const [b, setB] = useState(23);
    const [result, setResult] = useState(0);

    const [welcome, setWelcome] = useState("");
    const fetchWelcome = async() => {
        const response = await axios.get(`${process.env.REACT_APP_LAB_BASE}/welcome`);
        setWelcome(response.data);
    }

    const fetchSum = async(a, b) => {
        const response = await axios.get(`${process.env.REACT_APP_LAB_BASE}/add/${a}/${b}`);
        setResult(response.data);
    }

    const fetchSubtraction = async(a, b) => {
        const response = await axios.get(`${process.env.REACT_APP_LAB_BASE}/subtract/${a}/${b}`);
        setResult(response.data);
    }

    useEffect(() => {
        fetchWelcome();
    }, []);

    return (
        <div>
            <h3>Encoding Parameters in URLs</h3>
            <h4>Integrating React with APIs</h4>
            <h5>Fetching Welcome</h5>
            <h6>{welcome}</h6>
            <h4>Calculator</h4>
            <input className="form-control" type="number" value={a}
                   onChange={(e) => setA(e.target.value)}/>
            <input className="form-control" type="number" value={b}
                   onChange={(e) => setB(e.target.value)}/>
            <h3>Path Parameters</h3>
            <a href={`${process.env.REACT_APP_LAB_BASE}/add/${a}/${b}`}
               className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a href={`${process.env.REACT_APP_LAB_BASE}/subtract/${a}/${b}`}
               className="btn btn-danger">
                Subtract {a} - {b}
            </a>

            <h3>Query Parameters</h3>
            <a href={`${process.env.REACT_APP_LAB_BASE}/calculator?operation=add&a=${a}&b=${b}`}
                className="btn btn-primary">
                Add {a} + {b}
            </a>
            <a href={`${process.env.REACT_APP_LAB_BASE}/calculator?operation=subtract&a=${a}&b=${b}`}
                className="btn btn-danger">
                Subtract {a} - {b}
            </a>
            <input value={result}
                   className="form-control mb-2" type="number" readOnly
            />
            <h3>Fetch Result</h3>
            <button onClick={() => fetchSum(a, b)}
                    className="btn btn-primary mb-2  w-100" >
                Fetch Sum of {a} + {b}
            </button>
            <button onClick={() => fetchSubtraction(a, b)}
                    className="btn btn-danger me-2 w-100" >
                Fetch Substraction of {a} - {b}
            </button>
        </div>
    );
}
export default EncodingParametersInURLs;