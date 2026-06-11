import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewItem = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <Input
          placeholder="Add a new task"
          className="max-w-md w-full flex m-4"
        />
        <Button variant="outline" className="mr-2">
          Add
        </Button>
      </div>
    </>
  );
};

export default NewItem;
