import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ListItem = () => {
  const tasks = [
    {
      id: 1,
      name: "primeira tarefa",
      isCompleted: false,
    },
  ];
  return (
    <>
      {tasks.map((task) => (
        <li key={task.id}>
          <Card className="max-w-lg w-full flex items-center gap-2 m-4 flex-row p-4 justify-between">
            <p>{task.name}</p>
            <div>
              <Button variant="outline" className="mr-2">
                Finalizar
              </Button>
              <Button variant="destructive">x</Button>
            </div>
          </Card>
        </li>
      ))}
    </>
  );
};

export default ListItem;
