export default function Category(props) {
  return (
    <div className="flex items-center cursor-pointer" {...props}>
      {props.children}
    </div>
  );
}
