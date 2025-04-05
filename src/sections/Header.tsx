export const Header = () => {
  return (
    <header className="flex flex-col m-4 text-sm leading-4">
      <div className="flex justify-between items-center">
        <span className="text-textSec">TIM CHMIELETZKI</span>
        <div className="h-5 w-5 rounded-full bg-accentPrim" />
      </div>
      <div className="flex flex-col mt-4 gap-[2px]">
        <h1>WIRTSCHAFTSINFORMATIKSTUDENT</h1>
        <p>MV, DEUTSCHLAND</p>
      </div>
    </header>
  );
};
