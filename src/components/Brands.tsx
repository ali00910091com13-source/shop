export default function Brands() {
  const brands = ['Diverso', 'Corum', 'Gabiani', 'Barez', 'Panil', 'Novin', 'JPA', 'Valiant', 'RNS', 'Omax'];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-400 text-sm mb-8 font-medium">برندهای منتخب</p>
        <div className="overflow-hidden">
          <div className="flex gap-12 items-center animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 transition-colors cursor-pointer">
                <span className="text-gray-600 font-bold text-lg whitespace-nowrap">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
