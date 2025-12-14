export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">NexaWeb</h1>
     <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
  <li><a href="#hero" className="hover:text-blue-600 cursor-pointer">Home</a></li>
  <li><a href="#services" className="hover:text-blue-600 cursor-pointer">Services</a></li>
  <li><a href="#about" className="hover:text-blue-600 cursor-pointer">About</a></li>
  <li><a href="#contact" className="hover:text-blue-600 cursor-pointer">Contact</a></li>
</ul>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Quote
      </button>
    </nav>
  );
}
