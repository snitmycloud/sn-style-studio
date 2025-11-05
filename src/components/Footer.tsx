import logo from "@/assets/logo.png";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 px-6 text-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={logo} alt="SN Collections" className="mb-4 h-16 w-16" />
            <p className="text-sm opacity-80">
              Your destination for fashion-forward clothing and accessories.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Customer Service</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#" className="hover:text-secondary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-primary hover:bg-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 SN Collections. All rights reserved. | Made with passion for fashion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
