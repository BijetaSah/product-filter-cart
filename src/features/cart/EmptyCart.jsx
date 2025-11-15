import { BsCart4 } from "react-icons/bs";
function EmptyCart() {
  return (
    <div className="flex justify-center items-center flex-col">
      <BsCart4 className="bg-stone-100 w-20 text-stone-400 h-20 p-6 rounded-full text-xl" />
      Your cart is empty.
    </div>
  );
}

export default EmptyCart;
