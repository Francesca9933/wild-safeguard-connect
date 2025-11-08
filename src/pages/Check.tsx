import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";
import checkBg from "@/assets/check-bg.jpg";
import dolomitesMap from "@/assets/dolomites-map.jpg";

const Check = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSighting, setShowSighting] = useState(false);

  const handleSearch = () => {
    if (searchQuery.toLowerCase().includes("dolomites")) {
      setShowSighting(true);
    }
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${checkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/65 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Check Paths</h1>
            <p className="text-muted-foreground">View wildlife sightings on trails</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Search Path</CardTitle>
              <CardDescription>Enter a path or trail name</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input 
                  placeholder="e.g., Dolomites, Mountain Trail, Forest Path" 
                  className="flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button onClick={handleSearch}>
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex gap-2 mt-4 flex-wrap">
                <Badge variant="outline" className="cursor-pointer">All</Badge>
                <Badge variant="outline" className="cursor-pointer border-success text-success">Safe</Badge>
                <Badge variant="outline" className="cursor-pointer border-danger text-danger">Dangerous</Badge>
                <Badge variant="outline" className="cursor-pointer border-warning text-warning">Threatened</Badge>
                <Badge variant="outline" className="cursor-pointer border-info text-info">Protected</Badge>
              </div>

              <div className="mt-4 h-96 rounded-lg relative overflow-hidden">
                <img src={dolomitesMap} alt="Dolomites map" className="w-full h-full object-cover" />
                {showSighting && (
                  <>
                    <div 
                      className="absolute top-1/3 left-1/2 h-4 w-4 rounded-full bg-danger cursor-pointer animate-pulse"
                      onClick={() => {}}
                    />
                    <div className="absolute top-1/3 left-1/2 ml-6 bg-card p-3 rounded-lg shadow-strong border">
                      <p className="font-semibold">Brown Bear</p>
                      <p className="text-sm text-muted-foreground">Sighting reported 2 days ago</p>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 flex gap-4 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-danger" />
                  <span>Dangerous</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  <span>Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-warning" />
                  <span>Threatened</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-info" />
                  <span>Protected</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Check;
