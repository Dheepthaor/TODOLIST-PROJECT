export default function Hero() {
  return (
    <section id="hero" className="text-center px-6 py-32 bg-gray-50">
      <h2 className="text-5xl font-bold mb-6 text-gray-800">
        Grow Your Business With a Powerful Online Presence
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        We help startups and small businesses build modern, responsive, and fast
        websites that convert visitors into customers.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
          View Services
        </button>
      </div>
    </section>
  );
}
