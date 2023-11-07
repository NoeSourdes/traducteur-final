import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mic } from "lucide-react";
import { Popover } from "@/components/ui/popover";

export const Buttons = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <Popover>
        <Button variant="ghost">
          <Mic size={20} />
        </Button>
      </Popover>
      <Button variant="ghost">
        <Copy size={20} />
      </Button>
    </div>
  );
};
