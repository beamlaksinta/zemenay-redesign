// components/Testimonials.jsx
export default function Testimonials({ items = [] }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">What clients say</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {items.length
            ? items.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">“{t.quote}”</p>
                  <div className="text-sm">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-gray-500">{t.role}</div>
                  </div>
                </div>
              ))
            : [1, 2, 3].map((n) => (
                <div key={n} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700 mb-4">“Great service and fast delivery.”</p>
                  <div className="text-sm">
                    <div className="font-semibold">Client {n}</div>
                    <div className="text-gray-500">Company</div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}