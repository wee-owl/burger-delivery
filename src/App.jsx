import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Navigation from "./components/Navigation/Navigation";
import ModalDelivery from "./components/ModalDelivery/ModalDelivery";


function App() {
  return (
    <Provider store={store}>
      <Header className="header__container"/>
      <main>
        <Navigation className="navigation__container" />
        <Catalog />
      </main>
      <Footer />
      <ModalDelivery />
    </Provider>
  );
}

export default App;