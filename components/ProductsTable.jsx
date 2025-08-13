// components/ProductsTable.jsx
export default function ProductsTable({ products = [] }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-6">Products</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {products.length
            ? products.map((p, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 my-3">{p.desc}</p>
                  <div className="text-sm font-medium">{p.tag}</div>
                </div>
              ))
            : [1, 2, 3].map((n) => (
                <div key={n} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Product {n}</h4>
                  <p className="text-sm text-gray-600 my-3">Short description</p>
                  <div className="text-sm font-medium">Tool</div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}