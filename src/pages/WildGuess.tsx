import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import meerkatImg from "@/assets/meerkat.jpg";
import mapPlaceholder from "@/assets/map-placeholder.jpg";
import gamesBg from "@/assets/games-bg.jpg";

const WildGuess = () => {
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

              <div className="h-80 rounded-lg overflow-hidden">
                <img 
                  src={mapPlaceholder} 
                  alt="World map" 
                  className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                />
              </div>

              <p className="text-sm text-muted-foreground text-center">
                Click on the map to make your guess
              </p>

              <Button variant="nature" className="w-full" size="lg">
                Submit Guess
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default WildGuess;
