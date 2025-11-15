import { IoClose } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalPrice } from "./cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { formatCurrency } from "../../helpers";

function Cart({ onCartTogggleView }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(getTotalPrice);

  function handleOrderNow() {
    dispatch(clearCart());
    onCartTogggleView();
  }
  return (
    <>
      {/* overlay */}
      <div
        className="fixed inset-0 bg-black opacity-40 bg-opacity-40 z-40"
        onClick={onCartTogggleView}
      ></div>

      <div className="fixed top-0 right-0 w-80 md:w-100 bg-white h-full shadow-xl pt-5 overflow-y-auto z-50 flex   flex-col gap-5">
        {/* close button */}
        <button
          onClick={onCartTogggleView}
          className="text-xl cursor-pointer px-5"
        >
          <IoClose />
        </button>

        {/* cart content */}
        <div className="px-5">
          {cart.length === 0 ? (
            <EmptyCart />
          ) : (
            <ul className="space-y-5">
              {cart.map((item) => (
                <CartItem cartItem={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <button
            className=" bg-green-600 hover:bg-green-700 mt-auto py-3 text-white"
            onClick={handleOrderNow}
          >
            Order now{" "}
            <span className="font-bold">{formatCurrency(totalCartPrice)}</span>
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;
