import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted to-accent py-24 px-6 lg:py-32">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="SN Collections Logo" className="h-32 w-32 animate-fade-in" />
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-6xl animate-fade-in">
          Redefine Your Style with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SN Collections</span>
        </h1>
        <p className="mb-10 text-lg text-muted-foreground lg:text-xl animate-fade-in">
          Discover the latest trends, curated looks, and exclusive collections that express who you are
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg">
            Shop Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Explore Collections
          </Button>
        </div>
      </div>
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>
    </section>
  );
};

export default Hero;
