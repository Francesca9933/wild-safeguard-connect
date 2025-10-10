import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import homeBg from "@/assets/home-bg.jpg";
import terrestrial from "@/assets/terrestrial.jpg";
import aquatic from "@/assets/aquatic.jpg";

const Home = () => {
  return (
    <Layout>
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
            <Link to="/report">
              <Button variant="nature" className="w-full h-24 flex flex-col gap-2">
                <MapPin className="h-6 w-6" />
                <span>Report Sighting</span>
              </Button>
            </Link>
            <Link to="/articles">
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

          {/* Premium Plans */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Premium Plans</CardTitle>
              <CardDescription>
                All proceeds support wildlife research and conservation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border-2 border-muted rounded-lg bg-muted/20">
                <h3 className="font-bold mb-1 text-lg">Root - 1 Month</h3>
                <p className="text-2xl font-bold text-primary mb-2">$7</p>
                <p className="text-sm text-muted-foreground mb-3">Essential features for casual explorers</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">Select Plan</Button>
              </div>
              <div className="p-4 border-2 border-primary rounded-lg bg-primary/5">
                <h3 className="font-bold mb-1 text-lg flex items-center gap-2">
                  Oak - 6 Months
                </h3>
                <p className="text-2xl font-bold text-primary mb-2">$35</p>
                <p className="text-sm text-muted-foreground mb-3">Best value for regular adventurers</p>
                <Button variant="nature" className="w-full">Select Plan</Button>
              </div>
              <div className="p-4 border-2 border-accent rounded-lg bg-accent/10 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Crown className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold mb-1 text-lg">Forest - 1 Year</h3>
                <p className="text-2xl font-bold text-accent mb-2">$55</p>
                <p className="text-sm text-muted-foreground mb-3">Ultimate experience for dedicated naturalists</p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Select Plan</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
