import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { API_URL } from "../../utils/const";
import { addProduct } from "../../store/order/orderSlice";
import style from "./CatalogProduct.module.css";


function CatalogProduct({ item }) {
  const dispatch = useDispatch();
  const addCount = (e) => {
    e.preventDefault();
    dispatch(addProduct({id: item.id}))
  };


  return (
    <article className={style.product}>
      <img src={`${API_URL}/${item.image}`} alt={item.title} className={style.product__image} />
      <p className={style.product__price}>
        {item.price}
        <span className={style.currency}>&nbsp;₽</span>
      </p>
      <h3 className={style.product__title}>
        <button className={style.product__detail}>{item.title}</button>
      </h3>
      <p className={style.product__weight}>{item.weight}г</p>
      <button 
        className={style.product__add} 
        type="button"
        onClick={addCount}
      >
        Добавить
      </button>
    </article>
  );
}

export default CatalogProduct;

CatalogProduct.propTypes = {
  item: PropTypes.object.isRequired,
};