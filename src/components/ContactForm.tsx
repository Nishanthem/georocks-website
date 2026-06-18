"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700">
          We have received your enquiry. Halson will get back to you shortly.
        </p>
        <p className="text-green-600 text-sm mt-2">
          For urgent queries, call{" "}
          <a href="tel:+916282180705" className="font-semibold underline">
            +91 6282180705
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-stone-900"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-stone-900"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label
          htmlFor="product"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Product Interested In
        </label>
        <select
          id="product"
          name="product"
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors text-stone-900 bg-white"
        >
          <option value="">Select a product</option>
          <option value="6mm">6mm Stone Chips</option>
          <option value="12mm">12mm Crushed Stone</option>
          <option value="20mm">20mm Crushed Stone</option>
          <option value="40mm">40mm Crushed Stone</option>
          <option value="building-stones">Building Stones</option>
          <option value="rubble">Rubble Stone</option>
          <option value="m-sand">M-Sand</option>
          <option value="gravel">Gravel</option>
          <option value="pebbles">Pebbles</option>
          <option value="boulders">Boulders</option>
          <option value="stone-dust">Stone Dust</option>
          <option value="laterite">Laterite Stones</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-stone-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-colors resize-none text-stone-900"
          placeholder="Tell us about your requirements (quantity, delivery location, etc.)"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
      >
        Send Enquiry
      </button>
    </form>
  );
}
