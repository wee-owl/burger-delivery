import PropTypes from "prop-types";
import Count from "../Count/Count";
import style from "./OrderGoods.module.css";


function OrderGoods({title}) {
  return (
    <li className={style.order__item}>
      <img className={style.order__image} src="img/burger_1.jpg" alt={title} />

      <div className={style.goods}>
        <h3 className={style.goods__title}>{title}</h3>

        <p className={style.goods__weight}>512г</p>

        <p className={style.goods__price}>1279
          <span className={style.currency}>₽</span>
        </p>
      </div>

      <Count count={1}/>
    </li>
  );
}

export default OrderGoods;

OrderGoods.propTypes = {
  title: PropTypes.string.isRequired,
};