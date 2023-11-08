import React from "react";
import { Header } from "@/modules/components/navigation/header/header";
import { Footer } from "@/modules/components/navigation/footer/footer";
import { Toaster } from "@/components/ui/toaster";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-between">
        <div>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
