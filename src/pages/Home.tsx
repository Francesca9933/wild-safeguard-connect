import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Tutorial from "@/components/Tutorial";
import Footer from "@/components/Footer";
import homeBg from "@/assets/home-bg.jpg";
import terrestrial from "@/assets/terrestrial.jpg";
import aquatic from "@/assets/aquatic.jpg";

const Home = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const checkTutorial = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.user_metadata?.show_tutorial) {
        setShowTutorial(true);
      }
    };
    checkTutorial();
  }, []);

  const handleTutorialComplete = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase.auth.updateUser({
        data: { show_tutorial: false }
      });
    }
    setShowTutorial(false);
  };
  return (
    <Layout>
      {showTutorial && <Tutorial onComplete={handleTutorialComplete} />}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${homeBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-4xl font-bold mb-2">Welcome to WildCall</h1>
            <p className="text-lg text-muted-foreground">Protecting wildlife, one sighting at a time</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Link to="/report" data-tutorial="report-top">
              <Button variant="nature" className="w-full h-24 flex flex-col gap-2">
                <MapPin className="h-6 w-6" />
                <span>Report Sighting</span>
              </Button>
            </Link>
            <Link to="/articles" data-tutorial="articles-top">
              <Button variant="sunrise" className="w-full h-24 flex flex-col gap-2">
                <FileText className="h-6 w-6" />
                <span>Read Articles</span>
              </Button>
            </Link>
          </div>

          {/* Species Guide */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Species Guide</CardTitle>
              <CardDescription>Learn about wildlife around the world</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <img src={terrestrial} alt="Terrestrial species" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-bold text-lg">Terrestrial</span>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden group cursor-pointer">
                  <img src={aquatic} alt="Aquatic species" className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-bold text-lg">Aquatic</span>
                  </div>
                </div>
              </div>
              <Link to="/species-guide">
                <Button variant="outline" className="w-full mt-4">View Full Guide</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Sightings */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Recent Sightings</CardTitle>
              <CardDescription>Latest wildlife observations from the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Mountain Goat</p>
                  <p className="text-sm text-muted-foreground">Rocky Mountains, Colorado</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Bald Eagle</p>
                  <p className="text-sm text-muted-foreground">Lake Superior, Minnesota</p>
                  <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Gray Wolf</p>
                  <p className="text-sm text-muted-foreground">Yellowstone, Wyoming</p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Downloads */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Adventure Essentials</CardTitle>
              <CardDescription>Prepare for your next expedition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30">
                <h3 className="font-bold text-xl mb-2">Going on a New Adventure?</h3>
                <p className="text-muted-foreground mb-4">
                  Download detailed, offline maps for your next trip
                </p>
                <p className="text-2xl font-bold text-primary mb-4">Starting from $3</p>
                <Button variant="nature" className="w-full">Browse Maps</Button>
              </div>
            </CardContent>
          </Card>

          {/* Premium Plans */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Premium Plans</CardTitle>
              <CardDescription>
                Or choose our all-inclusive plan for unlimited access
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border-2 border-success rounded-lg bg-success/10 relative">
                <div className="absolute top-2 right-2">
                  <span className="text-xs font-bold bg-success text-success-foreground px-2 py-1 rounded">CURRENT PLAN</span>
                </div>
                <h3 className="font-bold mb-1 text-lg">Puppy - Free</h3>
                <p className="text-2xl font-bold text-success mb-2">$0</p>
                <ul className="text-sm text-muted-foreground mb-3 space-y-1">
                  <li>• Create paths</li>
                  <li>• Navigator mode</li>
                  <li>• Reports in your available maps</li>
                  <li>• 5 challenges per month</li>
                  <li>• And more</li>
                </ul>
              </div>
              <div className="p-4 border-2 border-accent rounded-lg bg-gradient-to-br from-amber-100/20 to-yellow-100/20 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Crown className="h-6 w-6 text-amber-500" />
                </div>
                <h3 className="font-bold mb-1 text-lg">Lion - Premium</h3>
                <p className="text-2xl font-bold text-amber-600 mb-2">$36/year</p>
                <p className="text-xs text-muted-foreground mb-3">Only $3/month</p>
                <ul className="text-sm text-muted-foreground mb-3 space-y-1">
                  <li>• No-limit maps</li>
                  <li>• Real-time notifications</li>
                  <li>• Offline maps</li>
                  <li>• No challenge limit</li>
                  <li>• And more</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700">Upgrade to Lion</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Home;
