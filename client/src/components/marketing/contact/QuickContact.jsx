export default function QuickContact() {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] bg-white p-8 shadow border border-slate-100">
        <h2 className="text-2xl font-black text-[#0B1437] mb-8">
          🚀 Quick Contact
        </h2>

        <div className="space-y-6">
          {[
            ["✉️", "Email Support", "support@yourbrand.com", "Hum 24 ghante ke andar reply karte hain."],
            ["📞", "Phone Support", "+91 98765 43210", "Mon - Sat (10AM - 6PM)"],
            ["📍", "Office Address", "YourBrand Technologies Pvt. Ltd.", "Noida, Uttar Pradesh - 201309"],
          ].map(([icon, title, main, sub]) => (
            <div key={title} className="flex gap-5 border-b last:border-b-0 pb-5 last:pb-0">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-white flex items-center justify-center text-2xl shadow-lg">
                {icon}
              </div>
              <div>
                <h3 className="font-black text-blue-600">{title}</h3>
                <p className="mt-1 font-semibold text-slate-700">{main}</p>
                <p className="text-sm text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow border border-slate-100">
        <h2 className="text-2xl font-black text-[#0B1437] mb-4">
          🔗 Stay Connected
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Humein social media par follow karein aur latest updates paate rahein.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {["LinkedIn", "Twitter", "X (Twitter)", "YouTube"].map((social) => (
            <div key={social} className="rounded-xl border border-slate-100 p-4 font-bold text-slate-700">
              {social}
              <p className="text-xs font-medium text-slate-400">/yourbrand</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}