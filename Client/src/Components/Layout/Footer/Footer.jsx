import { AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dashboard from "./../../Admin/Dashboard/Dashbroad";
function Footer() {
  return (
    <footer className="footer   footers footer-center  bottom-10 col-span-6  mt-10 p-10 bg-base-200 text-xl text-base-content rounded">
      <nav className="grid grid-flow-col gap-4 text-xl">
        <Link to="/lien-he" className="link link-hover">
          Liên hệ
        </Link>
        <Link to="/dich-vu" className="link link-hover">
          Dịch vụ
        </Link>
        <Link to="/admin/dashboard" className="link link-hover">
          Đăng nhập
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <BsFacebook />
          <AiFillTwitterCircle />
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Jian.nx</p>
      </aside>
    </footer>
  );
}

export default Footer;
