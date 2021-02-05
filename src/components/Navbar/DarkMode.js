import { SunSvg, MoonSvg } from "./index";

const DarkMode = ({ isDark, onClickHandler }) => {
  return (
    <div
      className="h-8 w-8 flex justify-center items-center border border-border rounded-md tracking-widest uppercase text-xs cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-colors duration-500 ml-2"
      onClick={onClickHandler}
    >
      {isDark ? <SunSvg /> : <MoonSvg />}
    </div>
  );
};

export default DarkMode;
