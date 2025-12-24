import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../helpers";
import { addItem, getItemIsInCart } from "../cart/cartSlice";

function ProductItem({ product, onToggleCartView }) {
  const dispatch = useDispatch();
  const { image, title, price, category, id } = product;
  const isInCart = useSelector(getItemIsInCart(id));

  function handleAddToCart() {
    const quantity = 1;
    const newItem = {
      id,
      image,
      quantity,
      title,
      price,
      category,
      totalPrice: price * quantity,
    };

    dispatch(addItem(newItem));
  }

  return (
    <div className="shadow-lg rounded-xl flex flex-col bg-white hover:translate-y-1 trasnition-translate duration-200 ">
      <img
        src={image}
        alt={`Image of ${title}`}
        className="w-40 h-40 self-center py-2"
      />

      <div className="flex justify-between px-4 py-2">
        <h2 className="text-lg font-semibold">
          {title?.split(" ")?.slice(0, 4)?.join(" ")}
        </h2>
        <span className="bg-indigo-50 text-indigo-600 text-sm px-4 py-1 lowercase rounded-full">
          {category}
        </span>
      </div>
      <p className="text-xl font-semibold text-indigo-600 px-4 py-3">
        {formatCurrency(price)}{" "}
      </p>

      {isInCart ? (
        <button
          className="bg-green-600 text-white py-3 hover:bg-green-700 font-semibold cursor-pointer mt-auto"
          onClick={onToggleCartView}
        >
          Go to cart
        </button>
      ) : (
        <button
          className="bg-green-600 text-white py-3 hover:bg-green-700 font-semibold cursor-pointer mt-auto"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      )}
    </div>
  );
}

export default ProductItem;
