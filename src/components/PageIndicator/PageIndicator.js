export const PageIndicator = ({ currentPage = 0, pages }) => {
  const pageIndicators = [];

  const completionPercentage = ((currentPage + 1) / pages) * 100 + "%";

  for (let i = 0; i < pages; i++) {
    pageIndicators.push(
      <div
        key={i}
        className={`rounded-full  w-6 h-6 flex justify-center items-center z-10 p-4 ${
          i <= currentPage
            ? "bg-primary text-white"
            : "bg-white text-slate-400 border border-slate-300"
        }`}
      >
        {i + 1}
      </div>
    );
  }

  return (
    <div className="relative flex w-2/5 mt-16 sm:w-full">
      <div className=" w-full bg-slate-300 h-[1px] absolute top-1/2">
        <div
          className=" bg-primary h-[1px]"
          style={{
            width: completionPercentage,
          }}
        ></div>
      </div>
      <div className="flex justify-between flex-1">
        {pageIndicators.map((pageItem) => pageItem)}
      </div>
    </div>
  );
};
