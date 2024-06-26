import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Sliders() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/blog`
        );
        setPosts(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(posts);

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative">
      {loading ? (
        <Slider {...settings} className="rounded-md">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex flex-col gap-4 w-52" key={index}>
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </Slider>
      ) : (
        <Slider {...settings} className="rounded-md ">
          {posts.map((post) => (
            <Link
              to={"/du-an/" + post._id}
              key={post._id} // Sử dụng _id thay vì index làm key
              className="rounded-3xl mb-[30px] px-3 md:h-[380px] md:mb-2 lg:h-[450px] xl:h-[450px] transition-transform transform hover:scale-105"
            >
              <img
                className="heartbeat rounded-3xl mx-1 p-4 md:p-1 w-[250px] h-[220px] lg:w-[280px] lg:h-[260px] shadow-lg hover:shadow-xl transition-shadow"
                src={post.images[0]}
                alt={post.title}
              />
              <article className="p-6">
                <h5 className=" whitespace-nowrap overflow-hidden text-ellipsis mb-2 block font-sans text-sm font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased xl:text-2xl">
                  {post.title}
                </h5>
                <p className="block font-sans text-[14px] font-light leading-relaxed text-inherit antialiased whitespace-nowrap overflow-hidden text-ellipsis">
                  {post.description}
                </p>
              </article>
              <article className="p-6 pt-0">
                <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans md:text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:text-md"
                >
                  Read More
                </button>
              </article>
            </Link>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Sliders;
