import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, Mic } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import reportBg from "@/assets/report-bg.jpg";
import mapPlaceholder from "@/assets/map-placeholder.jpg";

const Report = () => {
  const { toast } = useToast();
  const [species, setSpecies] = useState("");
  const [pathType, setPathType] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    setSpecies("");
    setPathType("");
    setNotes("");
    toast({
      title: "Report Submitted!",
      description: "Your sighting has been successfully recorded.",
    });
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${reportBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Report a Sighting</h1>
            <p className="text-muted-foreground">Help us track wildlife in your area</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Sighting Details</CardTitle>
              <CardDescription>Provide information about what you observed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="species">Species Name</Label>
                <Input 
                  id="species" 
                  placeholder="e.g., Red Fox, Brown Bear" 
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div className="h-48 rounded-lg overflow-hidden">
                  <img src={mapPlaceholder} alt="Map" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="path-type">Path Type</Label>
                <Select value={pathType} onValueChange={setPathType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select path type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urban">Urban</SelectItem>
                    <SelectItem value="naturalistic">Naturalistic</SelectItem>
                    <SelectItem value="marine">Marine</SelectItem>
                    <SelectItem value="mountain">Mountain</SelectItem>
                    <SelectItem value="not-tracked">Not Tracked</SelectItem>
                    <SelectItem value="extreme">Extreme Environment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="e.g., the animal's behavior, how many animals, habitat conditions..."
                  className="min-h-24"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </div>

            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-3">Don't know what you saw?</p>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Mic className="mr-2 h-4 w-4" />
                    Record Audio
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Audio
                  </Button>
                </div>
              </div>
            </div>

              <Button className="w-full" variant="nature" onClick={handleSubmit}>
                Submit Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Report;
