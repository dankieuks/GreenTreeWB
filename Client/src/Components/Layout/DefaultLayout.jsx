import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import ContactButtons from "../Slider/ContactButtons.jsx";

function DefaultLayout({ children }) {
  return (
    <div className=" relative grid grid-cols-6  bg-green-100  w-full">
      <Header />

      <main className=" pt-[100px] col-span-6  mx-0 md:mx-36 ">{children}</main>
      <ContactButtons />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
