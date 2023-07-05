import Countainer from "../components/Countainer/Countainer";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <Countainer>{children}</Countainer>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
