import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { useState, useMemo } from "react";
import Footer from "@/components/Footer";
import checkBg from "@/assets/check-bg.jpg";
import dolomitesMap from "@/assets/dolomites-map.jpg";

// Animal database with locations
const animalDatabase = {
  "Brown Bear": {
    countries: ["USA", "Canada", "Russia", "Italy", "Spain", "France", "Romania", "Greece", "Albania", "Japan", "China", "India", "Pakistan"],
    regions: {
      "Italy": ["Abruzzo", "Lazio", "Molise", "Trentino"],
      "USA": ["Alaska", "Montana", "Wyoming", "Idaho"],
      "Canada": ["British Columbia", "Alberta", "Yukon"],
      "Spain": ["Cantabria", "Asturias", "Pyrenees"],
      "France": ["Pyrenees"],
      "Romania": ["Carpathian Mountains"],
      "Greece": ["Pindus Mountains"],
      "Japan": ["Hokkaido"],
      "Russia": ["Kamchatka", "Siberia"],
      "China": ["Tibet", "Sichuan"],
      "India": ["Himalayan Region"],
      "Pakistan": ["Northern Areas"],
      "Albania": ["Albanian Alps"]
    }
  },
  "Polar Bear": {
    countries: ["Canada", "Russia", "Norway", "Greenland", "USA"],
    regions: {
      "Canada": ["Nunavut", "Manitoba", "Northwest Territories"],
      "Russia": ["Wrangel Island", "Franz Josef Land"],
      "Norway": ["Svalbard"],
      "USA": ["Alaska"],
      "Greenland": ["Northern Coast", "Eastern Coast"]
    }
  },
  "Asiatic Black Bear": {
    countries: ["Japan", "China", "India", "Pakistan", "Nepal", "Bhutan", "Vietnam", "Thailand"],
    regions: {
      "Japan": ["Honshu", "Shikoku"],
      "China": ["Sichuan", "Yunnan"],
      "India": ["Himalayas", "Northeast India"],
      "Pakistan": ["Northern Areas"],
      "Nepal": ["Himalayan Forests"],
      "Bhutan": ["Temperate Forests"],
      "Vietnam": ["Northern Highlands"],
      "Thailand": ["Northern Mountains"]
    }
  },
  "Wolf": {
    countries: ["USA", "Canada", "Russia", "Italy", "Spain", "France", "Germany", "Poland", "Romania"],
    regions: {
      "USA": ["Yellowstone", "Minnesota", "Alaska"],
      "Canada": ["British Columbia", "Ontario", "Quebec"],
      "Italy": ["Abruzzo", "Calabria", "Alps"],
      "Spain": ["Castilla y León", "Galicia"],
      "Germany": ["Saxony", "Brandenburg"],
      "Poland": ["Bieszczady", "Białowieża"],
      "Romania": ["Carpathians"],
      "Russia": ["Siberia", "Ural Mountains"],
      "France": ["Alps", "Vosges"]
    }
  },
  "Tiger": {
    countries: ["India", "Russia", "Nepal", "Bangladesh", "Bhutan", "China", "Indonesia", "Malaysia"],
    regions: {
      "India": ["Ranthambore", "Sundarbans", "Jim Corbett"],
      "Russia": ["Primorsky Krai"],
      "Nepal": ["Chitwan", "Bardia"],
      "Bangladesh": ["Sundarbans"],
      "Indonesia": ["Sumatra"],
      "Malaysia": ["Taman Negara"],
      "China": ["Northeast China"],
      "Bhutan": ["Royal Manas"]
    }
  },
  "Lion": {
    countries: ["Kenya", "Tanzania", "South Africa", "Botswana", "Zimbabwe", "Namibia", "India"],
    regions: {
      "Kenya": ["Maasai Mara", "Amboseli"],
      "Tanzania": ["Serengeti", "Ngorongoro"],
      "South Africa": ["Kruger", "Kgalagadi"],
      "Botswana": ["Okavango Delta", "Chobe"],
      "India": ["Gir Forest"],
      "Namibia": ["Etosha"],
      "Zimbabwe": ["Hwange"]
    }
  },
  "Elephant": {
    countries: ["Kenya", "Tanzania", "South Africa", "Botswana", "India", "Sri Lanka", "Thailand", "Myanmar"],
    regions: {
      "Kenya": ["Amboseli", "Tsavo"],
      "Tanzania": ["Tarangire", "Ruaha"],
      "South Africa": ["Kruger", "Addo"],
      "Botswana": ["Chobe", "Okavango"],
      "India": ["Kerala", "Karnataka", "Assam"],
      "Sri Lanka": ["Yala", "Udawalawe"],
      "Thailand": ["Khao Yai"],
      "Myanmar": ["Alaungdaw Kathapa"]
    }
  }
};

const animalNames = Object.keys(animalDatabase);

// Country positions on the planisphere (approximate percentages)
const countryPositions: Record<string, { x: number; y: number }> = {
  "USA": { x: 18, y: 38 },
  "Canada": { x: 18, y: 25 },
  "Russia": { x: 70, y: 25 },
  "Italy": { x: 51, y: 40 },
  "Spain": { x: 45, y: 42 },
  "France": { x: 48, y: 38 },
  "Romania": { x: 55, y: 38 },
  "Greece": { x: 54, y: 44 },
  "Albania": { x: 53, y: 43 },
  "Japan": { x: 85, y: 40 },
  "China": { x: 78, y: 42 },
  "India": { x: 72, y: 50 },
  "Pakistan": { x: 68, y: 45 },
  "Norway": { x: 50, y: 22 },
  "Greenland": { x: 35, y: 18 },
  "Nepal": { x: 73, y: 46 },
  "Bhutan": { x: 75, y: 46 },
  "Vietnam": { x: 80, y: 55 },
  "Thailand": { x: 78, y: 55 },
  "Germany": { x: 50, y: 35 },
  "Poland": { x: 52, y: 34 },
  "Kenya": { x: 58, y: 62 },
  "Tanzania": { x: 58, y: 66 },
  "South Africa": { x: 55, y: 78 },
  "Botswana": { x: 55, y: 72 },
  "Zimbabwe": { x: 56, y: 70 },
  "Namibia": { x: 52, y: 72 },
  "Sri Lanka": { x: 73, y: 58 },
  "Myanmar": { x: 77, y: 52 },
  "Indonesia": { x: 82, y: 65 },
  "Malaysia": { x: 80, y: 60 },
  "Bangladesh": { x: 75, y: 50 }
};

const Check = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSighting, setShowSighting] = useState(false);
  
  // Animal search state
  const [animalQuery, setAnimalQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    if (searchQuery.toLowerCase().includes("dolomites")) {
      setShowSighting(true);
    }
  };

  const handleClearPath = () => {
    setSearchQuery("");
    setShowSighting(false);
  };

  const handleClearAnimal = () => {
    setAnimalQuery("");
    setSelectedAnimal(null);
    setSelectedCountry(null);
    setShowSuggestions(false);
  };

  // Filter suggestions based on input
  const suggestions = useMemo(() => {
    if (!animalQuery.trim()) return [];
    return animalNames.filter(name => 
      name.toLowerCase().includes(animalQuery.toLowerCase())
    );
  }, [animalQuery]);

  const handleSelectAnimal = (animal: string) => {
    setAnimalQuery(animal);
    setSelectedAnimal(animal);
    setSelectedCountry(null);
    setShowSuggestions(false);
  };

  const handleAnimalInputChange = (value: string) => {
    setAnimalQuery(value);
    setShowSuggestions(true);
    setSelectedAnimal(null);
    setSelectedCountry(null);
    
    // Check if exact match
    const exactMatch = animalNames.find(name => 
      name.toLowerCase() === value.toLowerCase()
    );
    if (exactMatch) {
      setSelectedAnimal(exactMatch);
    }
  };

  const currentAnimalData = selectedAnimal ? animalDatabase[selectedAnimal as keyof typeof animalDatabase] : null;
  const currentRegions = selectedCountry && currentAnimalData 
    ? currentAnimalData.regions[selectedCountry as keyof typeof currentAnimalData.regions] 
    : null;

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

          {/* Path Search Card */}
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
                <Button variant="outline" onClick={handleClearPath}>
                  <X className="h-4 w-4" />
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

          {/* Animal Search Card */}
          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Search Animals</CardTitle>
              <CardDescription>Find where animals live around the world</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Input 
                      placeholder="e.g., Bear, Wolf, Tiger, Lion..." 
                      value={animalQuery}
                      onChange={(e) => handleAnimalInputChange(e.target.value)}
                      onFocus={() => setShowSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                    {showSuggestions && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-strong z-20 max-h-48 overflow-y-auto">
                        {suggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            className="w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            onMouseDown={() => handleSelectAnimal(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button onClick={() => handleSelectAnimal(animalQuery)}>
                    <Search className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" onClick={handleClearAnimal}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Planisphere Map */}
              <div className="mt-4 h-96 rounded-lg relative overflow-hidden bg-gradient-to-b from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-950">
                {/* Simple world map representation */}
                <svg viewBox="0 0 100 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Ocean background */}
                  <rect x="0" y="0" width="100" height="80" fill="currentColor" className="text-sky-300 dark:text-sky-800" />
                  
                  {/* Simplified continent shapes */}
                  {/* North America */}
                  <path d="M5,15 L25,12 L30,20 L28,35 L22,45 L15,42 L8,35 L5,25 Z" 
                        className={`transition-all duration-300 ${currentAnimalData?.countries.some(c => ["USA", "Canada"].includes(c)) ? "fill-success" : "fill-gray-300 dark:fill-gray-600"}`} />
                  
                  {/* South America */}
                  <path d="M20,48 L28,45 L32,55 L30,70 L22,75 L18,65 L20,55 Z" 
                        className="fill-gray-300 dark:fill-gray-600" />
                  
                  {/* Europe */}
                  <path d="M42,18 L55,15 L58,22 L56,32 L52,38 L45,42 L40,35 L42,25 Z" 
                        className={`transition-all duration-300 ${currentAnimalData?.countries.some(c => ["Italy", "Spain", "France", "Germany", "Poland", "Romania", "Greece", "Albania", "Norway"].includes(c)) ? "fill-success" : "fill-gray-300 dark:fill-gray-600"}`} />
                  
                  {/* Africa */}
                  <path d="M42,44 L58,42 L62,55 L58,72 L48,75 L42,65 L44,52 Z" 
                        className={`transition-all duration-300 ${currentAnimalData?.countries.some(c => ["Kenya", "Tanzania", "South Africa", "Botswana", "Zimbabwe", "Namibia"].includes(c)) ? "fill-success" : "fill-gray-300 dark:fill-gray-600"}`} />
                  
                  {/* Asia */}
                  <path d="M58,15 L90,12 L95,30 L88,45 L78,55 L68,50 L62,40 L58,30 Z" 
                        className={`transition-all duration-300 ${currentAnimalData?.countries.some(c => ["Russia", "China", "Japan", "India", "Pakistan", "Nepal", "Bhutan", "Vietnam", "Thailand", "Myanmar", "Bangladesh", "Indonesia", "Malaysia", "Sri Lanka"].includes(c)) ? "fill-success" : "fill-gray-300 dark:fill-gray-600"}`} />
                  
                  {/* Australia */}
                  <path d="M78,58 L92,56 L95,65 L90,72 L80,70 L78,64 Z" 
                        className="fill-gray-300 dark:fill-gray-600" />
                  
                  {/* Greenland */}
                  <path d="M32,8 L42,6 L44,15 L38,18 L32,14 Z" 
                        className={`transition-all duration-300 ${currentAnimalData?.countries.includes("Greenland") ? "fill-success" : "fill-gray-300 dark:fill-gray-600"}`} />
                </svg>

                {/* Country markers when animal is selected */}
                {currentAnimalData && currentAnimalData.countries.map((country) => {
                  const pos = countryPositions[country];
                  if (!pos) return null;
                  return (
                    <button
                      key={country}
                      className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 transform hover:scale-125 ${
                        selectedCountry === country 
                          ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" 
                          : "bg-success text-success-foreground hover:bg-success/80"
                      }`}
                      style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
                      onClick={() => setSelectedCountry(country === selectedCountry ? null : country)}
                    >
                      {country.slice(0, 2)}
                    </button>
                  );
                })}
              </div>

              {/* Selected Country Details */}
              {selectedCountry && currentRegions && (
                <div className="mt-4 p-4 bg-muted/50 rounded-lg border animate-in fade-in slide-in-from-top-2">
                  <h4 className="font-semibold text-lg mb-2">
                    {selectedAnimal} in {selectedCountry}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">Specific locations where this species can be found:</p>
                  <div className="flex flex-wrap gap-2">
                    {currentRegions.map((region) => (
                      <Badge key={region} variant="secondary" className="bg-success/20 text-success border-success/30">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Legend */}
              <div className="mt-4 flex gap-4 text-sm flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success" />
                  <span>Habitat Found</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-muted" />
                  <span>No Habitat</span>
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
