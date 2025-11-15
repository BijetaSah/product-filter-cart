import { useState } from "react";
import { products } from "../features/products/productData";
import FilterCategory from "../features/products/FilterCategory";
import SearchBar from "../features/products/SearchBar";
import ClearButton from "../features/products/ClearButton";
import Products from "../features/products/Products";
import Navbar from "./Navbar";
import Cart from "../features/cart/Cart";

function AppLayout() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuerry, setSearchQuerry] = useState("");

  // cart open and close state for mobile and small screen
  const [cartOpen, setCartOpen] = useState(false);

  // handler function for search querry
  function handleSearchQuerry(value) {
    setSearchQuerry(value);
  }

  // handler function for category
  function handleSelectCategory(category) {
    setSelectedCategory((prev) => (prev === category ? "All" : category));
  }

  // handler function to clearfilter
  function handleClearFilter() {
    setSelectedCategory("All");
    setSearchQuerry("");
  }

  // handler funcition to open and close cart
  function handleCartView() {
    setCartOpen((prev) => !prev);
  }

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter((p) => p.name.toLowerCase().includes(searchQuerry.toLowerCase()));

  return (
    <>
      <Navbar onToggleCartView={handleCartView} />
      <main className="bg-stone-100 py-10 w-full h-full">
        <FilterCategory
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <SearchBar
          searchQuerry={searchQuerry}
          onSearchChange={handleSearchQuerry}
        />
        <ClearButton onClearFilter={handleClearFilter} />
        <Products
          products={filteredProducts}
          onCartTogggleView={handleCartView}
        />
      </main>
      {cartOpen && <Cart onCartTogggleView={handleCartView} />}
    </>
  );
}

export default AppLayout;
