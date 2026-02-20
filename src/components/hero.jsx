function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-8 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Welcome to ShopZone
      </h1>

      <p className="max-w-xl mx-auto text-lg mb-8">
        Discover the best products at unbeatable prices.
        Premium quality, fast delivery, and trusted service.
      </p>

      <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
        Shop Now
      </button>
    </div>
  )
}

export default Hero