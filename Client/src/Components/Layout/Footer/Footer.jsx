import { AiFillTwitterCircle } from "react-icons/ai";

import { BsFacebook } from "react-icons/bs";
function Footer() {
  return (
    <footer className="footer   footers footer-center  bottom-10 col-span-6  mt-10 p-10 bg-base-200 text-xl text-base-content rounded">
      <nav className="grid grid-flow-col gap-4 text-xl">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
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
