import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, FileText, Leaf, Crown, TreePine } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <div className="relative h-64 bg-gradient-forest overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLS41IDM5LjVoNDEiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-primary-foreground">
            <Leaf className="h-16 w-16 mb-4 animate-pulse-slow" />
            <h1 className="text-4xl font-bold mb-2">WildCall</h1>
            <p className="text-lg opacity-90">Safeguarding animals and humans together</p>
          </div>
        </div>

        <div className="p-4 space-y-6">
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

          {/* Recent Reports */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Recent Sightings Nearby
              </CardTitle>
              <CardDescription>Latest wildlife observations in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Red Fox</p>
                  <p className="text-sm text-muted-foreground">Urban Trail - 2 hours ago</p>
                </div>
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">Safe</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Great Horned Owl</p>
                  <p className="text-sm text-muted-foreground">Forest Path - 5 hours ago</p>
                </div>
                <Badge variant="outline" className="bg-info/10 text-info border-info/20">Protected</Badge>
              </div>
              <div className="flex items-start justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">Brown Bear</p>
                  <p className="text-sm text-muted-foreground">Mountain Trail - Yesterday</p>
                </div>
                <Badge variant="outline" className="bg-danger/10 text-danger border-danger/20">Dangerous</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Species Guide Preview */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Species Guide
              </CardTitle>
              <CardDescription>Learn about wildlife in your region</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <TreePine className="h-12 w-12 text-primary" />
                  <Badge className="absolute top-2 right-2 bg-success/90">Safe</Badge>
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-secondary" />
                  <Badge className="absolute top-2 right-2 bg-warning/90">Threatened</Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View Full Guide
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plans */}
          <Card className="shadow-medium bg-gradient-to-br from-accent/5 to-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-accent" />
                Premium Plans
              </CardTitle>
              <CardDescription>Support wildlife conservation and unlock exclusive features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Root</h3>
                  <span className="text-lg font-bold text-primary">$4.99/mo</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Real-time notifications</li>
                  <li>• Basic research insights</li>
                </ul>
              </div>
              <div className="p-4 bg-card rounded-lg border-2 border-primary shadow-soft">
                <Badge className="mb-2 bg-primary">Most Popular</Badge>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Oak</h3>
                  <span className="text-lg font-bold text-primary">$24.99/6mo</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All Root features</li>
                  <li>• Expert interactions</li>
                  <li>• Exclusive discounts</li>
                </ul>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">Forest</h3>
                  <span className="text-lg font-bold text-primary">$44.99/yr</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• All Oak features</li>
                  <li>• Offline maps</li>
                  <li>• Full research access</li>
                </ul>
              </div>
              <p className="text-xs text-center text-muted-foreground italic pt-2">
                All proceeds support wildlife conservation and research initiatives
              </p>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center space-y-4 py-8 px-4 bg-muted/30 rounded-lg">
            <h3 className="font-semibold text-lg">Our Mission</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              WildCall connects hikers, travelers, and nature enthusiasts worldwide to create a safer environment for both humans and wildlife through real-time reporting and education.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="#" className="text-primary hover:underline">About</a>
              <a href="#" className="text-primary hover:underline">Privacy</a>
              <a href="#" className="text-primary hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
