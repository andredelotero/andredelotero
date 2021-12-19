import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container">
      <p className="logo">André Gama del Otero - Frontend developer</p>

      <nav>
        {navLinks.map(({ navLinkId, scrollToId }, idx) => (
          <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
        ))}
      </nav>
    </div>
  );
};

export default Nav;
