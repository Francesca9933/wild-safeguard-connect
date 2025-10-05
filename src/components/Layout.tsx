import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import { Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background pb-16">
      <Link 
        to="/settings" 
        className="fixed top-4 right-4 z-50 p-2 bg-card rounded-full shadow-medium hover:shadow-strong transition-all"
      >
        <Settings className="h-6 w-6 text-primary" />
      </Link>
      <main className="max-w-screen-xl mx-auto">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
