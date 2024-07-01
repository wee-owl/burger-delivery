import PropTypes from "prop-types";
import style from "./CatalogProduct.module.css";


function CatalogProduct({ title }) {
  return (
    <article className={style.product}>
      <img src="img/photo-5.jpg" alt={title} className={style.product__image} />
      <p className={style.product__price}>
        689
        <span className={style.currency}>
        ₽
        </span>
      </p>
      <h3 className={style.product__title}>
        <button className={style.product__detail}>{title}</button>
      </h3>
      <p className={style.product__weight}>520г</p>
      <button className={style.product__add} type="button">Добавить</button>
    </article>
  );
}

export default CatalogProduct;

CatalogProduct.propTypes = {
  title: PropTypes.string.isRequired,
};