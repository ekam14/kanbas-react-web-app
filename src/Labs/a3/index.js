import JavaScript from "./Javascript";
import Classes from "./Classes";
import PathParameters from "./PathParameters";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <TodoItem />
            <TodoList />
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters/>
            <JavaScript />
        </div>
    );
}

export default Assignment3;