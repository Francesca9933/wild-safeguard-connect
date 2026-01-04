import { Link } from "react-router-dom";
import { Settings, MessageCircle, Bell, HelpCircle, User, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TopNav = () => {
  const helpItems = [
    { label: "Check the Tutorial again", action: () => {} },
    { label: "How to report an animal?", action: () => {} },
    { label: "Where can I buy new maps?", action: () => {} },
    { label: "How do challenges work?", action: () => {} },
    { label: "Contact support", action: () => {} },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card border-b border-border shadow-medium z-50">
      <div className="flex justify-around items-center h-12 max-w-screen-xl mx-auto px-4">
        {/* Settings */}
        <Link
          to="/settings"
          className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors"
        >
          <Settings className="h-5 w-5" />
        </Link>

        {/* Chats */}
        <button className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors">
          <MessageCircle className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <Link
          to="/language-notifications"
          className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bell className="h-5 w-5" />
        </Link>

        {/* Help */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors">
              <HelpCircle className="h-5 w-5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-56">
            {helpItems.map((item) => (
              <DropdownMenuItem key={item.label} onClick={item.action}>
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile */}
        <button className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors">
          <User className="h-5 w-5" />
        </button>

        {/* Search People */}
        <button className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground hover:text-foreground transition-colors">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
