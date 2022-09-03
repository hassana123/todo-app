import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCircleCheck,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: "go shopping", day: "2022-10-20", completed: false },
    { id: 2, task: "pray", day: "2022-10-25", completed: false },
    { id: 3, task: "travel", day: "2022-10-29", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newDate, setNewDate] = useState("");
  // const [updateTask, setupdatededTask] = useState('');

  const addTask = () => {
    if (newTask && newDate) {
      let newId = tasks.length + 1;
      let newEnteredTask = {
        id: newId,
        task: newTask,
        day: newDate,
        completed: false,
      };
      setTasks([...tasks, newEnteredTask]);
      setNewTask("");
    } else {
      alert("\n Task Can not be empty");
    }
  };

  const deleteTask = (id) => {
    let reminingTask = tasks.filter((task) => task.id !== id);
    setTasks(reminingTask);
  };

  const markCompleteTask = (id) => {
    const completeTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(completeTask);
  };

  //   const editTask = (e) => {};

  return (
    <div className="todo">
      <div className="form-control">
        <label>Add Task:</label>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          type="text"
          placeholder="eg. Go Fishing"
        />
      </div>
      <div className="form-control">
        <label>Add Task Due Date:</label>
        <input
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          type="date"
        />
      </div>
      <button onClick={addTask} className="btn">
        Add Task
      </button>

      {tasks.length
        ? ""
        : [<small style={{ textAlign: "center" }}>Zero Tasks Added..</small>]}
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <div
            className={`task-container ${task.completed ? "completed" : ""}`}
          >
            <div className="tasks">
              <h3>{task.task}</h3>
              <small>{task.day}</small>
            </div>

            <div className="task-icons">
              {task.completed ? null : (
                <span className="pen">
                  <FontAwesomeIcon icon={faPen} />
                </span>
              )}

              <span
                onClick={(e) => markCompleteTask(task.id)}
                className={`${task.completed ? "checked" : ""}`}
              >
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span onClick={() => deleteTask(task.id)} className="trash">
                <FontAwesomeIcon icon={faTrashCan} />
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Todo;
