export default function CustomInput({ label, icon: Icon, type, placeholder, ...props }) {
  return (
    <div className="space-y-1.5 w-full">
      {label && <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>}
      <div className="relative group">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Icon size={18} />
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full h-12 bg-white border border-slate-200 rounded-xl px-4 ${Icon ? 'pl-11' : ''} 
          outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all 
          placeholder:text-slate-400 text-slate-700 shadow-sm`}
          {...props}
        />
      </div>
    </div>
  );
}