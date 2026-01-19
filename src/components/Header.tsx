import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import { useCartCount } from '../hooks/useCartCount'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const cartCount = useCartCount()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-linear-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent uppercase">
                xnova
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary uppercase ${
                  isActive(item.href)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground/70'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              className="relative p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-2 space-y-1 bg-background/50 backdrop-blur-sm border-t border-border/50">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive(item.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground/70 hover:bg-accent hover:text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
