// import { useState } from "react";
import Hero from "../../components/Hero/Hero";
// import data from "../../utils/constants/provinces";
import Provinces from "../../components/Provinces/Provinces";
import Form from "../../components/Form/Form";

function Provinsi({provinsi, setProvinsi}) {

  return (
    <div>
      <Hero />
      <Provinces provinsi={provinsi}/>
      <Form provinsi={provinsi} setProvinsi={setProvinsi}/>
    </div>
  );
}

export default Provinsi;
