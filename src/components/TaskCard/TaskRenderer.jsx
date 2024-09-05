import { TaskCard } from "./TaskCard"
import tasks from "./TaskData"
export function TaskRenderer() {
    return(
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} description={task.description} completed={task.completed} />
      ))}
    </div>
    )
}