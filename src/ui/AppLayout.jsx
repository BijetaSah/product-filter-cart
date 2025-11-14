import { useState } from "react";
import { products } from "../features/products/productData";
import FilterCategory from "../features/products/FilterCategory";
import SearchBar from "../features/products/SearchBar";
import ClearButton from "../features/products/ClearButton";
import Products from "../features/products/Products";

function AppLayout() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuerry, setSearchQuerry] = useState("");

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

  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter((p) => p.name.toLowerCase().includes(searchQuerry.toLowerCase()));

  return (
    <main>
      <FilterCategory
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <SearchBar
        searchQuerry={searchQuerry}
        onSearchChange={handleSearchQuerry}
      />
      <ClearButton onClearFilter={handleClearFilter} />
      <Products products={filteredProducts} />
    </main>
  );
}

export default AppLayout;
