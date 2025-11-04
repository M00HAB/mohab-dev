import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-5xl mx-auto">
          <section className="mb-8">
            <h1 className="text-3xl font-bold">All Projects</h1>
            <p className="text-muted-foreground mt-2">A selection of my work across embedded systems, automotive, and software.</p>
          </section>

          <section>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                emoji="🚗"
                title="Car Infotainment System"
                description={"Developed Qt-based infotainment system with media player, GPS, and control interface. \nCustomized Linux image with Yocto Project integrating device drivers."}
                link="https://github.com/M00HAB/infotainment-system.git"
              />
              <ProjectCard
                emoji="🎮"
                title="Brick Breaker Game"
                description={"Designed an object-oriented hierarchy for the game components.\nImplemented the hierarchy in Java utilizing MVC architectural pattern"}
                link="https://github.com/M00HAB/BrickBreaker"
              />
              
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;

