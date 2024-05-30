import { AiOutlineTags } from "react-icons/ai";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import CountUp from "react-countup";
import Navbar from "./../../Components/Layout/Header/Navbar";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import Sliders from "./../../Components/Slider/Slider.jsx";
import Gallery from "../../Components/Slider/Gallery.jsx";
import { Link } from "react-router-dom";
import ContactButtons from "../../Components/Slider/ContactButtons.jsx";

function Home() {
  return (
    <section className=" bg-green-50">
      <Header />
      <Navbar />

      <div className="hero min-h-[500px]  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <img
              src="https://dichvuvesinhdanang.com/wp-content/uploads/2020/07/2.png"
              alt=" "
              className="rounded-2xl  "
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-4xl text-blue-600 uppercase ">
              Cắt tỉa cây cảnh Vĩnh Phan{" "}
            </h1>
            <p className="py-6">
              Dịch vụ vệ sinh công nghiệp SONGANHHYG được thành lập từ 2010, là
              một trong những đơn vị vệ sinh công nghiệp uy tín hàng đầu tại Đà
              Nẵng. Với hàng ngàn khách hàng tại Đà Nẵng và Hội An, chúng tôi
              cung ứng các dịch vụ sau:
            </p>
            <div className="footer px-10   text-base-content">
              <nav>
                <span className="flex   ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh văn phòng{" "}
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Cung ứng lao động thời vụ</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh công trình sau xây dựng
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh ống khói nhà bếp
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Giặt nệm, thảm, sofa, màn rèm
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh kính tòa nhà cao tầng
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Thi công sàn vinyl
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Xe chở xà bẩn
                  </a>
                </span>
              </nav>
              <nav>
                <span className="flex   ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh nhà xưởng
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Cung ứng tạp vụ văn phòng, gia đình
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Dịch vụ vệ sinh công nghiệp
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a className=" link-hover">Vệ sinh nhà cửa</a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh đường ống dẫn nước
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Dịch vụ diệt côn trùng, mối, ruồi
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Mài đánh bóng sàn bê tông
                  </a>
                </span>
                <span className="flex ">
                  <BsFillPatchCheckFill className="iconcheck" />
                  <a href="" className=" link-hover">
                    Vệ sinh phòng sạch
                  </a>
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <nav className="col-span-6 pb-6 mx-0 md:mx-36">
        <h1 className="text-center font-bold text-4xl text-blue-600">
          TẠI SAO LỰA CHỌN VĨNH PHAN
        </h1>
        <div className="stats shadow inline-block w-full text-center  md:bg-green-200   my-5 lg:inline-grid ">
          <div className="stat ">
            <div className="stat-figure mr-[400%]   text-primary lg:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">
              <CountUp delay={2} end={121} /> K
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary mr-[400%]   lg:mr-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Nhân viên </div>
            <div className="stat-value text-secondary">
              <CountUp delay={2} end={100} />+{" "}
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat ">
            <div className="stat-figure text-secondary mr-[175%]   lg:mr-0">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-value">
              <CountUp delay={2} end={86} />%
            </div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
          <div className="stat ">
            <div className="stat-figure text-secondary mr-[175%]   lg:mr-0">
              <div className="avatar ">
                <div className="w-16 rounded-full">
                  <img
                    src="https://png.pngtree.com/png-clipart/20240117/original/pngtree-trophies-exquisite-presentations-honors-awards-podiums-png-image_14124541.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="stat-title">Awards</div>
            <div className="stat-value text-primary">
              <CountUp delay={2} end={23} />+
            </div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div className="hero min-h-[500px] ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className=" text-center lg:text-left ">
              <p className="pb-6  text-xl">
                Với nhiều năm kinh nghiệm trong lĩnh vực dịch vụ vệ sinh công
                nghiệp tại Đà Nẵng, chúng tôi tự hào dịch vụ của chúng tôi đang
                được các khách hàng lựa chọn như là một đối tác tin cậy hàng
                đầu.
              </p>
              <div className="footer px-10   text-base-content">
                <nav>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a href="" className=" link-hover">
                      Đội ngũ nhân viên chuyên nghiệp
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a href="" className=" link-hover">
                      Trang thiết bị máy móc hiện đại{" "}
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a href="" className=" link-hover">
                      Giá cả rõ ràng hợp lý{" "}
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a href="" className=" link-hover">
                      Thi công an toàn và nhanh chóng
                    </a>
                  </span>
                  <span className="flex   ">
                    <AiOutlineTags className="text-red-600 text-3xl" />

                    <a href="" className=" link-hover">
                      Chính sách bảo hành tuyệt đối
                    </a>
                  </span>
                  <span>
                    <a href="" className="inline-flex rounded-md shadow-sm ">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-4 border border-transparent text-base leading-6 font-medium rounded-bl-3xl rounded-tr-3xl text-white bg-green-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 transform hover:-translate-x-3 focus:-translate-x-3"
                      >
                        <span className="loading loading-infinity loading-lg text-amber-400" />{" "}
                        Hotline : 0348216852
                      </button>
                    </a>
                  </span>
                </nav>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <img
                src="https://nhatminhlandscape.com/files/images/d%E1%BB%8Bch%20v%E1%BB%A5%20c%E1%BA%AFt%20c%E1%BB%8F.jpg"
                alt=" "
                className="rounded-2xl "
              />
            </div>
          </div>
        </div>
        <h1 className=" pb-6 flex justify-center items-center font-bold text-4xl text-blue-600">
          NHỮNG DỰ ÁN NỔI BẬT
        </h1>
        <Sliders />
        <Gallery />
      </nav>
      <Link to="/dich-vu" className=" pb-6 flex justify-center items-center">
        <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
          See more
        </button>
      </Link>
      <ContactButtons />

      <Footer />
    </section>
  );
}

export default Home;
