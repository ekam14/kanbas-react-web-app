import Add from "./Add";
import PassingFunctions from "./PassingFunctions";
import ClickEvent from "./ClickEvent";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import BooleanStateVariables from "./BooleanStateVariables";
import DateStateVariable from "./DateStateVariable";
import StringStateVariables from "./StringStateVariables";
import Counter from "./Counter";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return (
        <div>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent />
            <EventObject />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <Counter />
            <BooleanStateVariables />
            <DateStateVariable />
            <StringStateVariables />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ReduxExamples />
        </div>
    );
}

export default Assignment4;