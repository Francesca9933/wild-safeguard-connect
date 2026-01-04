import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import gamesBg from "@/assets/games-bg.jpg";

const QuizSelection = () => {
  const navigate = useNavigate();

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
            <h1 className="text-3xl font-bold mb-2">Select Quiz</h1>
            <p className="text-muted-foreground">Choose your categories and difficulty</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Species Categories</CardTitle>
              <CardDescription>Select one or more categories</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Terrestrial", "Aquatic", "Tree Species", "Flying", "Polar & Arctic", "Urban"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <Label htmlFor={category}>{category}</Label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Geographic Area</CardTitle>
              <CardDescription>Select regions to include</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Europe", "Asia", "South America", "North America", "Oceania", "Africa", "Antarctica"].map((region) => (
                <div key={region} className="flex items-center space-x-2">
                  <Checkbox id={region} />
                  <Label htmlFor={region}>{region}</Label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Difficulty Level</CardTitle>
              <CardDescription>Choose your challenge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {["Kids", "Adults", "Easy", "Medium", "Hard", "Wild"].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox id={level} />
                  <Label htmlFor={level}>{level}</Label>
                </div>
              ))}
            </CardContent>
          </Card>

          <Link to="/quiz-question">
            <Button variant="nature" className="w-full" size="lg">
              Start Quiz
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default QuizSelection;
