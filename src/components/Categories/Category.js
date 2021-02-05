const Category = (props) => {
  const { isSelected, ...rest } = props;

  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-1 rounded-full transition-colors duration-300 ${
        isSelected
          ? "text-primary dark:text-white border"
          : "hover:text-black dark:hover:text-white"
      }`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Category;
