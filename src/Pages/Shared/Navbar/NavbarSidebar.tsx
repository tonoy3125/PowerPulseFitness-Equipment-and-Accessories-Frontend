import { MdOutlineCancel } from "react-icons/md";
import "./Sidebar.css";

const NavbarSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <div className="sidebar-content ">
          {/* Close button */}
          <div className="flex items-center justify-between w-auto">
            <h1>Cart</h1>
            <button className="close-btn left-btn" onClick={toggleSidebar}>
              <MdOutlineCancel className="text-black text-2xl" />
            </button>
          </div>
          {/* Sidebar links */}
          <div className="mt-10"></div>
        </div>
      </div>
      <div
        className={`backdrop ${showSidebar ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default NavbarSidebar;
