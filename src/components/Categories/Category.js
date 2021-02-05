const Category = (props) => {
  const { isSelected, ...rest } = props;

  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-1 rounded-full transition-colors duration-500 ${
        isSelected
          ? "text-primary dark:text-white border"
          : "text-text-primary dark:text-white-dark hover:text-primary dark:hover:text-primary "
      }`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Category;
