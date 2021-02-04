const Category = (props) => {
  const { isSelected, ...rest } = props;

  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-1 rounded-full hover:text-white transition-colors duration-300 ${
        isSelected && "text-primary dark:text-white border"
      }`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Category;
