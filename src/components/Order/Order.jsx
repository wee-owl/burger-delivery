//import PropTypes from "prop-types";
import { orderList } from "../../utils/orderList";
import OrderGoods from "../OrderGoods/OrderGoods";
import style from "./Order.module.css";


function Order() {
  return (
    <div className={style.order}>
      <section className={style.order__wrapper}>
        <div className={style.order__header} tabIndex="0" role="button">
          <h2 className={style.order__title}>Корзина</h2>
          <span className={style.order__count}>4</span>
        </div>

        <div className={style.order__wrap_list}>
          <ul className={style.order__list}>
            {
              orderList.map((item, i) => <OrderGoods title={item} key={i}/>)
            }
          </ul>

          <div className={style.order__total}>
            <p>Итого</p>
            <p>
              <span className={style.order__amount}>1279</span>
              <span className={style.currency}>₽</span>
            </p>
          </div>

          <button className={style.order__submit}>Оформить заказ</button>

          <div className={style.order__apeal}>
            <p className={style.order__text}>Бесплатная доставка</p>
            <button className={style.order__close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Order;

// Order.propTypes = {
//   className: PropTypes.string.isRequired,
// };