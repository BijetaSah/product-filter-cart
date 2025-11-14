function FilterCategory({ selectedCategory, onSelectCategory }) {
  const categories = ["All", "Electronics", "Books", "Clothing"];

  return (
    <div>
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onSelectCategory(cat)}
          className={`${cat === selectedCategory ? "text-blue-500" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
