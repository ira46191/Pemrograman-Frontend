// import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";
import StyledLink from "../ui/StyledLink";
// import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <aside>
            <h1>Covid ID</h1>
          </aside>
          <aside>
            <ul>
              <li>
                <StyledLink to="/">Global</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/indonesia">Indonesia</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/provinsi">Provinsi</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/about">About</StyledLink>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
