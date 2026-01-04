import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, User, Lock, Users, Activity, Globe, LogOut, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import settingsBg from "@/assets/settings-bg.jpg";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/auth");
  };

  const sections = [
    { icon: User, title: "Account", description: "Manage your profile and preferences", onClick: () => {} },
    { icon: Lock, title: "Privacy", description: "Control your privacy settings", onClick: () => {} },
    { icon: Users, title: "Friends List", description: "View and manage your connections", onClick: () => {} },
    { icon: Activity, title: "Your Activity", description: "See your sightings and contributions", onClick: () => {} },
    { icon: Globe, title: "Language and Notifications", description: "Customize app language and alerts", onClick: () => navigate("/language-notifications") },
    { icon: LogOut, title: "Exit", description: "Log-out from your account", onClick: handleLogout },
  ];

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${settingsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/65 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-card/50 rounded-full transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex-1 text-center">
              <h1 className="text-3xl font-bold mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your WildCall experience</p>
            </div>
            <div className="w-10" />
          </div>

          <div className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="shadow-medium bg-card/95 backdrop-blur cursor-pointer hover:shadow-strong transition-all" onClick={section.onClick}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{section.title}</CardTitle>
                          <CardDescription className="text-sm">{section.description}</CardDescription>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Settings;
