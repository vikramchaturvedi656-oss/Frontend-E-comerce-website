function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        ShopZone
      </h1>

      {/* Links */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Products</li>
        <li className="hover:text-blue-600 cursor-pointer">About</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Cart */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Cart 🛒
      </button>
    </nav>
  )
}

export default Navbar