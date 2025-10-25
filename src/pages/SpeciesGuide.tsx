import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import terrestrial from "@/assets/terrestrial.jpg";
import aquatic from "@/assets/aquatic.jpg";
import tree from "@/assets/tree.jpg";
import flying from "@/assets/fly.jpg";
import polar from "@/assets/polar.jpg";
import urban from "@/assets/urban.jpg";

const SpeciesGuide = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: "Terrestrial", image: terrestrial, description: "Land-dwelling mammals, reptiles, and insects" },
    { name: "Aquatic", image: aquatic, description: "Marine and freshwater species" },
    { name: "Tree Species", image: tree, description: "Animals that live in trees" },
    { name: "Flying", image: flying, description: "Birds and flying mammals" },
    { name: "Polar & Arctic", image: polar, description: "Cold climate specialists" },
    { name: "Urban", image: urban, description: "City-adapted wildlife" },
  ];

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>
        
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold mb-2">Species Guide</h1>
          <p className="text-muted-foreground">Explore wildlife by category</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="shadow-medium overflow-hidden cursor-pointer hover:shadow-strong transition-all">
              <div className="relative">
                <img src={category.image} alt={category.name} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{category.name}</h3>
                    <p className="text-white/80 text-xs">{category.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SpeciesGuide;
