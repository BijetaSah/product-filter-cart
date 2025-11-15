import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getTotalQuantity } from "../features/cart/cartSlice";

function Navbar({ onToggleCartView }) {
  const totalCartQuantity = useSelector(getTotalQuantity);
  return (
    <header className="bg-stone-50 p-5 md:px-10 p flex items-center justify-between">
      <h1 className="text-xl text-indigo-950 uppercase font-semibold ">
        Products filter page
      </h1>

      <button
        className="text-2xl text-indigo-50 relative bg-indigo-900 px-4 py-2 rounded-lg cursor-pointer hover:scale-105 transition-scale duration-200"
        onClick={onToggleCartView}
      >
        <span className="absolute text-white bg-red-600 rounded-full px-3 py-1 text-sm -top-3 font-semibold ">
          {totalCartQuantity}
        </span>
        <FaShoppingCart />
      </button>
    </header>
  );
}

export default Navbar;
