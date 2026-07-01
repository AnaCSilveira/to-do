import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewItem = () => {
  return (
    <div className="flex items-center max-w-md w-full">
      <Input
        placeholder="Add new task"
        size="sm"
        className="border-0 border-b px-4 rounded-none"
      />
      <Button variant="default" className="mr-2">
        +
      </Button>
    </div>
  );
};

export default NewItem;
