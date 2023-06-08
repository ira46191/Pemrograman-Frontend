// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import PopularMovie from "./pages/movie/PopularMovie";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRatedMovie from "./pages/movie/TopRatedMovie";
import Layout from "./Layout";
import theme from "./components/Theme/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";

function App() {
  /**
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <>
      {/*
       * Setiap halaman dibungkus olah Layout.
       * Layout digunakan oleh setiap halaman yang dirender.
       */}

      {/* Bungkus App dengan Theme Styled Component */}
      <ThemeProvider theme={theme}>
        {/* Menggunakan Global Style Component */}
        <GlobalStyle />
        <Layout>
          {/*
           * Membuat Routing.
           * Bungkus Routing menggunakan Routes.
           * Buat Routing menggunakan Route.
           */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

// pertemuan4
// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
