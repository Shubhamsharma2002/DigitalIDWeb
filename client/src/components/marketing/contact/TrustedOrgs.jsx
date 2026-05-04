export default function TrustedOrgs() {
  return (
    <section className="bg-[#F8FAFF] px-5 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold text-slate-500 mb-5">
          Trusted by 100+ Organizations
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {["CHITKARA", "LNCT", "RUNGTA", "BENNETT", "AMITY","Lloyd","Gniot"].map((org) => (
            <div key={org} className="rounded-2xl bg-white border border-slate-100 p-5 shadow text-slate-400 font-black">
              {org}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}