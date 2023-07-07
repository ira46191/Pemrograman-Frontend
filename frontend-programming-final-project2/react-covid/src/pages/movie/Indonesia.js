import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Indonesiaa from "../../components/Indonesiaa/Indonesiaa";
import Provinces from "../../components/Provinces/Provinces";
// import data from "../utils/constants/provinces";
// import data from "../../utils/constants/provinces"
import ENDPOINT from "../../utils/constants/endpoint";
import Provinsi from "../../components/Provinces/Provinsi";

function Indonesia() {
  const [indonesia, setIndonesia] = useState([]);
  const [provinsi, setProvince] = useState([]);

  useEffect(() => {
    getIndonesiaData();
  }, []);

  async function getIndonesiaData() {
    try {
      const response = await axios.get(ENDPOINT.INDONESIA);
      setIndonesia(response.data.indonesia);
      setProvince(response.data.regions);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Hero />
      <Indonesiaa indonesia={indonesia} setIndonesia={setIndonesia} title="Indonesia" deskripsi="Data Covid Berdasarkan Indonesia" />
      <Provinsi provinsi={provinsi}/>
    </div>
  );
}

export default Indonesia;
