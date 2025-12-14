export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-white">
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
          <h4 className="font-semibold text-xl mb-2 text-gray-800">Website Design</h4>
          <p className="text-gray-600">
            Clean, modern and user-friendly designs tailored to your business.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
          <h4 className="font-semibold text-xl mb-2 text-gray-800">Frontend Development</h4>
          <p className="text-gray-600">
            Fast and responsive websites built using modern technologies.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-xl hover:shadow-2xl transition">
          <h4 className="font-semibold text-xl mb-2 text-gray-800">Maintenance & Support</h4>
          <p className="text-gray-600">
            Ongoing support to keep your website secure and updated.
          </p>
        </div>
      </div>
    </section>
  );
}
