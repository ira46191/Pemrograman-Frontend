import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import Regions from "../components/Regions/regions";
import axios from "axios";
import Indonesiaa from "../components/Indonesiaa/Indonesiaa";
import ENDPOINT from "../utils/constants/endpoint";


function Home() {
  const [indonesia, setIndonesia] = useState([]);

  useEffect(() => {
    getGlobalData();
  }, []);

  async function getGlobalData() {
    try {
      const response = await axios.get(ENDPOINT.GLOBAL);
      setIndonesia(response.data.global);
    } catch (error) {
      console.error(error);
    }
  } 
  return (
    <>
      <Hero />
      <Indonesiaa indonesia={indonesia} setIndonesia={setIndonesia} title="Global" deskripsi="Data Covid Berdasarkan Global" />
      <Regions />
    </>
  );
}

export default Home;
