import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Servies() {
  const [Job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

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
      }
    };

    fetchData();
  }, []);

  return (
    <section className="">
      <h1 className="flex justify-center items-center font-bold text-4xl text-blue-600 uppercase my-6">
        Dịch vụ cây xanh
      </h1>
      <main className="relative">
        {loading ? (
          <nav className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="flex flex-col gap-4 w-52" key={index}>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </nav>
        ) : (
          <nav className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-2 md:gap-x-16 md:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center">
            {Job.map((Jobs, index) => (
              <article
                key={index}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:-translate-y-5"
              >
                <Link to="/kithuat">
                  <img
                    src={Jobs.images[0]}
                    alt=""
                    className="w-full h-[200px] p-3 rounded-3xl object-contain"
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold mb-2">{Jobs.title}</h1>
                    <p className="text-sm text-gray-700">{Jobs.description}</p>
                    <button className="btn1 mt-4">Liên hệ : 0348216852</button>
                  </div>
                </Link>
              </article>
            ))}
          </nav>
        )}
      </main>
      <aside></aside>
    </section>
  );
}

export default Servies;
