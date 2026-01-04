import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background pt-12 pb-16">
      <TopNav />
      <main className="max-w-screen-xl mx-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
