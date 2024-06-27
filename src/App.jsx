import Header from "./components/Header/Header";
import Container from "./components/Container/Container";


function App() {

  return (
    <>
      <Header className="header__container"/>
      <main>
        <nav>
          <Container className="navigation__container"/>
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;