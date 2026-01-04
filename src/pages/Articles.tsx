import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import articlesBg from "@/assets/articles-bg.jpg";

const Articles = () => {
  return (
    <Layout>
      <div className="relative min-h-screen">
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${articlesBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-background/65 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 p-4 space-y-6">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold mb-2">Wildlife Articles</h1>
            <p className="text-muted-foreground">Stay informed about wildlife and conservation</p>
          </div>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Enable notifications in settings to get alerts when new articles are published
              </p>
              <Link to="/language-notifications">
                <Button variant="outline" className="w-full">Enable Notifications</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Conservation Today</CardTitle>
              <CardDescription>Latest wildlife conservation news</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Discover groundbreaking research and stories from wildlife conservationists around the world.
              </p>
              <Button variant="nature" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Article
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Habitat Protection</CardTitle>
              <CardDescription>Understanding ecosystem preservation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Learn about critical efforts to protect natural habitats and the species that depend on them.
              </p>
              <Button variant="nature" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Article
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-medium bg-card/95 backdrop-blur">
            <CardHeader>
              <CardTitle>Species Spotlight</CardTitle>
              <CardDescription>In-depth animal profiles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">
                Explore detailed profiles of fascinating species and their unique behaviors.
              </p>
              <Button variant="nature" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Read Article
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Articles;
