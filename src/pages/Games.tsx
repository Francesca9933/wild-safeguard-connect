import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import quiz from "@/assets/quizicon.jpj";
import guess from "@/assets/guessicon.jpj";
import group from "@/assets/groupicon.jpg";
import { Link } from "react-router-dom";
import gamesBg from "@/assets/games-bg.jpg";

const Games = () => {
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
          <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Wildlife Games</h1>
            <p className="text-muted-foreground">Learn while having fun</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Wild Guess
              </CardTitle>
              <CardDescription>Guess the animal's habitat on the map</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                <img
                  src={guess}
                  alt="icon for the game wild guess"
                  className="w-full h-64 object-contain rounded-lg bg-muted"
                />
              </div>
              <Link to="/wild-guess">
                <Button variant="nature" className="w-full">Start Game</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
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
              <Link to="/quiz-selection">
                <Button variant="sunrise" className="w-full">Start Quiz</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
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
      </div>
    </Layout>
  );
};

export default Games;
