import TaskApp from "./components/TaskApp";
import "./App.css";

function App() {
  return (
    <div className="roboto-app">
      <p className="text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
      <div className="flex flex-row justify-around">
        <TaskApp taskTitle="Add new Task" />
      </div>
    </div>
  );
}

export default App;
