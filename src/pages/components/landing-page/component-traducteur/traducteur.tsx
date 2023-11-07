import React from "react";
import { SelectComponent } from "@/pages/components/landing-page/component-traducteur/components/component-select/component-select";
import { ComponentTextarea } from "@/pages/components/landing-page/component-traducteur/components/component-textarea/component-textarea";
import { Buttons } from "@/pages/components/landing-page/component-traducteur/components/component-select/components/buttons/buttons";

export const Traducteur = () => {
  return (
    <div className="px-10 flex justify-center py-10">
      <div className="max-w-[1120px] space-x-10 flex justify-between w-full max-lg:flex-col max-lg:space-y-10 max-lg:space-x-0">
        <div className="lg:w-[45vw] space-y-3">
          <div className="space-y-3">
            <SelectComponent />
          </div>
          <ComponentTextarea />
        </div>
        <div className="border"></div>
        <div className="lg:w-[40vw] space-y-3">
          <div className="space-y-3">
            <SelectComponent />
          </div>
          <div className="relative border min-h-[250px] px-3 py-2 rounded-[10px]">
            <p className="text-sm"></p>
            <div className="absolute bottom-3 right-3">
              <Buttons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
