import PropTypes from "prop-types";
import { useState } from "react";
import style from "./Count.module.css";


function Count({count}) {
  const [state, setState] = useState(count);

  const addCount = () => {
    setState(state + 1);
  };

  const removeCount = () => {
    if (state > 1) setState(state - 1);
  };


  return (
    <div className={style.count}>
      <button className={style.count__minus} onClick={removeCount} disabled={state === 1}>-</button>
      <p className={style.count__amount}>{state}</p>
      <button className={style.count__plus} onClick={addCount}>+</button>
    </div>
  );
}

export default Count;

Count.propTypes = {
  count: PropTypes.string.isRequired,
};