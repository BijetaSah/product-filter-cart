import ProductItem from "./ProductItem";

function Products({ products, onCartTogggleView }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-40 px-4">
      {products.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
          onToggleCartView={onCartTogggleView}
        />
      ))}
    </div>
  );
}

export default Products;
