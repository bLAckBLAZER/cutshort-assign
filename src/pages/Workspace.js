import { useState } from "react";
import { ButtonPrimary, Input } from "../components";

export const Workspace = ({ setCurrentPage }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  return (
    <main className="mt-16 flex flex-col items-center w-full">
      <h1 className=" text-3xl font-bold mb-4">
        Let's set up a home for all your work
      </h1>
      <p className="text-slate-400">
        You can always create another workspace later.
      </p>
      <form
        className="flex flex-col w-1/2 mt-8"
        onSubmit={(e) => {
          e.preventDefault();
          setCurrentPage((currPage) => currPage + 1);
        }}
      >
        <label for="" className="mb-2 text-sm">
          Workspace Name
        </label>
        <Input
          placeholder="Eden"
          type="text"
          otherClasses=" text-sm"
          text={workspaceName}
          required={true}
          onChangeHandler={(e) => setWorkspaceName(e.target.value)}
        />
        <label for="" className="mt-4 mb-2  text-sm">
          Workspace URL <span className="text-slate-400">(optional)</span>
        </label>
        <Input
          placeholder="www.eden.com/    Example"
          type="email"
          otherClasses=" text-sm"
          text={workspaceUrl}
          onChangeHandler={(e) => setWorkspaceUrl(e.target.value)}
        />
        <ButtonPrimary text="Create Workspace" otherClasses="mt-6 text-sm" />
      </form>
    </main>
  );
};
