import react from "react";
import useStore from "../store";

import TaskApp from "./components/TaskApp";
import "./App.css";
import CreateTaskApp from "./components/CreateTaskApp";

function App() {
  const tasks = useStore((state) => state.tasks);
  const deleteTasks = useStore((state) => state.removeTasks);
  console.log(tasks);

  return (
    <div className="roboto-app">
      <p className="text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-row justify-around m-4">
        <CreateTaskApp taskTitle="Add new Task" />
      </div>
      <div className="flex flex-col my-4">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <TaskApp
                id={task.id}
                dataTask={task.text}
                createdTime={task.created}
                status={task.completed}
                deleteTasks={() => deleteTasks(task.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
