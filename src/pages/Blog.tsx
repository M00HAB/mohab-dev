import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

// Sample articles - you can replace these with your own
const articles = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    description: "A comprehensive guide to building modern web applications with React and TypeScript.",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Web Development"],
    slug: "getting-started-react-typescript",
  },
  {
    id: 2,
    title: "Building Scalable Applications",
    description: "Best practices and patterns for building applications that scale.",
    date: "2024-03-10",
    tags: ["Architecture", "Scalability", "Best Practices"],
    slug: "building-scalable-applications",
  },
  {
    id: 3,
    title: "Modern CSS Techniques",
    description: "Exploring modern CSS features like Grid, Flexbox, and custom properties.",
    date: "2024-03-05",
    tags: ["CSS", "Design", "Frontend"],
    slug: "modern-css-techniques",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-muted-foreground">
              Thoughts, tutorials, and insights about software development.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`}>
                <Card className="transition-all hover:shadow-lg hover:border-foreground/20">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                    <CardDescription className="text-base">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
