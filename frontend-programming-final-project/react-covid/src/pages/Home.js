import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";
import Hero from "../components/Hero/Hero";
import Indonesia from "../components/Indonesia/Indonesia";
import Navbar from "../components/Navbar/Navbar";
import Provinces from "../components/Provinces/Provinces";
import data from "../utils/constants/provinces";
import { useState } from "react";

function Main() {
  const [provinsi, setProvinsi] = useState(data.provinces);
  // const [indonesia, setIndonesia] = useState(data);
  return (
    <main>
      <Hero />
      <Indonesia  />
      <Provinces provinsi={provinsi} setProvinsi={setProvinsi}/>
      <Form provinsi={provinsi} setProvinsi={setProvinsi}/>
    </main>
  );
}
 
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
