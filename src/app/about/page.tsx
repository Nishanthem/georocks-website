import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Georocks - Trivandrum's trusted rock and stone supplier with our own crusher unit. Quality materials, reliable service.",
};

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Building Trust, One Stone at a Time
          </h1>
          <p className="mt-4 text-stone-300 max-w-2xl text-lg">
            Your reliable partner for premium quality rocks and stones in
            Trivandrum, Kerala.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                From Quarry to Your Doorstep
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Georocks was founded with a simple mission: to provide the
                  highest quality rocks and stones at fair prices. Based in
                  Trivandrum, Kerala, we operate our own crusher unit, giving us
                  complete control over the quality and sizing of our products.
                </p>
                <p>
                  Our team understands that every construction project has unique
                  requirements. Whether you need fine aggregates for concrete
                  work or large boulders for landscaping, we have the expertise
                  and inventory to meet your needs.
                </p>
                <p>
                  We take pride in our prompt delivery service and customer-first
                  approach. When you choose Georocks, you are choosing a partner
                  who is invested in the success of your project.
                </p>
              </div>
            </div>

            <div className="bg-stone-100 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "10+", label: "Years in Business" },
                  { value: "500+", label: "Satisfied Customers" },
                  { value: "15+", label: "Product Types" },
                  { value: "10K+", label: "Tonnes Delivered" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-xl p-6 text-center shadow-sm"
                  >
                    <p className="text-3xl font-bold text-amber-600">
                      {stat.value}
                    </p>
                    <p className="text-stone-500 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
              Our Values
            </p>
            <h2 className="text-3xl font-bold text-stone-900">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "Every stone that leaves our unit passes strict quality checks. We never compromise on the grade of our materials.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
              {
                title: "Customer Focus",
                description:
                  "We listen to our customers and tailor solutions to fit their specific project requirements and budget.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Reliability",
                description:
                  "Timely delivery and consistent supply you can depend on. We keep our promises so your projects stay on schedule.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 text-center shadow-sm border border-stone-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">
              How We Work
            </p>
            <h2 className="text-3xl font-bold text-stone-900">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Enquiry", desc: "Tell us your requirements — product type, size, and quantity." },
              { step: "02", title: "Quote", desc: "We provide competitive pricing based on your specific needs." },
              { step: "03", title: "Processing", desc: "Stones are crushed and graded to your exact specifications." },
              { step: "04", title: "Delivery", desc: "Prompt delivery to your project site across Trivandrum." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-stone-300 text-lg mb-8">
            Contact Halson today to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-base font-semibold transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
