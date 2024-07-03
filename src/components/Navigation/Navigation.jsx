import PropTypes from "prop-types";
import { useEffect } from "react";
import { API_URL } from "../../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { categoryRequestAsync, changeCategory } from "../../store/category/categorySlice";
import Container from "../Container/Container";
import style from "./Navigation.module.css";
import classNames from "classnames";


function Navigation({ className }) {
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync());
  }, [dispatch]);


  return (
    <nav className={style.navigation}>
      <Container className={className}>
        <ul className={style.navigation__list}>
          {
            category.map((item, i) => 
              <li className={style.navigation__item} key={item.title}>
                <button 
                  className={classNames(
                    style.navigation__button,
                    activeCategory === i ? style.navigation__button_active : ""
                  )}
                  style={{backgroundImage: `url(${API_URL}/${item.image})`}}
                  onClick={() => {
                    dispatch(changeCategory({indexCategory: i}))
                  }}
                >
                  {item.rus}
                </button>
              </li>
            )
          }
          </ul>
      </Container>
    </nav>
  );
}

export default Navigation;

Navigation.propTypes = {
  className: PropTypes.string.isRequired,
};