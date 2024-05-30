import React from "react";

function Dashboard() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-500">Total Users</h2>
          <p className="text-gray-700 text-3xl">1,234</p>
        </article>

        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-green-500">Total Orders</h2>
          <p className="text-gray-700 text-3xl">567</p>
        </article>

        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-yellow-500">Revenue</h2>
          <p className="text-gray-700 text-3xl">$12,345</p>
        </article>

        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-purple-500">New Users</h2>
          <p className="text-gray-700 text-3xl">89</p>
        </article>
      </section>

      <section>
        <header className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Activities
          </h2>
        </header>
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
          <ul className="divide-y divide-gray-200">
            <li className="py-4">User John Doe signed up.</li>
            <li className="py-4">Order #12345 was placed.</li>
            <li className="py-4">Product XYZ was updated.</li>
            <li className="py-4">User Jane Smith updated her profile.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
