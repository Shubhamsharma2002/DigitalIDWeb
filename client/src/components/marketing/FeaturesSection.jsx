export default function FeaturesSection() {
  const features = [
    ["🔳", "Instant QR Generation", "Har user ke liye unique QR code generate kare instantly."],
    ["☁️", "Cloud Backup", "Data safe rahe secure cloud backup ke saath."],
    ["🍃", "Eco-Friendly Approach", "Paperless solution se environment ko bachaye."],
  ];

  return (
    <section id="features" className="py-16 px-5 md:px-8 bg-[#F8FAFF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-10">
          Key <span className="text-blue-600">Features</span> ✨
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(([icon, title, desc]) => (
            <div key={title} className="bg-white rounded-3xl p-8 shadow">
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