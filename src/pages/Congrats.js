import { useState } from "react";
import { ButtonPrimary, Input } from "../components";
import CompleteLogo from "../assets/complete.png";

export const Congrats = ({ setCurrentPage }) => {
  return (
    <main className="mt-16 flex flex-col items-center w-full">
      <div>
        <img src={CompleteLogo} alt="" className="mb-8" />
      </div>
      <h1 className=" text-3xl font-bold mb-4">Congratulations, Eren!</h1>
      <p className="text-slate-400">
        You have completed onboarding, you can start using the Eden!
      </p>

      <ButtonPrimary text="Launch Eden" otherClasses="mt-6 text-sm w-1/2" />
    </main>
  );
};
