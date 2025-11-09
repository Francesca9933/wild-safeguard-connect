import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import Footer from "@/components/Footer";
import meerkatImg from "@/assets/meerkat.jpg";
import gamesBg from "@/assets/games-bg.jpg";

const WildGuess = () => {
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showResult, setShowResult] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMarkerPosition({ x, y });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - mapOffset.x, y: e.clientY - mapOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setMapOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSubmitGuess = () => {
    setShowResult(true);
  };

  const handleContinue = () => {
    setShowResult(false);
    setMarkerPosition(null);
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${gamesBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/65 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/games")}
            className="mb-2"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Wild Guess</h1>
            <p className="text-muted-foreground">Where does this animal live?</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardContent className="pt-6 space-y-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={meerkatImg} 
                  alt="Meerkat" 
                  className="w-full h-64 object-cover"
                />
              </div>

              <h2 className="text-xl font-bold text-center">
                Guess the habitat of this animal!
              </h2>

              <div 
                ref={mapContainerRef}
                className="h-80 rounded-lg overflow-hidden relative bg-blue-100 cursor-move"
                onClick={handleMapClick}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <div 
                  style={{
                    transform: `translate(${mapOffset.x}px, ${mapOffset.y}px)`,
                    width: '200%',
                    height: '200%',
                  }}
                  className="relative"
                >
                  <svg viewBox="0 0 1000 500" className="w-full h-full">
                    {/* Simple world map outline */}
                    <rect fill="#a7c7e7" width="1000" height="500" />
                    {/* Continents - simplified shapes */}
                    <path d="M 100 150 L 200 140 L 250 180 L 230 220 L 150 210 Z" fill="#90EE90" />
                    <path d="M 300 100 L 500 90 L 600 150 L 580 200 L 350 180 Z" fill="#90EE90" />
                    <path d="M 550 250 L 650 240 L 700 280 L 680 350 L 560 340 Z" fill="#90EE90" />
                    <path d="M 750 150 L 900 140 L 950 200 L 920 280 L 780 260 Z" fill="#90EE90" />
                    <path d="M 150 300 L 300 290 L 350 380 L 280 420 L 180 380 Z" fill="#90EE90" />
                    <path d="M 100 350 L 200 340 L 220 400 L 160 430 L 110 400 Z" fill="#90EE90" />
                  </svg>
                </div>
                {markerPosition && (
                  <div
                    className="absolute w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${markerPosition.x}px`,
                      top: `${markerPosition.y}px`,
                    }}
                  />
                )}
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Click on the map to make your guess (drag to move the map)
              </p>

              <Button variant="nature" className="w-full" size="lg" onClick={handleSubmitGuess}>
                Submit Guess
              </Button>
            </CardContent>
          </Card>
        </div>

        {showResult && (
          <div 
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleContinue}
          >
            <Card className="max-w-lg w-full shadow-elegant bg-card/95 backdrop-blur animate-in fade-in zoom-in duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4">
                  <img 
                    src={meerkatImg} 
                    alt="Meerkat" 
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">Wrong guess 😢</h3>
                    <p className="text-sm text-muted-foreground">
                      The meerkat (Suricata suricatta) or suricate is a small mongoose found in southern Africa. Meerkats are highly social, and form packs of two to 30 individuals each that occupy home ranges around 5 km² in area.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">Tap to continue</p>
              </CardContent>
            </Card>
          </div>
        )}

        <Footer />
      </div>
    </Layout>
  );
};

export default WildGuess;
