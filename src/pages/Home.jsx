import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />
      <Hero />

      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Home