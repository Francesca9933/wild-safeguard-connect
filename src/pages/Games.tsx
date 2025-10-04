import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Brain, Trophy } from "lucide-react";

const Games = () => {
  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold mb-2">Wildlife Games</h1>
          <p className="text-muted-foreground">Learn while having fun</p>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Wild Guess
            </CardTitle>
            <CardDescription>Guess the animal's habitat on the map</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="h-12 w-12 text-primary opacity-50" />
            </div>
            <Button variant="nature" className="w-full">Start Game</Button>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-secondary" />
              Wild Quiz
            </CardTitle>
            <CardDescription>Test your wildlife knowledge</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-12 w-12 text-secondary opacity-50" />
            </div>
            <Button variant="sunrise" className="w-full">Start Quiz</Button>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              Wild Challenge
            </CardTitle>
            <CardDescription>Compete with friends in wildlife challenges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-12 w-12 text-accent opacity-50" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">Join Challenge</Button>
              <Button variant="outline" className="flex-1">Create Challenge</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Games;
