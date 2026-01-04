import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, Upload, Mic, Search, MapPin, X } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import reportBg from "@/assets/report-bg.jpg";
import mapPlaceholder from "@/assets/map-placeholder.jpg";

interface PawMarker {
  x: number;
  y: number;
  id: number;
}

interface UploadedFile {
  name: string;
  type: "photo" | "audio";
  id: number;
}

const Report = () => {
  const { toast } = useToast();
  const [species, setSpecies] = useState("");
  const [pathType, setPathType] = useState("");
  const [notes, setNotes] = useState("");
  const [pawMarkers, setPawMarkers] = useState<PawMarker[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const audioRecordInputRef = useRef<HTMLInputElement>(null);
  const audioInputRef = useRef<HTMLInputElement>(null);
  const dontKnowRef = useRef<HTMLDivElement>(null);

  const scrollToDontKnow = () => {
    dontKnowRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Captured image file:", file.name);
      const newFile: UploadedFile = { name: file.name, type: "photo", id: Date.now() };
      setUploadedFiles((prev) => [...prev, newFile]);
      toast({
        title: "Photo Captured!",
        description: `Ready to upload: ${file.name}`,
      });
      e.target.value = '';
    }
  };

  const HandlePhotoClick = () => {
    cameraInputRef.current?.click();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Uploaded image file:", file.name);
      const newFile: UploadedFile = { name: file.name, type: "photo", id: Date.now() };
      setUploadedFiles((prev) => [...prev, newFile]);
      toast({
        title: "Photo Uploaded!",
        description: `Ready to use: ${file.name}`,
      });
      e.target.value = '';
    }
  };

  const HandleUploadPhotoClick = () => {
    photoInputRef.current?.click();
  };

  const handleAudioRecord = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Recorded audio file:", file.name);
      const newFile: UploadedFile = { name: file.name, type: "audio", id: Date.now() };
      setUploadedFiles((prev) => [...prev, newFile]);
      toast({
        title: "Audio Recorded!",
        description: `Ready to use: ${file.name}`,
      });
      e.target.value = '';
    }
  };

  const HandleRecordAudioClick = () => {
    audioRecordInputRef.current?.click();
  };

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Uploaded audio file:", file.name);
      const newFile: UploadedFile = { name: file.name, type: "audio", id: Date.now() };
      setUploadedFiles((prev) => [...prev, newFile]);
      toast({
        title: "Audio Uploaded!",
        description: `Ready to use: ${file.name}`,
      });
      e.target.value = '';
    }
  };
  
  const HandleUploadAudioClick = () => {
    audioInputRef.current?.click();
  };

  const removeUploadedFile = (id: number) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Check if clicking near existing marker (within 5% threshold) to remove it
    const existingMarker = pawMarkers.find(
      (marker) => Math.abs(marker.x - x) < 5 && Math.abs(marker.y - y) < 5
    );
    
    if (existingMarker) {
      // Remove the marker if clicking on same spot
      setPawMarkers([]);
      toast({
        title: "Marker Removed",
        description: "Click anywhere on the map to place a new marker.",
      });
    } else {
      // Replace with single new marker
      setPawMarkers([{ x, y, id: Date.now() }]);
    }
  };

  const handleSubmit = () => {
    setSpecies("");
    setPathType("");
    setNotes("");
    setPawMarkers([]);
    setUploadedFiles([]);
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
          <div className="absolute inset-0 bg-background/65 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          {/* HIDDEN INPUT ELEMENT FOR CAMERA */}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            ref={cameraInputRef}
            className="hidden"
            onChange={handleImageCapture}
         />

          {/* HIDDEN INPUT ELEMENT FOR PHOTO UPLOAD (GALLERY) */}
          <input
            type="file"
            accept="image/*"
            ref={photoInputRef}
            className="hidden" 
            onChange={handlePhotoUpload}
         />

          {/* HIDDEN INPUT ELEMENT FOR AUDIO RECORD (VOICE MEMOS) */}
          <input
            type="file"
            accept="audio/*"
            capture="user"
            ref={audioRecordInputRef}
            className="hidden"
            onChange={handleAudioRecord}
         />

          {/* HIDDEN INPUT ELEMENT FOR AUDIO UPLOAD (VOICE MEMOS) */}
          <input
            type="file"
            accept="audio/*"
            ref={audioInputRef}
            className="hidden"
            onChange={handleAudioUpload}
         />
          
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
                <button
                  onClick={scrollToDontKnow}
                  className="text-sm text-primary underline hover:text-primary/80 transition-colors"
                >
                  Don't know what you saw?
                </button>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <div 
                  className="h-48 rounded-lg overflow-hidden relative cursor-crosshair"
                  onClick={handleMapClick}
                >
                  <img src={mapPlaceholder} alt="Map" className="w-full h-full object-cover" />
                  
                  {/* Search bar overlay */}
                  <div className="absolute top-2 left-2 right-2 z-10">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search for a place..."
                        className="pl-9 bg-background/95 backdrop-blur-sm shadow-md border-border/50"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </div>
                  
                  {pawMarkers.map((marker) => (
                    <div
                      key={marker.id}
                      className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                    >
                      <svg viewBox="0 0 24 24" fill="#FFD700" stroke="#8B4513" strokeWidth="1.5" className="w-full h-full drop-shadow-lg">
                        <path d="M12 18c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                        <circle cx="8" cy="10" r="2"/>
                        <circle cx="16" cy="10" r="2"/>
                        <circle cx="6" cy="15" r="1.5"/>
                        <circle cx="18" cy="15" r="1.5"/>
                      </svg>
                    </div>
                  ))}
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

            <div ref={dontKnowRef} className="pt-4 border-t">
              <p className="text-sm font-medium mb-3">Don't know what you saw?</p>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={HandlePhotoClick}>
                    <Camera className="mr-2 h-4 w-4" />
                    Take Photo
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={HandleUploadPhotoClick}>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" onClick={HandleRecordAudioClick}>
                    <Mic className="mr-2 h-4 w-4" />
                    Record Audio
                  </Button>
                  <Button variant="outline" className="flex-1" onClick={HandleUploadAudioClick}>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Audio
                  </Button>
                </div>
              </div>
            </div>

              {/* Uploaded Files Display */}
              {uploadedFiles.length > 0 && (
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-3">Uploaded Files</p>
                  <div className="flex flex-wrap gap-2">
                    {uploadedFiles.map((file, index) => (
                      <div
                        key={file.id}
                        className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-lg text-sm"
                      >
                        <span className="text-primary font-medium">
                          {file.type === "photo" ? "📷" : "🎵"} {file.type}{index + 1}
                        </span>
                        <button
                          onClick={() => removeUploadedFile(file.id)}
                          className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Button className="w-full" variant="nature" onClick={handleSubmit}>
                Submit Report
              </Button>
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
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Report;
