export default function PricingSection() {
  return (
    <section className="bg-[#F8FAFF] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-[#0B1437]">
          Simple, Transparent{" "}
          <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          We`re crafting the perfect pricing for organizations of all sizes.
        </p>

        {/* Coming Soon Badge */}
        <div className="mt-6 inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold">
          🚧 Under Development — Coming Soon
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">

          {/* Starter */}
          <div className="bg-white rounded-3xl p-8 shadow border border-slate-100 opacity-80">
            <h3 className="text-xl font-bold text-slate-700">Starter</h3>
            <p className="mt-3 text-sm text-slate-500">
              Perfect for small teams & colleges
            </p>

            <div className="mt-6 text-3xl font-black text-slate-400">
              ₹ -- / month
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li>✔ Basic ID generation</li>
              <li>✔ QR verification</li>
              <li>✔ Limited members</li>
            </ul>
          </div>

          {/* Pro (highlighted) */}
          <div className="bg-gradient-to-br from-sky-500 to-violet-600 text-white rounded-3xl p-8 shadow-xl scale-105">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="mt-3 text-sm opacity-90">
              Best for growing organizations
            </p>

            <div className="mt-6 text-3xl font-black opacity-80">
              ₹ -- / month
            </div>

            <ul className="mt-6 space-y-3 text-sm opacity-90">
              <li>✔ Unlimited ID cards</li>
              <li>✔ Advanced analytics</li>
              <li>✔ Custom branding</li>
            </ul>

            <div className="mt-8 text-xs bg-white/20 px-3 py-1 rounded-full inline-block">
              🚀 Most Popular
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-8 shadow border border-slate-100 opacity-80">
            <h3 className="text-xl font-bold text-slate-700">Enterprise</h3>
            <p className="mt-3 text-sm text-slate-500">
              Large scale institutions & companies
            </p>

            <div className="mt-6 text-3xl font-black text-slate-400">
              Custom Pricing
            </div>

            <ul className="mt-6 space-y-3 text-sm text-slate-500">
              <li>✔ Dedicated support</li>
              <li>✔ API access</li>
              <li>✔ Custom integrations</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <p className="text-slate-500 mb-4">
            Want early access when pricing launches?
          </p>

          <button className="rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-4 text-white font-bold shadow-lg hover:shadow-xl transition">
            Notify Me 🚀
          </button>
        </div>

      </div>
    </section>
  );
}