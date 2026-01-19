import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                XNOVA
              </span>
            </div>
            <p className="text-foreground/60 mb-4 text-sm leading-relaxed">
              Your trusted destination for premium laptops. We offer the latest technology 
              from top brands at competitive prices with exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Home</a></li>
              <li><a href='/products' className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Products</a></li>
              <li><a href='/contact' className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Brands</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Apple</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Dell</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">HP</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Lenovo</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">ASUS</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-foreground transition-colors duration-200 text-sm">Acer</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-foreground/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Tech Street,  Yangon, CA 94025</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+959 79112233</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@xnova.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2026 xnova. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm transition-colors duration-200">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
