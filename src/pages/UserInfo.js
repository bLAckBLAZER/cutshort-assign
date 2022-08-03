import { ButtonPrimary, Input } from "../components";

export const UserInfo = () => {
  return (
    <main className="mt-16 flex flex-col items-center">
      <h1 className=" text-3xl font-bold mb-4">
        Welcome! First things first...
      </h1>
      <p className="text-slate-400">You can always change them later.</p>
      <form className="flex flex-col w-full mx-4 mt-8">
        <label for="" className="mb-2 text-sm">
          Full Name
        </label>
        <Input placeholder="Steve Jobs" type="text" otherClasses=" text-sm" />
        <label for="" className="mt-4 mb-2  text-sm">
          Display Name
        </label>
        <Input placeholder="Steve" type="text" otherClasses=" text-sm" />
        <ButtonPrimary text="Create Workspace" otherClasses="mt-6 text-sm" />
      </form>
    </main>
  );
};
