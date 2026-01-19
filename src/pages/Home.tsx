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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                <Star className="w-5 h-5 mr-3" />
                Premium Quality Laptops
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Discover the Future of
                <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Computing</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                Experience cutting-edge technology with our curated collection of premium laptops. 
                From powerful workstations to sleek ultraportables, find the perfect device that 
                matches your lifestyle and needs.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
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
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent rounded-3xl transform rotate-3"></div>
              <div className="relative bg-card p-8 rounded-3xl shadow-2xl border border-border/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-linear-to-br from-primary/20 to-transparent p-6 rounded-xl border border-border/30">
                    <h3 className="font-bold text-foreground text-lg mb-2">MacBook Pro</h3>
                    <p className="text-foreground/60 text-sm mb-4">Professional-grade performance</p>
                    <div className="text-primary font-semibold">From $1,999</div>
                  </div>
                  <div className="bg-linear-to-br from-secondary/20 to-transparent p-6 rounded-xl border border-border/30">
                    <h3 className="font-bold text-foreground text-lg mb-2">XPS 13</h3>
                    <p className="text-foreground/60 text-sm mb-4">Ultra-portable design</p>
                    <div className="text-primary font-semibold">From $1,199</div>
                  </div>
                  <div className="bg-linear-to-br from-accent/20 to-transparent p-6 rounded-xl border border-border/30">
                    <h3 className="font-bold text-foreground text-lg mb-2">ZenBook Pro</h3>
                    <p className="text-foreground/60 text-sm mb-4">Creative professional choice</p>
                    <div className="text-primary font-semibold">From $1,599</div>
                  </div>
                  <div className="bg-linear-to-br from-muted/20 to-transparent p-6 rounded-xl border border-border/30">
                    <h3 className="font-bold text-foreground text-lg mb-2">Swift 3</h3>
                    <p className="text-foreground/60 text-sm mb-4">Budget-friendly power</p>
                    <div className="text-primary font-semibold">From $599</div>
                  </div>
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
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-200">
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
                  
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-2">
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
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

                {/* Hero Section */}
      <section className="relative bg-linear-to-br from-background via-background to-primary/5 min-h-[60vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Premium Quality Laptops
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Find Your Perfect
                <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Laptop</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                Discover the latest laptops from top brands. Whether you're a student, 
                professional, or gamer, we have the perfect device for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 transform hover:scale-105">
                  Shop Now
                </Button>
                <Button className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-200">
                  Explore Brands
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent rounded-2xl"></div>
              <div className="relative bg-card p-8 rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-linear-to-br from-primary/20 to-transparent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground">MacBook Pro</h3>
                    <p className="text-foreground/60 text-sm">From $1,999</p>
                  </div>
                  <div className="bg-linear-to-br from-secondary/20 to-transparent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground">XPS 13</h3>
                    <p className="text-foreground/60 text-sm">From $1,199</p>
                  </div>
                  <div className="bg-linear-to-br from-accent/20 to-transparent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground">ZenBook Pro</h3>
                    <p className="text-foreground/60 text-sm">From $1,599</p>
                  </div>
                  <div className="bg-linear-to-br from-muted/20 to-transparent p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground">Swift 3</h3>
                    <p className="text-foreground/60 text-sm">From $599</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>
    </div>
  )
}
