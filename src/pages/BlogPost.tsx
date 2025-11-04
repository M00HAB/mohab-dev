import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Sample article content - you can expand this with your actual articles
const articleData: Record<string, {
  title: string;
  date: string;
  tags: string[];
  content: string;
}> = {
  "getting-started-react-typescript": {
    title: "Getting Started with React and TypeScript",
    date: "2024-03-15",
    tags: ["React", "TypeScript", "Web Development"],
    content: `
# Getting Started with React and TypeScript

TypeScript has become an essential tool for modern React development. In this article, we'll explore how to set up and use TypeScript effectively in your React projects.

## Why TypeScript?

TypeScript provides several benefits:
- Type safety and better IDE support
- Catch errors during development
- Improved code documentation
- Better refactoring capabilities

## Setting Up

To create a new React project with TypeScript, you can use Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

## Conclusion

TypeScript significantly improves the React development experience. Start using it today!
    `,
  },
  "building-scalable-applications": {
    title: "Building Scalable Applications",
    date: "2024-03-10",
    tags: ["Architecture", "Scalability", "Best Practices"],
    content: `
# Building Scalable Applications

Scalability is crucial for modern applications. Let's explore key principles and patterns.

## Key Principles

1. **Modular Architecture**: Break your application into independent modules
2. **Database Optimization**: Use proper indexing and query optimization
3. **Caching Strategies**: Implement effective caching layers
4. **Load Balancing**: Distribute traffic across multiple servers

## Design Patterns

Consider using these patterns:
- Microservices architecture
- Event-driven design
- CQRS (Command Query Responsibility Segregation)

## Conclusion

Building for scale requires careful planning and the right architectural decisions.
    `,
  },
  "modern-css-techniques": {
    title: "Modern CSS Techniques",
    date: "2024-03-05",
    tags: ["CSS", "Design", "Frontend"],
    content: `
# Modern CSS Techniques

CSS has evolved significantly. Let's explore modern features that make styling easier.

## CSS Grid

CSS Grid provides a powerful layout system:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
\`\`\`

## Custom Properties

CSS variables make theming simple:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --spacing: 1rem;
}
\`\`\`

## Conclusion

Modern CSS features provide powerful tools for creating responsive, maintainable designs.
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? articleData[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-6 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <article className="max-w-3xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }: any) {
                  return (
                    <code 
                      className={`${className} bg-muted px-1.5 py-0.5 rounded text-sm font-mono`} 
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre({ children, ...props }: any) {
                  return (
                    <pre 
                      className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono border"
                      {...props}
                    >
                      {children}
                    </pre>
                  );
                },
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
