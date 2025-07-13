import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingCart, Menu, X, Star, Zap, Eye, Filter, Search, ChevronDown, Grid, List, ArrowUpDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EnhancedStore() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [priceRange, setPriceRange] = useState([0, 4000]);
  const [minRating, setMinRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { name: 'All', icon: '🌐', count: 30 },
    { name: 'AR Devices', icon: '👓', count: 8 },
    { name: 'VR Headsets', icon: '🥽', count: 6 },
    { name: 'Accessories', icon: '🎮', count: 13 },
    { name: 'Software', icon: '💻', count: 3 }
  ];

  const products = [
    { id: 1, name: 'AR Glasses Pro', price: 299, category: 'AR Devices', image: '/ar.png', rating: 4.8, features: ['Ultra-light', 'HD Display'], brand: 'TechVision' },
    { id: 2, name: 'VR Headset Elite', price: 499, category: 'VR Headsets', image: '/vr.png', rating: 4.9, features: ['120Hz', 'Wireless'], brand: 'VirtaCore' },
    { id: 3, name: 'Haptic Gloves', price: 159, category: 'Accessories', image: '/gloves.png', rating: 4.6, features: ['Force Feedback', 'Wireless'], brand: 'TouchTech' },
    { id: 4, name: 'XR Kit Premium', price: 389, category: 'AR Devices', image: '/xr.png', rating: 4.7, features: ['Mixed Reality', 'AI Powered'], brand: 'XRPro' },
    { id: 5, name: 'Mixed Reality Lens', price: 349, category: 'AR Devices', image: '/mrlens.png', rating: 4.5, features: ['8K Resolution', 'Eye Tracking'], brand: 'LensMax' },
    { id: 6, name: 'Omni VR Treadmill', price: 999, category: 'Accessories', image: '/treadmill.png', rating: 4.8, features: ['360° Movement', 'Safety Ring'], brand: 'OmniMove' },
    { id: 7, name: 'Meta Quest Pro', price: 999, category: 'VR Headsets', image: '/metaquest.png', rating: 4.7, features: ['Mixed Reality', 'Eye Tracking'], brand: 'Meta' },
    { id: 8, name: 'Varjo XR-4', price: 1999, category: 'VR Headsets', image: '/varjo.png', rating: 4.9, features: ['Professional', '4K Per Eye'], brand: 'Varjo' },
    { id: 9, name: 'Leap Motion Sensor', price: 89, category: 'Accessories', image: '/leap.png', rating: 4.4, features: ['Hand Tracking', 'USB-C'], brand: 'Leap' },
    { id: 10, name: 'Smart AR Contacts', price: 599, category: 'AR Devices', image: '/arcontacts.png', rating: 4.6, features: ['Invisible Tech', 'All Day'], brand: 'SmartLens' },
    { id: 11, name: 'VR Glove Pro', price: 249, category: 'Accessories', image: '/vrglove.png', rating: 4.5, features: ['Finger Tracking', 'Haptic'], brand: 'GloveTech' },
    { id: 12, name: 'HoloLens 2', price: 3500, category: 'AR Devices', image: '/hololens2.png', rating: 4.8, features: ['Enterprise', 'Holographic'], brand: 'Microsoft' },
    { id: 13, name: 'PSVR 2', price: 549, category: 'VR Headsets', image: '/psvr2.png', rating: 4.7, features: ['PlayStation', 'HDR'], brand: 'Sony' },
    { id: 14, name: 'AR Drone Controller', price: 199, category: 'Accessories', image: '/ardrone.png', rating: 4.3, features: ['AR Integration', 'Long Range'], brand: 'DroneAR' },
    { id: 15, name: 'Virtual Studio Pro', price: 1299, category: 'Software', image: '/vstudio.png', rating: 4.6, features: ['Professional', 'Real-time'], brand: 'StudioVR' },
    { id: 16, name: 'Eye Tracking Kit', price: 149, category: 'Accessories', image: '/eyetracker.png', rating: 4.4, features: ['Precision', 'Low Latency'], brand: 'EyeTech' },
    { id: 17, name: '360 Camera Rig', price: 799, category: 'Accessories', image: '/360cam.png', rating: 4.5, features: ['8K Recording', 'Live Stream'], brand: 'Cam360' },
    { id: 18, name: 'XR Suit', price: 2499, category: 'Accessories', image: '/xrsuit.png', rating: 4.7, features: ['Full Body', 'Haptic Feedback'], brand: 'SuitXR' },
    { id: 19, name: 'AR Navigation Glass', price: 325, category: 'AR Devices', image: '/arnav.png', rating: 4.4, features: ['GPS AR', 'Voice Control'], brand: 'NavAR' },
    { id: 20, name: 'Virtual Education Kit', price: 799, category: 'Software', image: '/vedu.png', rating: 4.6, features: ['Interactive', 'Multi-user'], brand: 'EduVR' },
    { id: 21, name: 'Oculus Rift S', price: 399, category: 'VR Headsets', image: '/rift.png', rating: 4.5, features: ['Inside-out', 'Touch Controllers'], brand: 'Meta' },
    { id: 22, name: 'Hand Tracker Pro', price: 149, category: 'Accessories', image: '/handtracker.png', rating: 4.3, features: ['Gesture Control', 'ML Powered'], brand: 'HandTech' },
    { id: 23, name: 'MR Glass Explorer', price: 999, category: 'AR Devices', image: '/mrglass.png', rating: 4.6, features: ['Outdoor Ready', 'Long Battery'], brand: 'MRTech' },
    { id: 24, name: 'Unity XR Toolkit', price: 99, category: 'Software', image: '/unityxr.png', rating: 4.7, features: ['Cross Platform', 'Easy Setup'], brand: 'Unity' },
    { id: 25, name: 'Meta Touch Controllers', price: 199, category: 'Accessories', image: '/metacontrols.png', rating: 4.5, features: ['Haptic', 'Ergonomic'], brand: 'Meta' },
    { id: 26, name: 'HTC Vive Cosmos', price: 749, category: 'VR Headsets', image: '/vivecosmos.png', rating: 4.4, features: ['Modular', 'Inside-out'], brand: 'HTC' },
    { id: 27, name: 'AR Developer Kit', price: 499, category: 'Software', image: '/ardevkit.png', rating: 4.5, features: ['SDK Included', 'Cloud Tools'], brand: 'DevAR' },
    { id: 28, name: 'Virtual Keyboard', price: 89, category: 'Accessories', image: '/vkeyboard.png', rating: 4.2, features: ['Projection', 'Multi-language'], brand: 'KeyVR' },
    { id: 29, name: 'AR Helmet', price: 950, category: 'AR Devices', image: '/arhelmet.png', rating: 4.6, features: ['Industrial', 'Rugged'], brand: 'HelmetAR' },
    { id: 30, name: 'VR Theater System', price: 1199, category: 'Accessories', image: '/vrtheater.png', rating: 4.7, features: ['Cinema Quality', 'Surround Audio'], brand: 'TheaterVR' },
  ];

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      
      return matchesCategory && matchesSearch && matchesPrice && matchesRating;
    });

    // Sort products
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'price':
          aValue = a.price;
          bValue = b.price;
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'name':
        default:
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [products, selectedCategory, searchQuery, priceRange, minRating, sortBy, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, priceRange, minRating, sortBy, sortOrder]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, { ...product, cartId: Date.now() + Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCartItems((prev) => prev.filter(item => item.cartId !== cartId));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalItems = cartItems.length;

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animation: 'float 20s infinite linear'
          }}
        />
      ))}
    </div>
  );

  const GlowingOrb = ({ size = 'w-32 h-32', color = 'from-purple-500 to-cyan-500' }) => (
    <div className={`${size} rounded-full bg-gradient-to-r ${color} opacity-20 blur-xl animate-pulse absolute`} />
  );

  const Pagination = () => (
    <div className="flex items-center justify-between mt-8 px-4 py-3 bg-gray-900/50 backdrop-blur-xl rounded-xl border border-purple-500/20">
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <span>Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredAndSortedProducts.length)} of {filteredAndSortedProducts.length} products</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNum = Math.max(1, Math.min(currentPage - 2, totalPages - 4)) + i;
          if (pageNum > totalPages) return null;
          
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                currentPage === pageNum
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                  : 'bg-purple-600/20 hover:bg-purple-600/30 text-gray-300'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black" />
        <FloatingParticles />
        <GlowingOrb size="w-96 h-96" color="from-purple-600/10 to-cyan-600/10" />
        <GlowingOrb size="w-64 h-64" color="from-cyan-500/10 to-purple-500/10" />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(0px) translateX(20px); }
          75% { transform: translateY(-10px) translateX(10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4); }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slideUp 0.6s ease-out; }
      `}</style>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                NEXUS AR/VR
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Immersive Tech Store</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-all duration-200 animate-glow"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-purple-600/20 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              STEP INTO THE METAVERSE
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience reality beyond imagination with our premium collection of AR/VR technology
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.8/5 from 10,000+ customers</span>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filters Bar */}
        <div className="mb-8 bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="lg:col-span-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Sort */}
            <div className="lg:col-span-2 relative">
              <select
                value={`${sortBy}-${sortOrder}`}
                onChange={(e) => {
                  const [field, order] = e.target.value.split('-');
                  setSortBy(field);
                  setSortOrder(order);
                }}
                className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500 appearance-none"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
                <option value="rating-desc">Rating High-Low</option>
                <option value="rating-asc">Rating Low-High</option>
              </select>
              <ArrowUpDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="lg:col-span-2 flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-purple-600/20 text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-purple-600/20 text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Items per page */}
            <div className="lg:col-span-2">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="w-full px-3 py-2 bg-purple-600/10 border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500"
              >
                <option value={6}>6 per page</option>
                <option value={12}>12 per page</option>
                <option value={24}>24 per page</option>
                <option value={48}>48 per page</option>
              </select>
            </div>

            {/* Filter Toggle */}
            <div className="lg:col-span-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {isFilterOpen && (
            <div className="mt-6 pt-6 border-t border-purple-500/20 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <div className="flex space-x-2">
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="flex-1"
                  />
                  <input
                    type="range"
                    min="0"
                    max="4000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="flex-1"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">
                  Minimum Rating: {minRating}★
                </label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              {/* Category Pills */}
              <div>
                <label className="block text-sm font-medium text-purple-400 mb-2">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => setSelectedCategory(cat.name)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        selectedCategory === cat.name
                          ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                          : 'bg-purple-600/20 text-gray-300 hover:bg-purple-600/30'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                </h3>
                <p className="text-gray-400">{filteredAndSortedProducts.length} products found</p>
              </div>
            </div>
            
            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {paginatedProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl animate-slide-up ${
                    viewMode === 'list' ? 'flex items-center p-4' : 'transform hover:scale-105'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-24 h-24 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                        viewMode === 'list' ? 'w-full h-full rounded-lg' : 'w-full h-48'
                      }`}
                    />
                    {viewMode === 'grid' && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-xs text-white font-medium">{product.rating}</span>
                          </div>
                        </div>
                        {hoveredProduct === product.id && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex flex-wrap gap-1">
                              {product.features.map((feature, idx) => (
                                <span
                                  key={idx}
                                  className="bg-purple-600/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  
                  <div className={viewMode === 'list' ? 'flex-1 ml-4' : 'p-6'}>
                    <div className={viewMode === 'list' ? 'flex items-center justify-between' : ''}>
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {product.name}
                        </h4>
                        {viewMode === 'list' && (
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-sm text-gray-400">{product.rating}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{product.brand}</span>
                          </div>
                        )}
                        <div className={`flex items-center justify-between mb-4 ${viewMode === 'list' ? 'mb-2' : ''}`}>
                          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            ${product.price}
                          </span>
                          <span className="text-sm text-gray-400 bg-purple-500/10 px-2 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                      </div>
                      <div className={viewMode === 'list' ? 'ml-4' : ''}>
                        <button
                          onClick={() => addToCart(product)}
                          className={`bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                            viewMode === 'list' ? 'px-6' : 'w-full px-4'
                          }`}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <Pagination />
          </div>

          {/* Cart Sidebar */}
          <div className={`lg:col-span-1 ${isCartOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-purple-400 flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart ({totalItems})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="lg:hidden p-1 hover:bg-purple-600/20 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-gray-400">Your cart is empty</p>
                  <p className="text-sm text-gray-500 mt-2">Add some amazing AR/VR gear!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-96 overflow-y-auto space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={item.cartId}
                        className="bg-purple-600/10 rounded-xl p-4 border border-purple-500/20"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-medium text-white text-sm leading-tight">
                            {item.name}
                          </h5>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-gray-400 hover:text-red-400 ml-2"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-purple-400 font-bold">${item.price}</p>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-purple-500/20 pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg font-semibold text-white">Total:</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        ${totalPrice}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow">
                      Checkout Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}