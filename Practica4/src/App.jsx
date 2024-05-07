import { useState } from "react";
import TaskList from "./components/tasklist/TaskList";
import AddList from "./components/addlist/AddList";

function App() {
  const [listTask, setListTask] = useState([]);

  const addTask = (newTask) => {
    const taskData = { ...newTask, taskId: Math.random() };
    setListTask([...listTask, taskData]);
  };

  const completedTask = (taskId) => {
    setListTask(
      listTask.map((task) => {
        if (task.taskId === taskId) {
          return { ...task, taskCompleted: !task.taskCompleted };
        }
        return task;
      })
    );
  };
  const deleteTask = (taskId) => {
    setListTask(listTask.filter((task) => task.taskId != taskId));
  };
  return (
    <>
      <h1>Lista de Tareas</h1>
      <AddList addTask={addTask}></AddList>
      <TaskList
        listTask={listTask}
        completedTask={completedTask}
        deleteTask={deleteTask}
      ></TaskList>
    </>
  );
}

export default App;
