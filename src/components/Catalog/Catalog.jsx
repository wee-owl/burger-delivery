import { goodsList } from "../../utils/goodsList";
import Order from "../Order/Order";
import Container from "../Container/Container";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import style from "./Catalog.module.css";


function Catalog() {
  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order />
        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>Бургеры</h2>

          <div className={style.catalog__wrap_list}>
            <ul className={style.catalog__list}>
              {
                goodsList.map((item, i) => (
                  <li className={style.catalog__item} key={i}>
                    <CatalogProduct title={item.title}/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Catalog;