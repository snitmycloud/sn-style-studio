import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const products = [
  { id: 1, name: "Summer Floral Dress", price: "$89.99", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop" },
  { id: 2, name: "Classic Denim Jacket", price: "$129.99", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
  { id: 3, name: "Elegant Evening Gown", price: "$199.99", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop" },
  { id: 4, name: "Casual Sneakers", price: "$79.99", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=500&fit=crop" },
];

const TrendingProducts = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-foreground lg:text-4xl">
          Trending Now
        </h2>
        <p className="mb-12 text-center text-muted-foreground">
          Discover our most popular items this season
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-card-foreground">{product.name}</h3>
                <p className="mb-4 text-xl font-bold text-secondary">{product.price}</p>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" size="sm">
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
