import { Button } from "@/components/ui/button";
import { Percent } from "lucide-react";

const SpecialOffer = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/90 to-secondary p-12 text-center text-white shadow-2xl">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Percent className="h-10 w-10" />
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Limited Time Offer!</h2>
            <p className="mb-8 text-lg opacity-95">
              Get up to 50% OFF on selected items. Don't miss out on our biggest sale of the season!
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              Shop Sale Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
