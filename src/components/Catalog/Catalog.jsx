import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";
import Order from "../Order/Order";
import Container from "../Container/Container";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import style from "./Catalog.module.css";


function Catalog() {
  const { products } = useSelector(state => state.product);
  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();
  const title = category[activeCategory]?.rus;

  useEffect(() => {
    if (!category.length) return;
    dispatch(productRequestAsync(category[activeCategory].title));
  }, [activeCategory, category, dispatch]);


  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order />
        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>{title}</h2>
          <div className={style.catalog__wrap_list}>
          {
            products.length ?
            <ul className={style.catalog__list}>
              { 
                products.map(item => (
                  <li className={style.catalog__item} key={item.id}>
                    <CatalogProduct item={item}/>
                  </li>
                ))
              }
            </ul> :
            <p>К сожалению товаров данной категории пока нет.</p>
          }
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Catalog;