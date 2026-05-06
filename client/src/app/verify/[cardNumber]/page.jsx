export default async function VerifyPage({ params }) {
  const { cardNumber } = await params;

  return (
    <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-xl border border-slate-100">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-4xl">
          ✅
        </div>

        <h1 className="text-3xl font-black text-[#0B1437]">
          Digital ID Verified
        </h1>

        <p className="mt-3 text-slate-500">
          This Digital ID is linked with card number:
        </p>

        <div className="mt-6 rounded-2xl bg-blue-50 px-5 py-4 font-black text-blue-600">
          {cardNumber}
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Verification page is under development. Backend verification will be
          connected next.
        </p>
      </div>
    </div>
  );
}
