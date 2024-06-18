import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 5000, 2300, 3000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Dịch Vụ", "Bài Viết", "Số lượng truy cập"],
    datasets: [
      {
        label: "Distribution",
        data: [1234, 567, 12345],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-blue-500">Dịch Vụ</h2>
          <p className="text-gray-700 text-3xl">1,234</p>
        </article>

        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-green-500">Bài Viết</h2>
          <p className="text-gray-700 text-3xl">567</p>
        </article>

        <article className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-xl font-semibold text-purple-500">
            Số lượng truy cập
          </h2>
          <p className="text-gray-700 text-3xl">89</p>
        </article>
      </section>

      <section className="grid grid-cols-2 gap-2 mb-6">
        <aside className="col-span-1 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <header className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Revenue Chart
              </h2>
            </header>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
              <Bar data={barData} />
            </div>
          </div>
        </aside>
        <aside className="col-span-1 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <header className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                User Distribution
              </h2>
            </header>
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
              <Pie data={pieData} />
            </div>
          </div>
        </aside>
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
