import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import terrestrialImg from "@/assets/species-terrestrial.jpg";
import aquaticImg from "@/assets/species-aquatic.jpg";
import treeImg from "@/assets/species-tree.jpg";
import flyingImg from "@/assets/species-flying.jpg";
import polarImg from "@/assets/species-polar.jpg";
import urbanImg from "@/assets/species-urban.jpg";

const SpeciesGuide = () => {
  const categories = [
    { name: "Terrestrial", image: terrestrialImg, description: "Land-dwelling mammals, reptiles, and insects" },
    { name: "Aquatic", image: aquaticImg, description: "Marine and freshwater species" },
    { name: "Tree Species", image: treeImg, description: "Animals that live in trees" },
    { name: "Flying", image: flyingImg, description: "Birds and flying mammals" },
    { name: "Polar & Arctic", image: polarImg, description: "Cold climate specialists" },
    { name: "Urban", image: urbanImg, description: "City-adapted wildlife" },
  ];

  return (
    <Layout>
      <div className="p-4 space-y-6">
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
