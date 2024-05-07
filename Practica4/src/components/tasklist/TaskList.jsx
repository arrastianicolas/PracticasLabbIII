import { Button } from "react-bootstrap";

const TaskList = ({ listTask, completedTask, deleteTask }) => {
  const listTaskMapped = listTask.map((task) => (
    <li
      key={task.taskId}
      style={{
        textDecoration: task.taskCompleted ? "line-through" : "none",
        marginTop: "10px",
      }}
    >
      {task.taskText}
      {
        <>
          <Button
            onClick={() => completedTask(task.taskId)}
            className="ms-2 btn btn-primary"
          >
            completada
          </Button>
          <Button
            onClick={() => deleteTask(task.taskId)}
            className="ms-2 btn btn-danger"
          >
            eliminar
          </Button>
        </>
      }
    </li>
  ));
  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
      <ul>{listTaskMapped}</ul>
    </div>
  );
};

export default TaskList;
