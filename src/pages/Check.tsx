import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const Check = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold mb-2">Check Paths</h1>
          <p className="text-muted-foreground">Find wildlife sightings on trails</p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Search Location</CardTitle>
            <CardDescription>Enter a path name or select an area on the map</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="path-search">Path or Trail Name</Label>
              <div className="flex gap-2">
                <Input id="path-search" placeholder="e.g., Green Mountain Trail" />
                <Button variant="nature" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Filter by Type</Label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">All Sightings</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-success/10 border-success/20">Safe</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-danger/10 border-danger/20">Dangerous</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-warning/10 border-warning/20">Threatened</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-info/10 border-info/20">Protected</Badge>
              </div>
            </div>

            <div className="h-64 bg-muted rounded-lg flex items-center justify-center mt-4">
              <p className="text-muted-foreground">Map with colored markers will appear here</p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span>Safe Animals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger"></div>
                <span>Dangerous Animals</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <span>Threatened Species</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-info"></div>
                <span>Protected Species</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Check;
