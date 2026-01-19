import { useState } from 'react'
import { X, Plus, Minus, ShoppingCart, CreditCard } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleCheckout = () => {
    alert('Thank you for your purchase! This would integrate with a payment gateway in a real application.')
    clearCart()
    setIsOpen(false)
  }

  return (
    <>
      {/* Cart Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
      >
        <ShoppingCart className="w-5 h-5" />
        {getTotalItems() > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {getTotalItems()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Cart Content */}
        <div className="absolute right-0 top-0 w-full max-w-md h-full bg-background border-l border-border/50 shadow-xl transform transition-transform duration-300 ease-in-out">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-lg font-semibold text-foreground">Shopping Cart</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-8 text-foreground/60">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-foreground/30" />
                  <p>Your cart is empty</p>
                  <p className="text-sm mt-2">Add some laptops to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 bg-card rounded-lg p-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                        <p className="text-sm text-foreground/60">{item.brand}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-lg font-bold text-foreground">
                            {formatPrice(item.price)}
                          </span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border/50 p-6 space-y-4">
                <div className="flex justify-between text-foreground">
                  <span className="text-foreground/60">Subtotal</span>
                  <span className="font-semibold">{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-sm text-foreground/60">
                  <span>Tax included</span>
                  <span>Shipping calculated at checkout</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={clearCart}
                    className="px-4 py-2 text-foreground/60 hover:text-foreground border border-border/50 rounded-lg font-medium transition-colors duration-200"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Checkout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
