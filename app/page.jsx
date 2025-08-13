

import Link from "next/link";

const caseStudies = [
  {
    title: "Berhanu Integrated Farm",
    desc: "WordPress e-commerce for premium spice farm — custom catalogs & ordering.",
    img: "/images/case-berhanu.jpg",
  },
  {
    title: "Chewata Awaqi Platform",
    desc: "Full-stack platform for gaming services and events using Next.js.",
    img: "/images/case-chewata.jpg",
  },
];

const testimonials = [
  {
    name: "Biniyam Masresha",
    role: "Co-founder at Hiyaw Animations",
    quote:
      "Working with this team has been an absolute game-changer for our business. Their innovative solutions have streamlined our processes and boosted our productivity tenfold!",
    img: "/images/hiyaw.png",
  },
  {
    name: "Dagmawi Bedilu",
    role: "CSO at Efuye Gela",
    quote:
      "I can't recommend their services enough. The level of expertise and dedication they bring to each project is unparalleled. Our ROI has skyrocketed since partnering with them.",
    img: "/images/dagi.png",
  },
  {
    name: "Kirubel Samuel",
    role: "Co-founder at Chewataawaqi",
    quote:
      "The customer support is top-notch. They're always available to answer questions and provide guidance. It's refreshing to work with a company that truly cares about its clients' success.",
    img: "/images/bin.png",
  },
];

const clientsLogos = [
  "/images/oip.webp",
  "/images/op.webp",
  "/images/eba.webp",
  "/images/chewata_awaqi.jpg",
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Hero */}
      <section className="bg-brand-600 text-white rounded-2xl p-12 md:p-20 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Zemenay Tech Solutions
        </h1>
        <p className="mt-2 text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
          Innovative web, software, and AI solutions — tailored and production-ready
          for businesses across Ethiopia and Africa. We transform ideas into scalable,
          high-performing digital products.
        </p>
      </section>

      {/* Why choose us */}
      <section className="bg-white rounded-xl p-10 shadow-sm border border-blue-100">
        <h2 className="text-3xl font-bold text-brand-600 text-center mb-8">
          Why Choose Zemenay?
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          We craft reliable, maintainable, and fast digital solutions that help
          organizations scale. Our focus is simplicity, performance, and meaningful
          integration of technology into your business workflow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-700">
              From AI tools to custom software, we bring fresh ideas that give you a competitive edge.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-700">
              Agile development and efficient processes mean your projects launch faster and smoother.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
            <p className="text-gray-700">
              We focus on long-term relationships. Your success is our priority, and we provide expert guidance every step.
            </p>
          </div>
        </div>
      </section>


{/* Clients & Partners */}
      <section className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
        <h3 className="text-2xl font-semibold text-brand-600 text-center mb-8">
          Clients & Partners
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
          {clientsLogos.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              <img
                src={src}
                alt={`Client ${i + 1}`}
                className="max-h-20 max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 rounded-xl p-8 shadow-sm border border-blue-100">
        <h3 className="text-2xl font-semibold text-brand-600 text-center mb-8">
          What Our Clients Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <div className="text-sm text-gray-600">
                <div className="font-semibold text-brand-600">{t.name}</div>
                <div>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 text-center">
        <h3 className="text-xl font-bold text-brand-600 mb-4">
          Ready to transform your business?
        </h3>
        <p className="text-gray-700 mb-6">
          Let's design and build the right solution for you.
        </p>
        <Link
          href="/contact"
          className="bg-brand-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-brand-700 transition"
        >
          Contact Sales
        </Link>
      </section>
    </div>
  );
}