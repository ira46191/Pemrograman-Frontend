// import { Link } from "react-router-dom";
// import styles from "./Navbar.module.css";
import StyledNavbar from "./Navbar.styled";
import StyledLink from "../UI/StyledLink";

function Navbar() {
  return (
    <StyledNavbar>
      <div> 
        <nav>
          <h1>Movie App</h1>
          <main>
            <ul>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/create">Add Movie</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/popular">Popular</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/now">Now Playing</StyledLink>
              </li>
              <li>
                <StyledLink to="/movie/top">Top Rated</StyledLink>
              </li>
            </ul>
          </main>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
