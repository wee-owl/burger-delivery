import PropTypes from "prop-types";
import { API_URL } from "../../utils/const";
import Count from "../Count/Count";
import style from "./OrderGoods.module.css";


function OrderGoods({ item }) {
  return (
    <li className={style.order__item}>
      <img className={style.order__image} src={`${API_URL}/${item.image}`} alt={item.title} />

      <div className={style.goods}>
        <h3 className={style.goods__title}>{item.title}</h3>

        <p className={style.goods__weight}>{item.weight}г</p>

        <p className={style.goods__price}>{item.price}
          <span className={style.currency}>&nbsp;₽</span>
        </p>
      </div>

      <Count count={item.count} id={item.id}/>
    </li>
  );
}

export default OrderGoods;

OrderGoods.propTypes = {
  item: PropTypes.object.isRequired,
};