import { useState } from 'react'
import { ArrowLeft, Plus, Minus, Trash2, CreditCard, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleCheckout = async () => {
    setIsProcessing(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Thank you for your purchase! Your order has been placed successfully.')
      clearCart()
    } catch (error) {
      alert('There was an error processing your order. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Your Cart</h1>
              <p className="text-foreground/60 mt-4 text-lg">Your shopping cart is empty</p>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-foreground/60 mb-8 max-w-md mx-auto">
              Looks like you haven't added any laptops to your cart yet. Start shopping to find your perfect device!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products">
                  <Button variant="default">
                    Browse Products
                  </Button>
                
              </Link>
              <Link
                to="/">
                  <Button variant="secondary">
                Return Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Your Cart</h1>
            <p className="text-foreground/60 mt-4 text-lg">{getTotalItems()} items in your cart</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
                  <div className="flex items-center space-x-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-foreground/60 mb-4">{item.brand}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-foreground/60">Quantity:</span>
                          <div className="flex items-center border border-border/50 rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-accent transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 text-foreground font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-accent transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          <div className="text-sm text-foreground/60">
                            {formatPrice(item.price)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/products"
              >
                <Button variant="default">
                <ArrowLeft className="w-4 h-4" />
                <span>Continue Shopping</span>
                </Button>
              </Link>
              <Button variant="outline"
                onClick={clearCart}
                
              >
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 sticky top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-foreground">
                  <span>Subtotal ({getTotalItems()} items)</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-sm">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-foreground/60 text-sm">
                  <span>Tax</span>
                  <span>Included</span>
                </div>
                <div className="border-t border-border/50 pt-4">
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className="w-full flex items-center justify-center space-x-3 bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>{isProcessing ? 'Processing...' : 'Proceed to Checkout'}</span>
                </button>
                
                <p className="text-xs text-foreground/60 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>

              {/* Security Badges */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center space-x-4 text-xs text-foreground/60">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
