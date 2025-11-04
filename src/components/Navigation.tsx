import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isHomePage = location.pathname === "/";

  const sectionLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "certifications", label: "Certifications" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Mohab
          </Link>
          
          <div className="flex items-center gap-6">
            {isHomePage ? (
              <>
                {sectionLinks.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </button>
                ))}
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </>
            )}
            
            <Link
              to="/projects"
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === "/projects"
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === "/blog" || location.pathname.startsWith("/blog/")
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-9 w-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
