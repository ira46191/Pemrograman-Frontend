// import styles from "./Regions.module.css";
// import data from "../../utils/constants/global";
import Regions2 from "../Regions2/Regions2";
import { useEffect, useState } from "react";
import axios from "axios";
import StyledRegions from "./Regions.styled";

function Regions() {
  const [data, setRegionsData] = useState([]);

  useEffect(() => {
    getRegionsData();
  }, []);

  async function getRegionsData() {
    try {
      const response = await axios.get(
        "https://covid-fe-2023.vercel.app/api/global.json"
      );
      const regionsData = response.data.regions;
      setRegionsData(regionsData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledRegions>
      <div>
        <section>
          <h1>Data Berdasarkan Region</h1>
          <h2>Bacaan Pilihan Covid</h2>
          <aside>
            {data.map(function (region2) {
              return <Regions2 region2={region2} />;
            })}
          </aside>
        </section>
      </div>
    </StyledRegions>
  );
}

export default Regions;
