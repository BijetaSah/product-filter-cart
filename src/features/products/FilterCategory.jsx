function FilterCategory({ selectedCategory, onSelectCategory }) {
  const categories = [
    "all",
    "electronics",
    "men's clothing",
    "women's clothing",
    "jewelery",
  ];

  return (
    <div className="flex md:gap-4 justify-center mb-5 gap-1">
      {categories.map((cat, i) => (
        <button
          key={i}
          onClick={() => onSelectCategory(cat)}
          className={` lg:px-6 px-2 py-1 rounded-full font-semibold capitalize transition-colors duration-300 cursor-pointer ${
            cat === selectedCategory
              ? "bg-indigo-700 text-white "
              : "bg-stone-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default FilterCategory;
