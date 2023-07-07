import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Indonesia from "./pages/movie/Indonesia";
import Provinsi from "./pages/movie/Provinsi";
import About from "./pages/movie/About";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import GlobalStyle from "./components/GlobalStyle";
import { useState } from "react";
import data from "./utils/constants/provinces";

function App() { 
  const [provinsi, setProvinsi] = useState(data.provinces);

  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/indonesia" element={<Indonesia  provinsi={provinsi}/>}></Route>
            <Route path="/movie/provinsi" element={<Provinsi provinsi={provinsi} setProvinsi={setProvinsi} />}></Route>
            <Route path="/movie/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
