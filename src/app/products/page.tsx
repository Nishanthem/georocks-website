import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our wide range of rocks, stones, and aggregates. Crushed stone, building stones, gravel, boulders, and more in all sizes.",
};

const products = [
  {
    name: "6mm Stone Chips",
    category: "Crushed Aggregates",
    description:
      "Fine stone chips ideal for plastering, flooring, and concrete mix. Uniformly graded for consistent quality.",
    sizes: "6mm",
    uses: ["Plastering", "Flooring", "Concrete mix"],
  },
  {
    name: "12mm Crushed Stone",
    category: "Crushed Aggregates",
    description:
      "Medium-grade crushed stone perfect for reinforced concrete, column casting, and slab construction.",
    sizes: "12mm",
    uses: ["RCC work", "Column casting", "Slab construction"],
  },
  {
    name: "20mm Crushed Stone",
    category: "Crushed Aggregates",
    description:
      "Standard grade aggregate widely used in general construction, road work, and foundation filling.",
    sizes: "20mm",
    uses: ["General construction", "Road base", "Foundation work"],
  },
  {
    name: "40mm Crushed Stone",
    category: "Crushed Aggregates",
    description:
      "Large aggregate suitable for road construction, railway ballast, and heavy-duty foundation work.",
    sizes: "40mm",
    uses: ["Road construction", "Railway ballast", "Foundation base"],
  },
  {
    name: "Building Stones",
    category: "Natural Stones",
    description:
      "Hand-picked natural stones for building walls, compound walls, and decorative masonry. Durable and weather-resistant.",
    sizes: "Various",
    uses: ["Wall construction", "Compound walls", "Masonry"],
  },
  {
    name: "Rubble Stone",
    category: "Natural Stones",
    description:
      "Rough natural stones used for foundation filling, retaining walls, and land leveling applications.",
    sizes: "150mm - 300mm",
    uses: ["Foundation filling", "Retaining walls", "Land leveling"],
  },
  {
    name: "M-Sand (Manufactured Sand)",
    category: "Sand & Fines",
    description:
      "Machine-produced sand as an alternative to river sand. Consistent grain size for superior construction quality.",
    sizes: "Fine particles",
    uses: ["Concrete mix", "Plastering", "Block work"],
  },
  {
    name: "Gravel",
    category: "Landscaping",
    description:
      "Natural gravel in various sizes for drainage systems, pathway surfacing, and decorative landscaping.",
    sizes: "2mm - 20mm",
    uses: ["Drainage", "Pathways", "Landscaping"],
  },
  {
    name: "Pebbles",
    category: "Landscaping",
    description:
      "Smooth, rounded pebbles for garden decoration, water features, and ornamental landscaping projects.",
    sizes: "10mm - 50mm",
    uses: ["Garden decor", "Water features", "Ornamental use"],
  },
  {
    name: "Boulders",
    category: "Large Stones",
    description:
      "Large natural boulders for retaining walls, landscape focal points, and erosion control projects.",
    sizes: "300mm+",
    uses: ["Retaining walls", "Landscape design", "Erosion control"],
  },
  {
    name: "Stone Dust",
    category: "Sand & Fines",
    description:
      "Fine stone dust byproduct from crushing, used as a base material for paving and filling low-lying areas.",
    sizes: "Below 6mm",
    uses: ["Paving base", "Filling", "Brick manufacturing"],
  },
  {
    name: "Laterite Stones",
    category: "Natural Stones",
    description:
      "Traditional Kerala laterite blocks for wall construction. Naturally insulating and environmentally friendly.",
    sizes: "Standard block sizes",
    uses: ["Wall construction", "Traditional building", "Eco-friendly projects"],
  },
];

const categories = [...new Set(products.map((p) => p.category))];

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Our Products
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Rocks &amp; Stones for Every Project
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-lg">
            From fine aggregates to large boulders, we supply the right stone for
            construction, landscaping, and industrial use.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold text-stone-900 mb-2">
                {category}
              </h2>
              <div className="w-16 h-1 bg-amber-500 mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products
                  .filter((p) => p.category === category)
                  .map((product) => (
                    <div
                      key={product.name}
                      className="bg-stone-50 rounded-xl p-6 border border-stone-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-stone-900">
                          {product.name}
                        </h3>
                        <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded">
                          {product.sizes}
                        </span>
                      </div>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          Common Uses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.uses.map((use) => (
                            <span
                              key={use}
                              className="text-xs bg-stone-200 text-stone-700 px-2 py-1 rounded"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Need a Custom Order?
          </h2>
          <p className="text-amber-100 mb-6">
            Contact us for bulk orders, custom sizes, or special requirements.
            We&apos;ll get you the right stone at the right price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916282180705"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 hover:bg-stone-100 px-6 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Call: +91 6282180705
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-amber-700 px-6 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
