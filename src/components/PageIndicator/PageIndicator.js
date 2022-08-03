// import "./PageIndicator.css";

export const PageIndicator = ({ currentPage = 0, pages }) => {
  const pageIndicators = [];

  const completionPercentage = ((currentPage + 1) / pages) * 100 + "%";

  //   console.log({ currentPage, pages, completionPercentage });

  for (let i = 0; i < pages; i++) {
    pageIndicators.push(
      <div
        className={`rounded-full  w-6 h-6 flex justify-center items-center z-10 p-4 ${
          i <= currentPage
            ? "bg-primary text-white"
            : "bg-white text-slate-400 border border-slate-400"
        }`}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="relative flex w-2/5 mt-16">
      <div className=" w-full bg-slate-400 h-[2px] absolute top-1/2">
        <div
          className=" bg-primary h-[2px]"
          style={{
            width: completionPercentage,
          }}
        ></div>
      </div>
      <div className="flex justify-between flex-1">
        {pageIndicators.map((pageItem) => pageItem)}
        {/* <div className=" rounded-full bg-primary text-white w-6 h-6 flex justify-center items-center z-10">
          1
        </div>
        <div className=" rounded-full bg-white text-slate-400 border border-slate-400 w-6 h-6 flex justify-center items-center z-10 incomplete">
          2
        </div>
        <div className=" rounded-full bg-white text-slate-400 border border-slate-400 w-6 h-6 flex justify-center items-center z-10 incomplete">
          3
        </div>
        <div className=" rounded-full bg-white text-slate-400 border border-slate-400 w-6 h-6 flex justify-center items-center z-10 incomplete">
          4
        </div> */}
      </div>
    </div>
  );
};
