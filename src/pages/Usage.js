import { ButtonPrimary, Input } from "../components";
import IndividualLogo from "../assets/individual.png";
import GroupLogo from "../assets/group.png";

export const Usage = ({ setCurrentPage, userDetails, setUserDetails }) => {
  return (
    <main className="mt-16 flex flex-col items-center w-full">
      <h1 className=" text-3xl font-bold mb-4">
        How are you planning to use Eden?
      </h1>
      <p className="text-slate-400">
        We'll streamline your setup experience accordingly.
      </p>
      <form
        className="flex flex-col w-1/2 mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentPage((currPage) => currPage + 1);
        }}
      >
        <div className="flex gap-8">
          <div
            className={`flex flex-col p-4 border rounded-md flex-1 cursor-pointer ${
              userDetails.usageType === "individual" ? "border-primary" : ""
            }`}
            onClick={() =>
              setUserDetails({ ...userDetails, usageType: "individual" })
            }
          >
            <div>
              <img src={IndividualLogo} alt="" className="mb-2" />
            </div>
            <div className=" font-bold mb-2 text-slate-700">For myself</div>
            <p className="text-sm text-slate-400">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          <div
            className={`flex flex-col p-4 border rounded-md flex-1 cursor-pointer ${
              userDetails.usageType === "group" ? "border-primary" : ""
            }`}
            onClick={() =>
              setUserDetails({ ...userDetails, usageType: "group" })
            }
          >
            <div>
              <img src={GroupLogo} alt="" className="mb-2" />
            </div>
            <div className=" font-bold mb-2 text-slate-700">With my team</div>
            <p className="text-sm text-slate-400">
              Wikis, doc, tasks & projects, all in one place.
            </p>
          </div>
        </div>
        <ButtonPrimary text="Create Workspace" otherClasses="mt-6 text-sm" />
      </form>
    </main>
  );
};
