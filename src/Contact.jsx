export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-white">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h3>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Full Name" />
        <input className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Email Address" />
        <textarea className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your Message" rows="4"></textarea>
        <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
