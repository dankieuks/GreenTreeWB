import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Servies() {
  const [Job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/product`
        );
        setJob(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1 className="flex justify-center items-center font-bold text-4xl text-blue-600 uppercase my-6">
        Dịch vụ cây xanh
      </h1>
      <main className="relative">
        {loading ? (
          <nav className="grid grid-cols-2 gap-y-3 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="flex flex-col gap-4 w-52" key={index}>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </nav>
        ) : error ? (
          <div className="text-red-500 text-center">
            Có lỗi xảy ra khi tải dữ liệu.
          </div>
        ) : (
          <nav className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 xl:grid-cols-6">
            {Job.map((Jobs) => (
              <Link
                to=""
                key={Jobs._id}
                className="rounded-3xl mb-6 px-3 transition-transform transform hover:scale-105"
              >
                <img
                  className="heartbeat rounded-3xl mx-1 p-4 md:p-1 w-[250px] h-[220px] lg:w-[280px] lg:h-[260px] shadow-lg hover:shadow-xl transition-shadow"
                  src={Jobs.images}
                  alt={Jobs.title}
                />
                <article className="p-6">
                  <h5 className="whitespace-nowrap overflow-hidden text-ellipsis mb-2 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased xl:text-2xl">
                    {Jobs.title}
                  </h5>
                  <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased whitespace-nowrap overflow-hidden text-ellipsis">
                    {Jobs.description}
                  </p>
                </article>
                <article className="p-6 pt-0">
                  <button
                    data-ripple-light="true"
                    type="button"
                    className="bg-red-500 rounded-bl-3xl rounded-tr-3xl hover:bg-green-500 text-white font-bold px-2 md:p-4 "
                  >
                    Liên hệ: 0348216852
                  </button>
                </article>
              </Link>
            ))}
          </nav>
        )}
      </main>
      <aside></aside>
    </section>
  );
}

export default Servies;
