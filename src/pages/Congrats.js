import { ButtonPrimary, Input } from "../components";
import CompleteLogo from "../assets/complete.png";

export const Congrats = ({ userDetails }) => {
  return (
    <main className="mt-16 flex flex-col items-center w-full">
      <div>
        <img src={CompleteLogo} alt="" className="mb-8" />
      </div>
      <h1 className=" text-3xl font-bold mb-4 sm:text-center">{`Congratulations, ${userDetails.displayName}!`}</h1>
      <p className="text-slate-400 sm:text-center">
        You have completed onboarding, you can start using the Eden!
      </p>

      <ButtonPrimary
        text="Launch Eden"
        otherClasses="mt-6 text-sm w-1/2"
        onClickHandler={() => console.log(userDetails)}
      />
    </main>
  );
};
