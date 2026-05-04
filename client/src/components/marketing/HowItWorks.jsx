export default function HowItWorks() {
  const steps = [
    ["🏢", "Org Register kare", "Organization simple registration kare."],
    ["☁️", "Data Upload kare", "Member ya user data upload kare easily."],
    ["✈️", "User ko App link bheje", "Cards instantly deliver kare."],
  ];

  return (
    <section id="how" className="py-16 px-5 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-10">
          How it <span className="text-violet-600">Works</span> ⚙️
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(([icon, title, desc], index) => (
            <div key={title} className="relative bg-[#F8FAFF] rounded-3xl p-8 shadow-sm">
              <span className="absolute -top-4 left-6 h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </span>
              <div className="text-5xl mb-5">{icon}</div>
              <h3 className="font-black text-blue-600 mb-2">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}