import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My first product",
    description: "My first product",
  },
  {
    id: "p2",
    price: 5,
    title: "My second product",
    description: "My second product",
  },
  {
    id: "p3",
    price: 10,
    title: "My third product",
    description: "My third product",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
