import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useTodoStore from "@/store/useToDoStore";

const NewItem = () => {
  const [task, setTask] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <div className="flex items-center max-w-md w-full">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add new task"
        size="sm"
        className="border-0 border-b px-4 rounded-none"
      />
      <Button variant="default" className="mr-2" onClick={handleAddTodo}>
        +
      </Button>
    </div>
  );
};

export default NewItem;
