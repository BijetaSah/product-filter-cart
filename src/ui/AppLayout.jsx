import { useState, useEffect } from "react";

import FilterCategory from "../features/products/FilterCategory";
import SearchBar from "../features/products/SearchBar";
import ClearButton from "../features/products/ClearButton";
import Products from "../features/products/Products";
import Navbar from "./Navbar";
import Cart from "../features/cart/Cart";
import Loader from "./Loader";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuerry, setSearchQuerry] = useState("");

  // data fetching
  useEffect(function () {
    async function getProducts() {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Data could not be fetched");
        const data = await res.json();
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    getProducts();
  }, []);

  // cart open and close state for mobile and small screen
  const [cartOpen, setCartOpen] = useState(false);

  // handler function for search querry
  function handleSearchQuerry(value) {
    setSearchQuerry(value);
  }

  // handler function for category
  function handleSelectCategory(category) {
    setSelectedCategory((prev) => (prev === category ? "all" : category));
  }

  // handler function to clearfilter
  function handleClearFilter() {
    setSelectedCategory("all");
    setSearchQuerry("");
  }

  // handler funcition to open and close cart
  function handleCartView() {
    setCartOpen((prev) => !prev);
  }

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "all" ? true : product.category === selectedCategory
    )
    .filter((p) => p.title.toLowerCase().includes(searchQuerry.toLowerCase()));

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
        {isLoading && <Loader />}
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
