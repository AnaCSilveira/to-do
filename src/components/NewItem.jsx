import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewItem = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Add a new task" size="sm" />
      <Button variant="default" className="mr-2">
        Add
      </Button>
    </div>
  );
};

export default NewItem;
