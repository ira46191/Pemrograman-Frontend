// import styles from "./Indonesiaa.module.css";
import Indonesia2 from "../Indonesia2/Indonesia2";
import StyledIndonesiaa from "./Indonesiaa.styled";

function Indonesiaa(props) {
    const {indonesia, title, deskripsi} =  props;
//   const { indonesia, setIndonesia } = props;

//   setIndonesia([...indonesia,]); 
  return (
    <StyledIndonesiaa>
    <div>
      <section>
        <h1>{title}</h1>
        <p>
          {deskripsi}
        </p>
        <aside>
          {indonesia.map(function (indonesia2) {
            return <Indonesia2 indonesia2={indonesia2}/>;
          })}
        </aside>
      </section>
    </div>
    </StyledIndonesiaa>
  );
}

export default Indonesiaa;
