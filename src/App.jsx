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
              <Checkbox />
              <div className="flex items-center justify-between w-full px-4">
                <p>{task.name}</p>
                <Button variant="ghost">x</Button>
              </div>
            </Card>
          ))}
        </ListItem>
      </List>
      <div className="flex flex-col w-full max-w-md ml-4">
        <TotalTodos />
        <MotivacionalFrase />
      </div>
    </div>
  );
}

export default App;
