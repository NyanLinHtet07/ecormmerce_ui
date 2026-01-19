import { useState, useMemo } from 'react'
import { Search, Grid, List, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { products, brands } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState('grid')
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [showFilters, setShowFilters] = useState(false)
  const { addToCart } = useCart()

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesBrand && matchesPrice
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedBrand, sortBy, priceRange])

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
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-linear-to-br from-background via-background to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Laptop Collection</h1>
            <p className="text-foreground/60 mt-4 text-lg">Find the perfect laptop for your needs</p>
            <div className="mt-6 text-foreground/60">
              {filteredProducts.length} laptops found
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  {showFilters ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search laptops..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Brand Filter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Brand</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        value=""
                        checked={!selectedBrand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-foreground/70">All Brands</span>
                    </label>
                    {brands.map((brand) => (
                      <label key={brand.id} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="radio"
                          name="brand"
                          value={brand.name}
                          checked={selectedBrand === brand.name}
                          onChange={(e) => setSelectedBrand(e.target.value)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="text-foreground/70">{brand.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-foreground/60">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="name">Name</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid/List */}
          <main className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-foreground/60 text-sm">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'laptop' : 'laptops'}
                  {selectedBrand && ` • ${selectedBrand}`}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary/10 text-primary' : 'text-foreground/60 hover:text-foreground'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary/10 text-primary' : 'text-foreground/60 hover:text-foreground'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-foreground/40 text-sm">No laptops found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedBrand('')
                    setPriceRange([0, 3000])
                  }}
                  className="mt-4 text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-4"
              }>
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className={viewMode === 'grid' 
                      ? "group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-border/50"
                      : "flex flex-col md:flex-row gap-4 bg-card rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
                    }
                  >
                    {/* Image */}
                    <div className={viewMode === 'grid' 
                      ? "relative overflow-hidden"
                      : "relative w-full md:w-48 h-48 md:h-auto overflow-hidden rounded-lg"
                    }>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

                    {/* Content */}
                    <div className={viewMode === 'grid' ? "p-6" : "flex-1 p-4 md:p-0"}>
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
                      
                      <p className={viewMode === 'grid' 
                        ? "text-foreground/60 text-sm mb-4 line-clamp-2"
                        : "text-foreground/60 text-sm mb-4"
                      }>
                        {product.description}
                      </p>

                      {/* Specifications (List view only) */}
                      {viewMode === 'list' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 text-sm text-foreground/60">
                          <div>
                            <span className="font-medium">Processor:</span>
                            <div>{product.specifications.processor}</div>
                          </div>
                          <div>
                            <span className="font-medium">RAM:</span>
                            <div>{product.specifications.ram}</div>
                          </div>
                          <div>
                            <span className="font-medium">Storage:</span>
                            <div>{product.specifications.storage}</div>
                          </div>
                          <div>
                            <span className="font-medium">Display:</span>
                            <div>{product.specifications.display}</div>
                          </div>
                        </div>
                      )}
                      
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
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
