import React from "react";
import { ButtonToggleTheme } from "@/modules/components/theme/button-toggle-theme/button-toggle-theme";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="border-b py-3 flex justify-center items-center px-10">
      <div className="flex justify-between items-center w-full max-w-[1120px]">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="scroll-m-20 text-3xl max-sm:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Traducteur
          </h1>
        </div>
        <ButtonToggleTheme />
      </div>
    </div>
  );
};
