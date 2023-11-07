import React from "react";
import { Traducteur } from "@/modules/components/landing-page/component-traducteur/traducteur";
import { Upgrade } from "@/modules/components/landing-page/component-upgrade/upgrade";

export const LandingPageView = () => {
  return (
    <div>
      <Traducteur />
      <Upgrade />
    </div>
  );
};
