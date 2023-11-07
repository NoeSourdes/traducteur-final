import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Buttons } from "@/pages/components/landing-page/component-traducteur/components/component-select/components/buttons/buttons";

export const ComponentTextarea = () => {
  return (
    <div className="relative">
      <Textarea
        className="max-h-[600px] min-h-[250px]"
        placeholder="Tape ton text ici"
      />
      <div className="absolute bottom-3 right-3">
        <Buttons />
      </div>
    </div>
  );
};
