import ListItem from "./components/ListItem";
import NewItem from "./components/NewItem";
import List from "./components/List";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import TotalTodos from "./components/TotalTodos";
import MotivacionalFrase from "./components/MotivacionalFrase";
import useTodoStore from "@/store/useToDoStore";

function App() {
  const tasks = useTodoStore((state) => state.todos);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const handleRemoveTodo = (id) => {
    removeTodo(id);
  };
  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-4 text-2xl font-bold">Your To Do</h1>
      <NewItem />
      <List>
        <ListItem>
          {tasks.map((task) => (
            <Card
              key={task.id}
              className="min-w-md w-full flex items-center gap-2 my-4 flex-row p-2"
            >
              <Checkbox
                checked={!!task.completed}
                onCheckedChange={() => handleToggleTodo(task.id)}
              />
              <div className="flex items-center justify-between w-full px-4">
                <p className={task.completed ? "line-through" : ""}>
                  {task.name}
                </p>
                <Button
                  variant="ghost"
                  onClick={() => handleRemoveTodo(task.id)}
                >
                  x
                </Button>
              </div>
            </Card>
          ))}
        </ListItem>
      </List>
      <div className="flex flex-col w-full max-w-md ml-4">
        <TotalTodos totalTodos={tasks.length} />
        <MotivacionalFrase />
      </div>
    </div>
  );
}

export default App;
