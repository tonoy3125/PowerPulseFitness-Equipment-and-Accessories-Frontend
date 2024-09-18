import { MdOutlineCancel } from "react-icons/md";

const NavbarSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div>
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        <div className="sidebar-content">
          {/* Close button */}
          <button className="close-btn left-btn" onClick={toggleSidebar}>
            <MdOutlineCancel className="text-white text-2xl" />
          </button>
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
