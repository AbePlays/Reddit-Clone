const Wrapper = ({ children }) => {
  return (
    <div className="background-primary px-2 py-4 min-h-screen">
      <div className="max-w-xl mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
