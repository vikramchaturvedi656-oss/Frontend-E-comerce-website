function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-600 text-sm">{product.desc}</p>
        <p className="text-blue-600 font-semibold mt-2">₹{product.price}</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard