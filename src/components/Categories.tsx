import { Shirt, Watch, Footprints, Sparkles } from "lucide-react";

const categories = [
  { name: "Women's Fashion", icon: Sparkles, color: "from-primary to-primary/80" },
  { name: "Men's Collection", icon: Shirt, color: "from-secondary to-secondary/80" },
  { name: "Accessories", icon: Watch, color: "from-primary/80 to-secondary/80" },
  { name: "Footwear", icon: Footprints, color: "from-secondary/80 to-primary/80" },
];

const Categories = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground lg:text-4xl">
          Shop by Category
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer border border-border"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
