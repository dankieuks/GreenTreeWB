import { AiOutlineBars } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo3.png";

function Header() {
  const items = [
    {
      to: "/",
      label: "Trang Chủ",
    },
    {
      to: "/dich-vu",
      label: "Dịch Vụ",
    },
    {
      to: "/lien-he",
      label: "Liên hệ",
    },
  ];

  return (
    <header className="headers fixed top-0 left-0 w-full z-10 opacity-90 bg-green-200">
      <marquee
        behavior=""
        direction=""
        className="bg-green-600 text-white font-bold uppercase"
      >
        Gọi ngay Vĩnh Phan để được tư vấn giải pháp Hotline : 0348216852
      </marquee>
      <nav className="flex justify-between px-5 md:justify-around  items-center text-center md:px-0">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="logo" className="object-contain h-16" />
          </Link>
        </div>
        <div className="flex justify-evenly hidden lg:block">
          {items.map((itemM, index) => (
            <NavLink
              to={itemM.to}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold mx-[20px] uppercase hover:underline"
                  : "text-blue-950 font-bold mx-[20px] uppercase hover:underline"
              }
            >
              {itemM.label}
            </NavLink>
          ))}
        </div>
        <div className="drawer w-0 mr-10 md:mr-0 lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="">
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              <AiOutlineBars />
            </label>
          </div>
          <div className="drawer-side z-20 top-[95px] h-[100%]">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {items.map((itemM, index) => (
                <NavLink
                  to={itemM.to}
                  key={index}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold mx-[50px] uppercase hover:underline"
                      : "text-blue-950 font-bold mx-[50px] uppercase hover:underline"
                  }
                >
                  {itemM.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
