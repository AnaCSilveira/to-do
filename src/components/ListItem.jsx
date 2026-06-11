import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ListItem = () => {
  return (
    <ul>
      <li>
        <Card className="max-w-md w-full flex items-center gap-2 m-4 flex-row p-4 justify-between">
          <p>Task</p>
          <div>
            <Button variant="outline" className="mr-2">
              Finalizar
            </Button>
            <Button variant="destructive">x</Button>
          </div>
        </Card>
      </li>
    </ul>
  );
};

export default ListItem;
