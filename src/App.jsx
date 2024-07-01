import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <>
      <Header className="header__container"/>
      <main>
        <Navigation className="navigation__container" />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}

export default App;