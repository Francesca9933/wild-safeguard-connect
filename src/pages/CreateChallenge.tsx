import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Copy, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import gamesBg from "@/assets/games-bg.jpg";
import groupIcon from "@/assets/groupicon.jpg";
import quizIcon from "@/assets/quizicon.jpg";

const CreateChallenge = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [customChallenge, setCustomChallenge] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [showShare, setShowShare] = useState(false);
  const [showFriendsList, setShowFriendsList] = useState(false);

  const predefinedChallenges = [
    { id: "animals", text: "Be the first to find 5 different animals", image: groupIcon },
    { id: "footprint", text: "Do you think you can find a deer's footprint?", image: quizIcon },
    { id: "points", text: "Accumulate 200 points playing quiz!", image: groupIcon },
    { id: "guesses", text: "Collect 10 Wild Guesses", image: quizIcon },
  ];

  const handleShare = () => {
    setShowShare(true);
    toast({
      title: "Challenge Created!",
      description: "Share the ID or link with your friends.",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard.`,
    });
  };

  const challengeId = "WC" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const challengeLink = `https://wildcall.app/challenge/${challengeId}`;

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

        <div className="relative z-10 p-4 space-y-6 pb-24">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate("/games")}
            className="mb-2"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Create Challenge</h1>
            <p className="text-muted-foreground">Choose or create your own challenge</p>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-4">
              {predefinedChallenges.map((challenge) => (
                <Card
                  key={challenge.id}
                  className={`flex-shrink-0 w-72 shadow-strong cursor-pointer transition-all hover:scale-105 ${
                    selectedChallenge === challenge.id ? 'ring-2 ring-accent' : ''
                  }`}
                  onClick={() => setSelectedChallenge(challenge.id)}
                >
                  <div 
                    className="h-40 bg-cover bg-center rounded-t-lg relative"
                    style={{ backgroundImage: `url(${challenge.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-lg" />
                    <div className="absolute inset-0 border-2 border-accent/50 rounded-t-lg" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm font-semibold text-center">{challenge.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>

          <Card className={`shadow-medium backdrop-blur transition-all ${
            showShare ? 'bg-gradient-to-br from-accent/30 to-accent/10 border-accent' : 'bg-[#8B7355]/20 border-[#8B7355]/50'
          }`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className={showShare ? 'text-accent' : 'text-[#8B7355]'}>
                  Or... Invent your own challenge to share with your friends!
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="custom-challenge">Your Challenge</Label>
                <Textarea
                  id="custom-challenge"
                  placeholder="Describe your custom challenge..."
                  value={customChallenge}
                  onChange={(e) => setCustomChallenge(e.target.value)}
                  className="min-h-20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input 
                    id="end-date" 
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-time">End Time</Label>
                  <Input 
                    id="end-time" 
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>

              {!showShare && (
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setShowFriendsList(!showFriendsList)}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Invite Friends
                  </Button>
                  <Button 
                    variant="nature"
                    className="flex-1"
                    onClick={handleShare}
                  >
                    Share Challenge
                  </Button>
                </div>
              )}

              {showFriendsList && !showShare && (
                <Card className="bg-background/50">
                  <CardContent className="p-4 text-center text-muted-foreground">
                    No Friends in the List
                  </CardContent>
                </Card>
              )}

              {showShare && (
                <div className="space-y-3 animate-fade-in">
                  <div className="p-4 bg-background/80 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-xs text-muted-foreground">Challenge ID</Label>
                        <p className="font-mono font-semibold">{challengeId}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(challengeId, "ID")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-2">
                        <Label className="text-xs text-muted-foreground">Challenge Link</Label>
                        <p className="font-mono text-sm truncate">{challengeLink}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => copyToClipboard(challengeLink, "Link")}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default CreateChallenge;
