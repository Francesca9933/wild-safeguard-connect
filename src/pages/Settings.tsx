import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, User, Lock, Users, Activity, Globe } from "lucide-react";
import settingsBg from "@/assets/settings-bg.jpg";

const Settings = () => {
  const sections = [
    { icon: User, title: "Account", description: "Manage your profile and preferences" },
    { icon: Lock, title: "Privacy", description: "Control your privacy settings" },
    { icon: Users, title: "Friends List", description: "View and manage your connections" },
    { icon: Activity, title: "Your Activity", description: "See your sightings and contributions" },
    { icon: Globe, title: "Language and Notifications", description: "Customize app language and alerts" },
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
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your WildCall experience</p>
          </div>

          <div className="space-y-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="shadow-medium bg-card/95 backdrop-blur cursor-pointer hover:shadow-strong transition-all">
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
      </div>
    </Layout>
  );
};

export default Settings;
