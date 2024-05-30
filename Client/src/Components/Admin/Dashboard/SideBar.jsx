import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo3.png";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("AccessToken");
  };
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white border-r border-gray-700">
      <div className="flex justify-center    border-b border-gray-700">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" object-contain w-[150px] h-[100px]"
          />
        </Link>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li className="border-b border-gray-700">
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold block py-2 px-4"
                  : "text-gray-400 hover:text-white block py-2 px-4"
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink
              to="product"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold block py-2 px-4"
                  : "text-gray-400 hover:text-white block py-2 px-4"
              }
            >
              Quản lý sản phẩm
            </NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink
              to="blog"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold block py-2 px-4"
                  : "text-gray-400 hover:text-white block py-2 px-4"
              }
            >
              Quản lí bài viết
            </NavLink>
          </li>

          <li className="border-b border-gray-700">
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold block py-2 px-4"
                  : "text-gray-400 hover:text-white block py-2 px-4"
              }
            >
              Settings
            </NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-semibold block py-2 px-4"
                  : "text-gray-400 hover:text-white block py-2 px-4"
              }
              onClick={handleLogout}
            >
              Đăng Xuất
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
