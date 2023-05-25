// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
//pertemuan 5
import Home from './pages/Home';
import CreateMovie from './pages/movie/Create';
import PopularMovie from './pages/movie/PopularMovie';
import NowPlayingMovie from './pages/movie/NowPlaying';
import TopRatedMovie from './pages/movie/TopRatedMovie';
import Layout from './Layout';
// pertemuan 4
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/Main';

function App(){
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/create' element={<CreateMovie />} />
          <Route path='/movie/popular' element={<PopularMovie />} />
          <Route path='/movie/now' element={<NowPlayingMovie />} />
          <Route path='/movie/top' element={<TopRatedMovie />} />
        </Routes>
      </Layout>
    </div>
  )

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
