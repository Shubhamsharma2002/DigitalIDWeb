import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-5 md:px-8 py-10 bg-white">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-violet-700 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-black">
            Ready to go digital? <br />
            Join <span className="text-cyan-300">100+ Orgs</span> today.
          </h2>
        </div>

        <Link href="/signup" className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-black shadow">
          Get Started Now →
        </Link>
      </div>
    </section>
  );
}