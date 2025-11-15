import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { formatCurrency } from "../../helpers";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./cartSlice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { name, totalPrice, quantity, id } = cartItem;
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center justify-between">
        <h4 className="">{name}</h4>
        <p className="font-bold ">{formatCurrency(totalPrice)}</p>

        <div className="flex items-center gap-4">
          <button
            className="text-white p-1 text-sm rounded-full bg-indigo-700"
            onClick={() => dispatch(decreaseItemQuantity(id))}
          >
            <FaMinus />
          </button>
          <span className="font-semibold text-sm ">{quantity}</span>
          <button
            className="text-white p-1 text-sm rounded-full bg-indigo-700"
            onClick={() => dispatch(increaseItemQuantity(id))}
          >
            <FaPlus />
          </button>
          <button
            className="text-red-600 text-xl cursor-pointer"
            onClick={() => dispatch(deleteItem(id))}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
