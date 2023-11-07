import React from "react";
import { Button } from "@/components/ui/button";
import { BrainCircuit } from "lucide-react";

export const Upgrade = () => {
  return (
    <div className="flex justify-center items-center mb-10">
      <Button>
        Améliore ton texte <BrainCircuit className="ml-3" size={20} />
      </Button>
    </div>
  );
};
