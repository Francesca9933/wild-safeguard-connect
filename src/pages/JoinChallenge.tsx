import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import gamesBg from "@/assets/games-bg.jpg";

const JoinChallenge = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [groupId, setGroupId] = useState("");
  const [link, setLink] = useState("");

  const handleJoin = () => {
    if (!groupId && !link) {
      toast({
        title: "Missing Information",
        description: "Please enter either a Group ID or a Link.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Challenge Joined!",
      description: "You've successfully joined the challenge.",
    });
    setGroupId("");
    setLink("");
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
            <h1 className="text-3xl font-bold mb-2">Join Challenge</h1>
            <p className="text-muted-foreground">Enter a Group ID or Link to join</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Challenge Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="group-id">Group ID</Label>
                <Input 
                  id="group-id" 
                  placeholder="Enter Group ID" 
                  value={groupId}
                  onChange={(e) => setGroupId(e.target.value)}
                />
              </div>

              <div className="text-center text-sm text-muted-foreground">OR</div>

              <div className="space-y-2">
                <Label htmlFor="link">Challenge Link</Label>
                <Input 
                  id="link" 
                  placeholder="Paste challenge link here" 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>

              <Button 
                className="w-full bg-gradient-forest text-primary-foreground" 
                onClick={handleJoin}
              >
                JOIN
              </Button>
              
              <div className="text-center text-sm text-muted-foreground mt-4">
                You still have <span className="font-semibold text-primary">5/5</span> challenges this month
              </div>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default JoinChallenge;
