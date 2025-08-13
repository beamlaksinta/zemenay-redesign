
  export default function Product() {
  const products = [
    {
      title: "Chewata Awaqi",
      description:
        "A cutting-edge gaming service platform that connects companies with professional gaming services for events and corporate entertainment. Built with Next.js for optimal performance and scalability.",
      features: [
        "Next.js & React",
        "API Development",
        "Database Architecture",
        "Gaming Integration"
      ],
      image: "/images/image.png" // replace with your actual image path
    },
    {
      title: "Berhanu Integrated Farm",
      description:
        "A comprehensive e-commerce platform for a premium spice farming business. Built with WordPress and Elementor Pro, featuring custom product catalogs, online ordering system, and farm-to-table storytelling.",
      features: [
        "WordPress & Elementor Pro",
        "Custom Design & Branding",
        "E-commerce Integration"
      ],
      image: "/images/image1.png" // replace with your actual image path
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8 text-brand-600 text-center">Our Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow hover:shadow-lg transition border border-blue-100 overflow-hidden"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-brand-600 mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 mb-4">{p.description}</p>
              <ul className="list-disc list-inside text-gray-600">
                {p.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}