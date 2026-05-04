export default function PrimaryButton({ children, loading, ...props }) {
  return (
    <button
      className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
      text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] 
      disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
}