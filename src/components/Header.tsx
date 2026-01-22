import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingCart, ChevronDown } from 'lucide-react'
import { useCartCount } from '../hooks/useCartCount'
import { Button } from './ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const cartCount = useCartCount()

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      dropdown: [
        { name: 'Apple', href: '/products' },
        { name: 'Dell', href: '/products' },
        { name: 'HP', href: '/products' },
        { name: 'Lenovo', href: '/products' },
        { name: 'Asus', href: '/products' },
        { name: 'Acer', href: '/products' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className=" w-24 h-24">
                <img src="./logo.png" alt="" className=' object-center' />
              </div>
              <span className=" text-3xl text-cyan-800 font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text uppercase">
                xnova
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-7">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div 
                    className="flex items-center space-x-1 cursor-pointer group text-cyan-800 "
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <Button variant="link" className="text-lg font-semibold text-cyan-800 ">
                      {item.name}
                    </Button>
                    <ChevronDown className="w-4 h-4 text-foreground/60 group-hover:text-foreground transition-colors duration-200" />
                  </div>
                ) : (
                  <Link to={item.href}>
                    <Button variant="link" className="text-lg font-semibold text-cyan-800 ">
                      {item.name}
                    </Button>
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-background rounded-lg shadow-lg border border-border/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2 ${
                      isDropdownOpen ? 'opacity-100 visible translate-y-0' : ''
                    }`}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded-md transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-cyan-700 hover:text-foreground transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/cart"
              
            >
              <Button variant="link" className="relative p-2 text-cyan-800 hover:text-foreground transition-colors duration-200">
              <ShoppingCart className=" w-10 h-10" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-cyan-900 text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
              </Button>
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
