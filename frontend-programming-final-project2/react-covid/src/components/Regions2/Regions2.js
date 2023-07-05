// import styles from "./Regions2.module.css";

import StyledRegion2 from "./Region2.styled";

function Regions2(props) {
  const { region2 } = props;

  return (
    <StyledRegion2>
      <div>
        <aside>
          <h3>{region2.name}</h3>
          <p>Confirmed : {region2.numbers.confirmed}</p>
          <p>Recovered : {region2.numbers.recovered}</p>
          <p>Death : {region2.numbers.death}</p>
        </aside>
      </div>
    </StyledRegion2>
  );
}

export default Regions2;
