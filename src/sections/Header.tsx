import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <header
      className={`${inter.className} tracking-tight flex flex-col m-4 text-sm leading-4`}
    >
      <div className="flex justify-between items-center">
        <span className="text-textSec">TIM CHMIELETZKI</span>
        <div className="h-5 w-5 rounded-full bg-accentPrim" />
      </div>
      <div className="flex flex-col justify-start items-start mt-4 gap-[2px]">
        <h1>WIRTSCHAFTSINFORMATIKSTUDENT</h1>
        <div className="flex items-center justify-start">
          <span>MV, GERMANY</span>
        </div>
      </div>
    </header>
  );
};
