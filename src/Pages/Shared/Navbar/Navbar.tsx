import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import LoginButton from "../../../Components/Shared Component/LoginButton";
import RegisterButton from "../../../Components/Shared Component/RegisterButton";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoutButton from "../../../Components/Shared Component/LogoutButton";

import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaCartPlus, FaRegHeart, FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [department, setDepartment] = useState(false);
  const [navbarone, setnavbarone] = useState(false);
  const [services, setServices] = useState(false);
  const [Reports, setReports] = useState(false);

  // Navbar Fixed When scroll all website
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 50
        ? setStickyClass(`fixed top-0 bg-[#F2F6F6]`)
        : setStickyClass("");
    }
  };

  return (
    <div>
      <div className={`navbar z-50 top-0 pt-3 pb-3 lg:px-60  ${stickyClass}`}>
        <div className="navbar-start ml-7 md:ml-0">
          <div className="dropdown font-poppins top-0 z-50">
            <div className="drawer lg:hidden">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button lg:hidden"
                >
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <AiOutlineMenu className="text-2xl font-bold"></AiOutlineMenu>
                  </div>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-2"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="p-4 w-72 min-h-full bg-base-200 text-base-content">
                  {/* Sidebar content here */}
                  <NavLink to="/">
                    <li className="hover:text-[#0E82FD] font-medium text-[#1F2937] border-b-2 pb-2">
                      <a className="flex items-center justify-between">
                        <span>Home</span>
                        <span>
                          <MdKeyboardArrowDown className="text-xl" />
                        </span>
                      </a>
                    </li>
                  </NavLink>
                  {/* Dropdown Nav */}

                  <li className="hover:text-[#0E82FD] font-medium pt-2 pb-2 border-b-2 text-[#1F2937]">
                    <a className="flex items-center justify-between">
                      <span>Shop</span>
                      <span>
                        <MdKeyboardArrowDown className="text-xl" />
                      </span>
                    </a>
                  </li>
                  <li className="hover:text-[#0E82FD] font-medium pt-2 pb-2 border-b-2 text-[#1F2937]">
                    <a className="flex items-center justify-between">
                      <span>Gallery</span>
                      <span>
                        <MdKeyboardArrowDown className="text-xl" />
                      </span>
                    </a>
                  </li>
                  <li className="hover:text-[#0E82FD] font-medium pt-2 pb-2 border-b-2 text-[#1F2937]">
                    <a className="flex items-center justify-between">
                      <span>Contact</span>
                      <span>
                        <MdKeyboardArrowDown className="text-xl" />
                      </span>
                    </a>
                  </li>

                  <li className="hover:text-[#0E82FD] pt-2 pb-2 font-medium text-[#1F2937]">
                    <a>About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <NavLink to="/">
            <div className="flex items-center gap-5 md:gap-3 ml-10 lg:ml-0">
              <img
                className="w-20"
                src="https://i.ibb.co/QpYwXM3/Black-and-White-Modern-Fitness-Logo-New.png"
                alt=""
              />
              <a
                className=" w-64 text-2xl font-garamond font-bold"
                style={{ lineHeight: "1.3", letterSpacing: "1px" }}
              >
                PowerPulse <br /> Fitness
              </a>
            </div>
          </NavLink>
        </div>
        <div className="navbar-center font-poppins hidden lg:flex">
          <ul className=" flex items-center gap-7">
            {/* <NavLink to="/">
              <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
                <a>Home</a>
              </li>
            </NavLink> */}

            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>Shop</a>
            </li>

            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>WEIGHTS</a>
            </li>
            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>BARBELLS</a>
            </li>
            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>RACKS & CAGES</a>
            </li>
            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>BENCHES</a>
            </li>
            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>FLOORING</a>
            </li>
            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>New Arrival</a>
            </li>

            <li className="hover:text-[#0E82FD] font-medium text-[#1F2937]">
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-5">
            <FaRegUser className="text-2xl " />
            <FaRegHeart className="text-2xl " />
            <FaCartPlus className="text-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
