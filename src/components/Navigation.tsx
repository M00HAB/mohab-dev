import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Monitor, Check, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      const offset = 80; // Height of fixed navbar + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Navigation links component to avoid code duplication
  const NavLinks = ({ isMobile = false, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) => {
    // Common link class names
    const linkClasses = (isActive: boolean) => cn(
      "text-sm font-medium transition-colors hover:text-foreground",
      isActive ? "text-foreground" : "text-muted-foreground",
      isMobile ? "block py-2 w-full text-left" : ""
    );

    return (
      <div className={cn(
        isMobile ? 'flex flex-col space-y-2' : 'hidden md:flex items-center gap-6'
      )}>
        {/* Home link - shown only when not on home page */}
        {!isHomePage && (
          <Link
            to="/"
            onClick={onLinkClick}
            className={linkClasses(false)}
          >
            Home
          </Link>
        )}

        {/* Section links - shown on home page */}
        {isHomePage && sectionLinks.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              handleSectionClick(item.id);
              onLinkClick?.();
            }}
            className={cn(linkClasses(false), 'text-left')}
          >
            {item.label}
          </button>
        ))}
        
        {/* Always show Projects link */}
        <Link
          to="/projects"
          onClick={onLinkClick}
          className={linkClasses(location.pathname === "/projects")}
        >
          Projects
        </Link>

        {/* Always show Blog link */}
        <Link
          to="/blog"
          onClick={onLinkClick}
          className={linkClasses(location.pathname === "/blog" || location.pathname.startsWith("/blog/"))}
        >
          Blog
        </Link>
      </div>
    );
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            Mohab
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLinks />
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                  {theme === "light" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                  {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>System</span>
                  {theme === "system" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                  {theme === "light" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                  {theme === "dark" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="mr-2 h-4 w-4" />
                  <span>System</span>
                  {theme === "system" && <Check className="ml-auto h-4 w-4" />}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-sm border-t border-border transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[80vh] py-4" : "max-h-0 py-0"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2 max-h-[calc(80vh-2rem)] overflow-y-auto pr-2">
            <NavLinks 
              isMobile 
              onLinkClick={() => setIsMobileMenuOpen(false)} 
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
