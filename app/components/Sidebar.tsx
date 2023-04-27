import { Link } from "@remix-run/react";
import { HiHome, HiMenu } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  // console.log(open);

  const expand = () => {
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <div
        className={`min-h-full sidebar bg-indigo-950 duration-100 ${
          open ? "w-1/5" : "w-14"
        }`}
      >
        <div className="m-3.5 flex justify-end">
          <HiMenu
            size={26}
            className="cursor-pointer text-white"
            onClick={expand}
          />
        </div>
        {/* <hr className="bg-indigo-950 " /> */}
        <div className=" py-2 mx-3.5">
          <Link to="/dashboard" className="flex text-white">
            <HiHome size={26} className="" />
            <h3 className={`ml-2 ${!open ? "hidden" : ""}`}>Dashboard</h3>
          </Link>
        </div>
        <div className=" py-2 mx-3.5">
          <Link to="/dashboard/about" className="flex text-white">
            <FcAbout size={26} className=" " />
            <h3 className={`ml-2 ${!open ? "hidden" : ""}`}>About</h3>
          </Link>
        </div>
        <div className=" py-2 mx-3.5">
          <Link to="/dashboard/profile" className="flex text-white">
            <CgProfile size={26} className=" " />
            <h3 className={`ml-2 ${!open ? "hidden" : ""}`}>Profile</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
