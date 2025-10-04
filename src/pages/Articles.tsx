import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Conservation Efforts in North American Forests",
      source: "Wildlife Today",
      date: "2 days ago",
      category: "Conservation",
    },
    {
      title: "Understanding Bear Behavior in Mountain Regions",
      source: "Nature Science Journal",
      date: "5 days ago",
      category: "Safety",
    },
    {
      title: "Climate Change Impact on Arctic Species",
      source: "Environmental Research",
      date: "1 week ago",
      category: "Research",
    },
    {
      title: "Urban Wildlife Adaptation Patterns",
      source: "City Nature",
      date: "1 week ago",
      category: "Urban Wildlife",
    },
  ];

  return (
    <Layout>
      <div className="p-4 space-y-6">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold mb-2">Articles & Research</h1>
          <p className="text-muted-foreground">Stay informed about wildlife and conservation</p>
        </div>

        <div className="space-y-4">
          {articles.map((article, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2 flex items-start gap-2">
                      <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{article.title}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <span>{article.source}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline">{article.category}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-medium bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Enable notifications in settings to get alerts when new articles are published
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Articles;
