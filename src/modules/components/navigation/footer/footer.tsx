import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="px-10 border-t py-14 flex justify-center items-center max-lg:py-7">
      <div className="max-w-[1120px] flex justify-between items-center w-full max-lg:flex-col max-lg:space-y-8">
        <div>
          <h2 className="scroll-m-20 text-3xl max-sm:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Traducteur
          </h2>
        </div>
        <div className="space-y-3">
          <p className="text-center">Designed and built by Noé Sourdès</p>
          <p className="text-center">©Copyright 2023 - Noé Sourdès</p>
        </div>
        <div>
          <Link href="https://github.com/NoeSourdes" target="_blank">
            <Button>
              <p className="mr-2">Mon Github</p>
              <ExternalLink size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
