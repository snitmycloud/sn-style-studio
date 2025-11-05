import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "SN Collections has completely transformed my wardrobe! The quality and style are unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    review: "Best online shopping experience I've had. Fast delivery and amazing customer service!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    review: "Love the variety and the prices are so reasonable. My go-to store for all occasions!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-accent/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground lg:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Join thousands of satisfied customers who love SN Collections
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6 shadow-sm border-border">
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="mb-4 italic text-muted-foreground">"{testimonial.review}"</p>
              <p className="font-semibold text-foreground">- {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
