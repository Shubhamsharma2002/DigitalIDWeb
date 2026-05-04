import Link from "next/link";

export default function BusinessCTA() {
  return (
    <section className="bg-[#F8FAFF] px-5 md:px-8 py-10">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-r from-blue-50 to-violet-100 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow border border-blue-100">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B1437]">
            Let’s Talk <span className="text-violet-600">Business</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Digital ID aapke organization ke identity management ko simple,
            secure aur smart banata hai.
          </p>
          <Link href="/contact" className="inline-flex mt-6 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-8 py-4 text-white font-black shadow-lg">
            Book a Demo →
          </Link>
        </div>

        <div className="text-7xl md:text-8xl">👩‍💼🤖👨‍💼</div>
      </div>
    </section>
  );
}