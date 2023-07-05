import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import axios from "axios";
import Indonesiaa from "../../components/Indonesiaa/Indonesiaa";
import Provinces from "../../components/Provinces/Provinces";
// import data from "../utils/constants/provinces";
import data from "../../utils/constants/provinces"

function Indonesia() {
  const [indonesia, setIndonesia] = useState([]);
  const [provinsi] = useState(data.provinces);

  useEffect(() => {
    getIndonesiaData();
  }, []);

  async function getIndonesiaData() {
    try {
      const response = await axios.get(
        "https://covid-fe-2023.vercel.app/api/indonesia.json"
      );
      const indonesiaData = response.data.indonesia;
      setIndonesia(indonesiaData);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Hero />
      <Indonesiaa indonesia={indonesia} setIndonesia={setIndonesia} title="Indonesia" deskripsi="Data Covid Berdasarkan Indonesia" />
      <Provinces provinsi={provinsi}/>
    </div>
  );
}

export default Indonesia;
