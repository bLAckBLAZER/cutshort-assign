import { ButtonPrimary, Input } from "../components";

export const UserInfo = ({ setCurrentPage, userDetails, setUserDetails }) => {
  return (
    <main className="mt-16 flex flex-col items-center w-full">
      <h1 className=" text-3xl font-bold mb-4">
        Welcome! First things first...
      </h1>
      <p className="text-slate-400">You can always change them later.</p>
      <form
        className="flex flex-col w-1/2 mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentPage((currPage) => currPage + 1);
        }}
      >
        <label className="mb-2 text-sm">Full Name</label>
        <Input
          placeholder="Steve Jobs"
          type="text"
          otherClasses=" text-sm"
          text={userDetails.fullName}
          required={true}
          onChangeHandler={(e) =>
            setUserDetails({ ...userDetails, fullName: e.target.value })
          }
        />
        <label className="mt-4 mb-2  text-sm">Display Name</label>
        <Input
          placeholder="Steve"
          type="text"
          otherClasses=" text-sm"
          text={userDetails.displayName}
          required={true}
          onChangeHandler={(e) =>
            setUserDetails({ ...userDetails, displayName: e.target.value })
          }
        />
        <ButtonPrimary text="Create Workspace" otherClasses="mt-6 text-sm" />
      </form>
    </main>
  );
};
