import { useState } from 'react'
import { ArrowRight, Star, Shield, Truck, CreditCard } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { Button } from '@/components/ui/button'

export default function Home() {
  const [featuredProducts] = useState(() => 
    products.filter(product => product.rating >= 4.5).slice(0, 6)
  )
  const { addToCart } = useCart()

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Shopping',
      description: 'Your data is protected with industry-leading security'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Fast Delivery',
      description: 'Get your laptop delivered in 2-3 business days'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '30-day return policy for your peace of mind'
    }
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const getDiscountPercentage = (originalPrice: number, price: number) => {
    if (!originalPrice) return 0
    return Math.round(((originalPrice - price) / originalPrice) * 100)
  }

  return (
    <div className="min-h-screen">
      {/* First View Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600&auto=format&fit=crop&q=60")'
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-br from-background via-background/80 to-primary/10"></div>
        
        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Animated badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-full text-sm font-bold border-2 border-cyan-400/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
                Premium Quality Laptops
              </div>
              
              {/* Main headline with animated text */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-900 leading-tight">
                  <span className="block">Discover the Future</span>
                  <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-gradient-x">
                    of Computing
                  </span>
                </h1>
                <div className="flex space-x-2">
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full animate-pulse"></div>
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full animate-pulse delay-500"></div>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full animate-pulse delay-1000"></div>
                </div>
              </div>
              
              <p className="text-lg md:text-xl text-cyan-900 leading-relaxed max-w-2xl font-medium">
                Experience cutting-edge technology with our curated collection of premium laptops. 
                From powerful workstations to sleek ultraportables, find the perfect device that 
                matches your lifestyle and needs.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center ">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-foreground/60">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-foreground/60">Support Available</div>
                </div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button className="bg-primary  px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Shop Now
                </Button>
                <Button className="border-2 border-border px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:border-primary/50 transition-all duration-300">
                  Explore Brands
                </Button>
              </div> */}
            </div>
            
            <div className="relative">
              {/* Best Selling Laptop - MacBook Pro */}
              <div className="relative group cursor-pointer" onClick={() => window.location.href='/products/macbook'}>
                {/* Best Seller Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  🏆 BEST SELLER
                </div>

                {/* Animated border effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 via-blue-600 to-teal-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 scale-110 group-hover:scale-100"></div>
                 */}
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-cyan-50 via-slate-100 to-slate-200 p-8 rounded-3xl shadow-2xl border-2 border-none transform rotate-1 group-hover:rotate-0 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(14,165,233,0.3)]">
                  
                  {/* MacBook Pro image with premium display */}
                  <div className="relative mb-6">
                    <div className="w-full h-64 bg-gradient-to-br relative overflow-hidden">
                      {/* Premium screen with macOS interface */}
                      {/* <div className="absolute inset-4 bg-gradient-to-br from-cyan-400 via-blue-400 to-teal-400 rounded-lg opacity-30"></div> */}
                      {/* Screen reflection */}
                      {/* <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl"></div> */}
                      {/* Real MacBook Pro image */}
                      <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60" 
                        alt="MacBook Pro"
                        className="object-fit opacity-90 h-fit w-fit"
                      />
                    
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-900 mb-1">MacBook Pro</h3>
                        <p className="text-cyan-700 text-sm">The world's best laptop</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-900">From $1,999</div>
                        <div className="text-xs text-yellow-500 font-semibold tracking-wide">🏆 #1 BESTSELLER</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-cyan-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span>M1/M2 Pro Chip</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Retina XDR Display</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span>20hr Battery Life</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span>Pro Performance</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-xs text-cyan-600 border-t border-cyan-300/50 pt-2">
                      <span>⭐ 4.9/5 Rating</span>
                      <span>📦 10,000+ Sold</span>
                      <span>⚡ Fast Delivery</span>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <button className="w-full bg-gradient-to-r from-cyan-700 via-cyan-500 to-teal-500 text-white font-semibold py-3 px-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:via-blue-600 group-hover:to-teal-600">
                        🛒 Add to Cart
                      </button>
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-300 rounded-full opacity-0 group-hover:opacity-100 animate-bounce delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose XNOVA?</h2>
            <p className="text-foreground/60 mt-4 text-lg">We provide the best shopping experience for your next laptop</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-cyan-700/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Laptops</h2>
              <p className="text-foreground/60 mt-2">Handpicked for quality and performance</p>
            </div>
            <button className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200">
              View All Products
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-border/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Save {getDiscountPercentage(product.originalPrice, product.price)}%
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-semibold">
                      Out of Stock
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/60 font-medium">{product.brand}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-foreground/60">{product.rating}</span>
                      <span className="text-sm text-foreground/40">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  
                  <p className="text-cyan-800 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-lg font-bold text-foreground">
                        {formatPrice(product.price)}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-foreground/50 line-through">
                          {formatPrice(product.originalPrice)}
                        </div>
                      )}
                    </div>
                    <Button 
                      onClick={() => addToCart(product)}
                      className="bg-cyan-700 text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
