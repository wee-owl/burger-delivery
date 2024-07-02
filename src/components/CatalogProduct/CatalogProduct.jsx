import PropTypes from "prop-types";
import { API_URL } from "../../const";
import style from "./CatalogProduct.module.css";


function CatalogProduct({ item }) {
  return (
    <article className={style.product}>
      <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.product__image} />
      <p className={style.product__price}>
        {item.price}
        <span className={style.currency}>
        ₽
        </span>
      </p>
      <h3 className={style.product__title}>
        <button className={style.product__detail}>{item.title}</button>
      </h3>
      <p className={style.product__weight}>{item.weight}г</p>
      <button className={style.product__add} type="button">Добавить</button>
    </article>
  );
}

export default CatalogProduct;

CatalogProduct.propTypes = {
  item: PropTypes.object.isRequired,
};