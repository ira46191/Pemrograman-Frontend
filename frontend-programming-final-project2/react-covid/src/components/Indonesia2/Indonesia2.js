// import styles from "./Indonesia2.module.css"

import StyledIndonesia2 from "./Indonesia2.styled";

function Indonesia2(props) {
  // Destructing object props
  const { indonesia2 } = props;
  return (
    <StyledIndonesia2>
      <div>
        <nav>
          <h3>{indonesia2.status}</h3>
          <p>{indonesia2.total}</p>
        </nav>
      </div>
    </StyledIndonesia2>
  );
}
export default Indonesia2;
