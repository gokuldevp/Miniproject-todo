import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";

class App extends React.Component {
  render() {
    const list = [1, 2, 3, 4, 5];
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {list.map((item) => {
          return <TodoItem />;
        })}
      </div>
    );
  }
}

export default App;
