import { useContext } from "react";
import { NavContext } from "../../context/NavContext";

const NavLink = ({ navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? "activeClass" : "notActive"}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;
