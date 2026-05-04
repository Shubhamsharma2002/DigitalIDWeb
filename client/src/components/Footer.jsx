export default function Footer() {
  return (
    <footer className="mt-20 bg-white border-t px-4 md:px-10 py-10">

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-6 opacity-60 mb-8 text-sm">
        <span>🎓 University</span>
        <span>🏢 Company</span>
        <span>🏫 College</span>
        <span>🏛️ Institute</span>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500 gap-4 text-center md:text-left">
        
        <p>© 2026 Digital ID. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-4">
          <span>🔒 Secure</span>
          <span>👥 Trusted</span>
          <span>🇮🇳 Made in India</span>
        </div>

      </div>
    </footer>
  );
}