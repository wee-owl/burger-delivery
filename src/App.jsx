import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Provider store={store}>
      <Header className="header__container"/>
      <main>
        <Navigation className="navigation__container" />
        <Catalog />
      </main>
      <Footer />
    </Provider>
  );
}

export default App;