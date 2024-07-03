import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";
import OrderGoods from "../OrderGoods/OrderGoods";
import style from "./Order.module.css";


function Order() {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector(state => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [dispatch, orderList.length]);


  return (
    <div className={style.order}>
      <section className={style.order__wrapper}>
        <div className={style.order__header} tabIndex="0" role="button">
          <h2 className={style.order__title}>Корзина</h2>
          <span className={style.order__count}>{totalCount}</span>
        </div>

        <div className={style.order__wrap_list}>
          <ul className={style.order__list}>
            {
              orderGoods.map(item => <OrderGoods item={item} key={item.id}/>)
            }
          </ul>

          <div className={style.order__total}>
            <p>Итого</p>
            <p>
              <span className={style.order__amount}>{totalPrice}</span>
              <span className={style.currency}>&nbsp;₽</span>
            </p>
          </div>

          <button 
            className={style.order__submit} 
            disabled={!orderGoods.length}
            onClick={() => dispatch(openModal())}
          >
            Оформить заказ
          </button>

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