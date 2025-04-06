export const Header = () => {
  return (
    <header className="flex flex-col mx-4 mt-4 font-inter text-sm leading-4 tracking-tighter">
      <div className="flex justify-between items-center">
        <span className="text-textSec">TIMCHMIELETZKI@GMAIL.COM</span>
        <div className="bg-accentPrim rounded-full w-5 h-5" />
      </div>
      <div className="flex flex-col justify-start items-start mt-4">
        <h1>WIRTSCHAFTSINFORMATIKSTUDENT</h1>
        <div className="flex justify-start items-center">
          <span>MV, DEUTSCHLAND</span>
        </div>
      </div>
    </header>
  );
};
