import { Truck, Shield, Headphones, Tag } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50 - fast and reliable delivery to your doorstep",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure transactions with encrypted checkout process",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our dedicated team is always here to help you with any questions",
  },
  {
    icon: Tag,
    title: "Best Prices",
    description: "Competitive pricing with regular discounts and special offers",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground lg:text-4xl">
          Why Choose SN Collections?
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          We're committed to providing you with the best shopping experience
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
