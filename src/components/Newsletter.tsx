import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
            <Mail className="h-8 w-8" />
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mb-8 text-muted-foreground">
          Subscribe to our newsletter for exclusive deals, style tips, and early access to new collections
        </p>
        <form className="flex flex-col gap-3 sm:flex-row sm:gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 border-border"
          />
          <Button type="submit" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
