import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Community",
      price: "Free",
      websiteFeatures: [
        "Basic website template",
      ],
      supportServices: [
        "Community support",
        "Documentation access",
        "Limited features",
      ],
      cta: { text: "Get Started", href: "https://docs.google.com/forms/d/e/your-form-id/viewform" },
      highlight: false,
    },
    {
      name: "WordPress Solution",
      price: "Custom Pricing",
      websiteFeatures: [
        "Professional WordPress site",
        "Custom design & branding",
        "Responsive & mobile-friendly",
        "SEO optimization",
        "Content management system",
      ],
      supportServices: [
        "Dedicated support team",
      ],
      cta: { text: "Request Quote", href: "https://www.zemenaytech.com/contact" },
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "Let's Talk",
      websiteFeatures: [
        "Full-scale digital ecosystem",
        "Custom web applications",
        "Advanced integrations",
      ],
      supportServices: [
        "Dedicated support team",
        "Scalable infrastructure",
        "Ongoing maintenance",
      ],
      cta: { text: "Contact Sales", href: "https://www.zemenaytech.com/contact" },
      highlight: false,
    },
  ];

  return (
    <main className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-600 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Choose the perfect plan for your needs. From free community options to enterprise solutions, we've got you covered.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between rounded-xl p-6 shadow-lg transition-transform hover:-translate-y-2 border ${
              plan.highlight ? "border-brand-600 bg-white scale-105" : "border-blue-200 bg-blue-50"
            }`}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-brand-600">{plan.name}</h2>
              <p className={`text-3xl font-bold mb-6 ${plan.highlight ? "text-gray-900" : "text-gray-800"}`}>{plan.price}</p>

              <h3 className="font-semibold text-gray-800 mb-2">Website Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                {plan.websiteFeatures.map((f, j) => <li key={j}>{f}</li>)}
              </ul>

              <h3 className="font-semibold text-gray-800 mb-2">Support & Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-6">
                {plan.supportServices.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            </div>

            <a
              href={plan.cta.href}
              target="_blank"
              rel="noreferrer"
              className={`block text-center py-3 rounded-md font-semibold transition ${
                plan.highlight ? "bg-brand-600 text-white hover:bg-brand-700" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {plan.cta.text}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}