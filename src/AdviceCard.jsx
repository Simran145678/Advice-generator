import React from "react";
import divider from "./assets/images/pattern-divider-desktop.svg";
export default function AdviceCard({
  advice,
  handleClick,
  loading,
  announcement,
}) {
  return (
    <div className="relative p-10 flex flex-col items-center bg-darkGrayishBlue w-full rounded-xl mx-6 md:w-3/4 xl:w-1/3 md:mx-0">
      <small className="text-neonGreen font-bold text-xs tracking-widest ">
        ADVICE # {advice.id}
      </small>
      {loading && (
        <p className="text-lightCyan text-2xl font-bold text-center py-6">
          Click the dice below for the Advice
        </p>
      )}
      <p
        aria-live="polite"
        className="text-lightCyan text-2xl font-bold text-center py-6"
      >
        {advice.advice}
      </p>

      <button
        className="absolute bg-neonGreen p-4 rounded-full -bottom-6"
        onClick={() => handleClick()}
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
      </button>

      <div className="flex justify-center h-full w-full mb-6">
        <img src={divider} aria-hidden="true"></img>
      </div>
      <p aria-live="polite" className="sr-only absolute -left-96">
        {announcement}
      </p>
    </div>
  );
}
