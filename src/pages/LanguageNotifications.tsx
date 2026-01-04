import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "@/components/Footer";
import settingsBg from "@/assets/settings-bg.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageNotifications = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("english");
  const [notifications, setNotifications] = useState({
    newArticles: true,
    sightingsInArea: true,
    sightingsInMaps: false,
    wildChallenges: true,
    messages: true,
  });

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${settingsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
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
              <h1 className="text-3xl font-bold mb-2">Language & Notifications</h1>
              <p className="text-muted-foreground">Customize your preferences</p>
            </div>
            <div className="w-10" />
          </div>

          {/* Language Selection */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Language</CardTitle>
              <CardDescription>Choose your preferred language</CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="italian">Italiano</SelectItem>
                  <SelectItem value="spanish">Español</SelectItem>
                  <SelectItem value="french">Français</SelectItem>
                  <SelectItem value="german">Deutsch</SelectItem>
                  <SelectItem value="portuguese">Português</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="new-articles" className="flex-1">
                  New articles
                </Label>
                <Switch
                  id="new-articles"
                  checked={notifications.newArticles}
                  onCheckedChange={() => handleNotificationChange("newArticles")}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="sightings-area" className="flex-1">
                  Sightings in your area
                </Label>
                <Switch
                  id="sightings-area"
                  checked={notifications.sightingsInArea}
                  onCheckedChange={() => handleNotificationChange("sightingsInArea")}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="sightings-maps" className="flex-1">
                  Sightings in your downloaded maps
                </Label>
                <Switch
                  id="sightings-maps"
                  checked={notifications.sightingsInMaps}
                  onCheckedChange={() => handleNotificationChange("sightingsInMaps")}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="wild-challenges" className="flex-1">
                  Wild Challenges
                </Label>
                <Switch
                  id="wild-challenges"
                  checked={notifications.wildChallenges}
                  onCheckedChange={() => handleNotificationChange("wildChallenges")}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="messages" className="flex-1">
                  Messages
                </Label>
                <Switch
                  id="messages"
                  checked={notifications.messages}
                  onCheckedChange={() => handleNotificationChange("messages")}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default LanguageNotifications;
