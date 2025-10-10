import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import wolf from "@/assets/wolf.jpg";
import gamesBg from "@/assets/games-bg.jpg";

const QuizQuestion = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === "Wolf") {
      toast({
        title: "Correct!",
        description: "That's a wolf footprint!",
      });
    } else {
      toast({
        title: "Not quite",
        description: "Try again! Look at the claw marks.",
        variant: "destructive",
      });
    }
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
            <h1 className="text-2xl font-bold mb-2">Question 1 of 10</h1>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardContent className="pt-6">
              <div className="mb-6">
                <img 
                  src={wolf} 
                  alt="Animal footprint" 
                  className="w-full h-64 object-contain rounded-lg bg-muted"
                />
              </div>

              <h2 className="text-xl font-bold mb-6 text-center">
                What animal does this footprint belong to?
              </h2>

              <div className="space-y-3">
                {["Wolf", "Dog", "Elephant", "Bear"].map((option) => (
                  <Button
                    key={option}
                    variant={selectedAnswer === option ? "default" : "outline"}
                    className="w-full text-left justify-start h-auto py-4 text-lg"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              <Button variant="nature" className="w-full mt-6" size="lg">
                Next Question
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default QuizQuestion;
