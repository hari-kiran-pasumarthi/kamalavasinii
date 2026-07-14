export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#F8F6F2] p-10">

      <h1 className="text-4xl font-serif text-[#7B2334]">
        Welcome Back
      </h1>

      <p className="mt-2 text-gray-600">
        Kamalavasinii Admin Dashboard
      </p>

      <div className="grid grid-cols-4 gap-6 mt-10">

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-sm text-gray-500">
            Total Inquiries
          </h2>

          <p className="text-3xl font-bold mt-3">
            --
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-sm text-gray-500">
            Appointments
          </h2>

          <p className="text-3xl font-bold mt-3">
            --
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-sm text-gray-500">
            Products
          </h2>

          <p className="text-3xl font-bold mt-3">
            --
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-sm text-gray-500">
            Payments
          </h2>

          <p className="text-3xl font-bold mt-3">
            --
          </p>
        </div>

      </div>

    </main>
  );
}