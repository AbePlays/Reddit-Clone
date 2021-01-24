const Category = (props) => {
  const { isSelected, ...rest } = props;

  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-1 rounded-full ${
        isSelected && "bg-gray-100"
      }`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Category;
