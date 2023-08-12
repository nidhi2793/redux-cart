import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first Book", description: "firstbook" },
  { id: "p2", price: 8, title: "My second Book", description: "secondbook" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
