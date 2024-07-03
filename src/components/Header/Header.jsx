import PropTypes from "prop-types";
import Container from "../Container/Container";
import logo from "../../assets/img/logo.svg";
import style from "./Header.module.css";


function Header({ className }) {
  return (
    <header className={style.header}>
      <Container className={className}>
        <img className={style.header__logo} src={logo} alt="Логотип YourMeal" />
        <div className={style.header__wrapper}>
          <h1 className={style.header__title}>
            <span>Только самые</span>
            <span className={style.header__red}> сочные бургеры!</span>
          </h1>
          <p className={style.header__appeal}>Бесплатная доставка от 599₽</p>
        </div>
      </Container>
    </header>
  );
}

export default Header;

Header.propTypes = {
  className: PropTypes.string.isRequired,
};