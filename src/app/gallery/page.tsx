import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our collection of rocks, stones, and crusher operations. See the quality of Georocks products.",
};

const galleryItems = [
  {
    title: "Crushed Stone Aggregates",
    description: "Freshly crushed 20mm aggregates ready for dispatch",
    category: "Products",
  },
  {
    title: "Crusher Unit Operations",
    description: "Our state-of-the-art crusher unit in action",
    category: "Operations",
  },
  {
    title: "Building Stones",
    description: "Natural building stones stacked and ready for delivery",
    category: "Products",
  },
  {
    title: "Gravel Stockpile",
    description: "Graded gravel in various sizes for different applications",
    category: "Products",
  },
  {
    title: "M-Sand Production",
    description: "Manufacturing sand production line at our facility",
    category: "Operations",
  },
  {
    title: "Delivery Fleet",
    description: "Our trucks loaded and ready for prompt delivery",
    category: "Delivery",
  },
  {
    title: "Laterite Stone Blocks",
    description: "Traditional Kerala laterite blocks cut to specification",
    category: "Products",
  },
  {
    title: "Project Site Delivery",
    description: "Aggregates being delivered to a construction site",
    category: "Delivery",
  },
  {
    title: "Stone Dust Collection",
    description: "Fine stone dust sorted and packaged for use",
    category: "Products",
  },
];

export default function Gallery() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2">
            Gallery
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            See Our Work
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-lg">
            A showcase of our products, operations, and deliveries.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-stone-200 rounded-xl overflow-hidden aspect-[4/3]"
              >
                {/* Placeholder gradient pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(${135 + index * 20}deg, #78716c, #44403c, #292524)`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-stone-500 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-amber-500 text-xs font-semibold uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-stone-50 rounded-xl p-8 text-center border border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Want to See More?
            </h3>
            <p className="text-stone-500 mb-4">
              Visit our site or contact us for a detailed look at our products
              and operations. We are happy to arrange a site visit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors"
            >
              Contact Us for a Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
