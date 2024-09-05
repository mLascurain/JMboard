import { TaskCard } from "./components/TaskCard/TaskCard";
function App() {
  return (
    <>  
    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: "10px", marginLeft: "10px" }}>
      <TaskCard title="Task 1" description="This is the first task" completed={false} />
      <TaskCard title="Task 1" description="This is the first task" completed={false} />
      <TaskCard title="Task 1" description="This is the first task" completed={false} />
      <TaskCard title="Task 1" description="This is the first task" completed={false} />
    </div>
    </>
  );
}
export default App;
