import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Website Development",
      desc:
        "Custom-built websites optimized for performance, scalability, and exceptional user experience.",
    },
    {
      title: "WordPress Development with Elementor Pro",
      desc:
        "Responsive, visually stunning websites powered by WordPress and crafted with Elementor Pro's flexibility.",
    },
    {
      title: "SEO Management",
      desc:
        "Tailored SEO strategies designed to improve your search engine rankings and drive targeted traffic.",
    },
    {
      title: "Website Maintenance",
      desc:
        "Ongoing support to keep your site secure, updated, and performing at its best.",
    },
    {
      title: "Education & Training",
      desc:
        "Empowering aspiring developers with free, hands-on training programs covering frontend, backend, and mobile development.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold mb-12 text-indigo-700 text-center">
        Comprehensive Technology Solutions
      </h1>

      {/* Intro paragraph */}
      <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
        We deliver transformative digital solutions that seamlessly integrate into your business processes. From web development
        and software engineering to AI-driven strategies, we help you scale efficiently and confidently.
      </p>

      {/* Services grid */}
      <div className="grid gap-10 md:grid-cols-2">
        {services.map(({ title, desc }, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition flex flex-col gap-4"
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{title}</h2>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>

      {/* Internship Program Section */}
      <section className="bg-indigo-50 rounded-xl p-10 shadow-md border border-indigo-200 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center mb-4">
          Internship Program
        </h2>

        <p className="text-gray-800 leading-relaxed text-center max-w-xl mx-auto">
          We have proudly welcomed and mentored over <strong>200 talented interns</strong>. These individuals are not just interns—they are creators, innovators, and future leaders. Our comprehensive mentorship program includes weekly recap sessions and real-world project experience to ensure professional and personal growth.
        </p>

        <p className="text-gray-700 leading-relaxed text-center max-w-xl mx-auto">
          Designed to nurture creativity, foster collaboration, and empower young professionals, our program equips interns with the skills needed to excel in the tech industry. Their achievements inspire our own growth.
        </p>
      </section>
    </section>
  );
}