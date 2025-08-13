// components/Clients.jsx
export default function Clients() {
  const clients = [
    { name: "Company A", logoSrc: "/globe.svg" },
    { name: "Company B", logoSrc: "/vector.svg" },
    { name: "Company C", logoSrc: "/window.svg" },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Clients</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {clients.length > 0
            ? clients.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm"
                >
                  <img
                    src={client.logoSrc}
                    alt={client.name}
                    className="max-h-12 object-contain"
                  />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="h-12 flex items-center justify-center bg-white rounded-lg border"
                >
                  <span className="text-xs text-gray-500">Logo {n}</span>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}