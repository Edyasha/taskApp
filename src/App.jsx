import useStore from "../store";

import TaskApp from "./components/TaskApp";
import "./App.css";
import CreateTaskApp from "./components/CreateTaskApp";

function App() {
  const tasks = useStore((state) => state.tasks);
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
              <TaskApp dataTask={task.text} />
            </li>
          ))}
        </ul>
        {/* <TaskApp dataTask="Сomplete all homework" />
        <TaskApp dataTask="Do all the homework and clean up" />
        <TaskApp dataTask="Do all the sdfsefse aefsefs uiki, 675675" />
        <TaskApp /> */}
      </div>
    </div>
  );
}

export default App;
