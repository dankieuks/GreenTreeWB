import banner from "../../../assets/img/banner.png";
function Navbar() {
  return (
    <div className="  gird col-span-6 pb-6 max-w-screen w-full mx-auto">
      <div className=" flex justify-center pt-[94px]">
        <img src={banner} alt="Logo" className="w-screen h-full " />
      </div>
    </div>
  );
}

export default Navbar;
