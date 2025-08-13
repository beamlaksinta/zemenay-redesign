
export default function About() {
  const team = [
    {
      name: "Freadam Abebe",
      role: "Co-founder & Product Manager",
      bio: "5+ years in product leadership.",
      img: "/images/team.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Tehetna Askal",
      role: "Co-founder & Project Manager",
      bio: "Expert in agile delivery.",
      img: "/images/tsi.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Engida",
      role: "Co-founder & Business Dev",
      bio: "Growth & partnerships specialist.",
      img: "/images/miki.png",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 space-y-12">
      <h1 className="text-4xl font-bold text-brand-600 text-center">Who We Are</h1>

      <div className="space-y-8 text-gray-700">
        {/* Our Story */}
        <article className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
          <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
          <p>
            From our beginnings as a passionate team with a vision for digital excellence, Zemenay has been driven by a commitment to innovation and collaboration. Our journey has been about building a company that places people at the center—whether they are team members, clients, or the communities we serve.
          </p>
          <p className="mt-2">
            We focus on creating technology that genuinely makes a difference in how businesses operate and connect with their customers. At Zemenay, we're excited about continuing to shape the digital future, one solution at a time.
          </p>
        </article>

        {/* Purpose, Principles, Mission */}
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold mb-2">Our Purpose</h2>
            <p>
              We create practical, scalable web and software applications that empower organizations to grow and operate more efficiently.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold mb-2">Core Principles</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Simplicity — intuitive and maintainable solutions</li>
              <li>Quality — robust, high-performing apps</li>
              <li>Integrity — transparent partnerships</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              Deliver accessible, modern digital products for businesses across Ethiopia and Africa, focusing on measurable business results.
            </p>
          </article>
        </div>

        {/* Meet the Team */}
        <article>
          <h2 className="text-3xl font-bold mb-8 text-center text-brand-600">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg text-center border border-blue-100 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 shadow-md"
                />
                <div className="text-xl font-semibold">{member.name}</div>
                <div className="text-sm text-brand-600 mb-2">{member.role}</div>


<p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-4 text-blue-500">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700 transition">
                    LinkedIn
                  </a>
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="hover:text-blue-700 transition">
                    Twitter
                  </a>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}