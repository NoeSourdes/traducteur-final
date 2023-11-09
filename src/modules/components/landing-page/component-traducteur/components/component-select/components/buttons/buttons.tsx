import React from "react";
import { Button } from "@/components/ui/button";
import { Copy, Mic } from "lucide-react";
import { Popover } from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  handleCopy: () => void;
}

export const Buttons = ({ handleCopy }: Props) => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger onClick={handleCopy}>
            <Copy size={20} />
          </TooltipTrigger>
          <TooltipContent>
            <p>copié le texte</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
