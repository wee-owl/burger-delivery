import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice";
import style from "./Count.module.css";


function Count({count, id}) {
  const dispatch = useDispatch();
  const addCount = () => dispatch(addProduct({id}));
  const removeCount = () => dispatch(removeProduct({id}));


  return (
    <div className={style.count}>
      <button className={style.count__minus} onClick={removeCount}>-</button>
      <p className={style.count__amount}>{count}</p>
      <button className={style.count__plus} onClick={addCount}>+</button>
    </div>
  );
}

export default Count;

Count.propTypes = {
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};