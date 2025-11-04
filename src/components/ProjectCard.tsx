import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  emoji?: string;
}

const ProjectCard = ({ title, description, link, emoji = "🏆" }: ProjectCardProps) => {
  return (
    <Card className="transition-all hover:shadow-lg hover:border-foreground/20">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{emoji}</span>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base whitespace-pre-line">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
