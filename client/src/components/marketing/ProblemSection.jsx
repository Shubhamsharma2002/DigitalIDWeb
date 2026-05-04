export default function ProblemSection() {
  const problems = [
    ["❓", "Kho Jana", "Physical cards kho jaate hain easily."],
    ["🖨️", "Printing Cost", "Printing mein high cost aata hai."],
    ["⌛", "Delay", "Banane aur distribute karne mein delay."],
  ];

  return (
    <section className="bg-[#F3F6FF] py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-8">
          The <span className="text-violet-600">Problem</span> with Physical Cards 😫
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-3xl p-8 shadow">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="font-black text-lg mb-2 text-blue-600">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}