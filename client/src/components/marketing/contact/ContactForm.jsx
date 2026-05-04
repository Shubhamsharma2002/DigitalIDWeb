export default function ContactForm() {
  return (
    <div className="rounded-[2rem] bg-white p-8 md:p-10 shadow border border-slate-100">
      <div className="flex gap-4 items-center mb-8">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-white flex items-center justify-center text-2xl shadow-lg">
          ✉️
        </div>
        <div>
          <h2 className="text-2xl font-black text-[#0B1437]">
            Send Us a Message
          </h2>
          <p className="text-slate-500">
            Apni details bhejein aur hum jald se jald aapse sampark karenge.
          </p>
        </div>
      </div>

      <form className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <input className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Name" />
          <input className="h-14 rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Organization Name" />
        </div>

        <input className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Your Email" />
        <input className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Subject" />

        <textarea className="min-h-48 w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-200" placeholder="Message" />

        <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white font-black shadow-lg">
          Send Message →
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-400">
        🔒 Your information is safe with us. We respect your privacy.
      </p>
    </div>
  );
}