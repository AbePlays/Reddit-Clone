const Wrapper = ({ children }) => {
  return (
    <div
      className="
    bg-background-primary-light dark:bg-background-primary-dark 
    text-text-primary dark:text-white-dark
    px-2 py-4 
    min-h-screen
    transition-colors duration-500
    "
    >
      <div className="max-w-xl mx-auto">{children}</div>
    </div>
  );
};

export default Wrapper;
