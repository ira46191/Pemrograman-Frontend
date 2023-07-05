import StyledFooter from "./Footer.styled";

// import styles from "./Footer.module.css";
function Footer() {
  return (
    <StyledFooter>
      <div>
        <footer>
          <h2>
            Covid ID <br />
            <p>Developed by Ira Kusuma Wardani</p>
          </h2>
          <aside>
            <ul>
              <li>Global</li>
              <li>Indonesia</li>
              <li>Provinsi</li>
              <li>About</li>
            </ul>
          </aside>
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
