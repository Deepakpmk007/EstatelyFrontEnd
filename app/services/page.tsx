"use client";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800 py-18 px-6 max-w-6xl mx-auto">
      <section className=" mb-12">
        <h1 className="text-4xl font-bold mb-4 uppercase">Our Services</h1>
        <p className="text-lg text-gray-600">
          Discover how Estately helps you buy, sell, and rent properties
          effortlessly.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
            alt="Property Listings"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Property Listings & Search
          </h2>
          <p className="text-gray-700 mb-4">
            Browse a wide range of residential and commercial properties
            tailored to your needs. Filter listings by location, price, and
            amenities. Save your favorites and revisit anytime.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-2">
            Property Sales & Marketing
          </h2>
          <p className="text-gray-700 mb-4">
            Get a free property valuation, professional photography, and
            marketing on top channels. We handle inquiries, negotiations, and
            paperwork to help you sell faster.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Sales and Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <Image
            src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg"
            alt="Rental Services"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Rental Services</h2>
          <p className="text-gray-700 mb-4">
            Verified rental listings, transparent pricing, and full support with
            applications and documentation. For landlords, we help you find
            qualified tenants quickly.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold mb-2">
            Neighborhood Insights & Map Search
          </h2>
          <p className="text-gray-700 mb-4">
            Explore communities with our interactive map powered by Leaflet. See
            amenities, schools, commute times, and more. Make confident
            decisions about where you live or invest.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80"
            alt="Neighborhood Insights"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mb-12 items-center">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
            alt="Legal Support"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Legal & Documentation Support
          </h2>
          <p className="text-gray-700 mb-4">
            From contract drafting to title transfers, our experts handle the
            paperwork so you can focus on what matters. We ensure compliance and
            secure transactions.
          </p>
        </div>
      </section>

      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-2">
          Personalized Consultation
        </h2>
        <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
          Not sure where to start? Schedule a free consultation to discuss your
          goals, budget, and options with our advisors.
        </p>
        <a
          href="/help"
          className="inline-block bg-black text-white font-semibold px-6 py-3 rounded "
        >
          Schedule a Consultation
        </a>
      </section>
    </main>
  );
}
