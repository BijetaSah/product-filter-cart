import ProductItem from "./ProductItem";

function Products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Products;
