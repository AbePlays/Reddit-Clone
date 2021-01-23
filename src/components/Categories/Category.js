export default function Category(props) {
  return (
    <div
      className={`flex items-center cursor-pointer px-3 py-1 rounded-full ${
        props.isSelected && "bg-gray-100"
      }`}
      {...props}
    >
      {props.children}
    </div>
  );
}
