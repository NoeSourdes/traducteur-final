import React from "react";
import { Header } from "@/pages/components/navigation/header/header";
import { Footer } from "@/pages/components/navigation/footer/footer";

interface Props {
  children: React.ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-[100vh] flex flex-col justify-between">
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
