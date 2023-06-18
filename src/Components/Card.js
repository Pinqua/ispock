import React from "react";

function Card({ heading, img, imgClassName, className }) {
  return (
    <div
      className={`flex shadow-lg md:max-h-60 max-h-40 rounded-xl p-4 lg:p-6 bg-white space-x-12 justify-between border border-slate-100 cursor-pointer hover:scale-[1.02] overflow-hidden transition-transform ${
        className ?? ""
      } `}
    >
      <h2 className="font-bold text-xs  lg:text-xl xl:text-2xl flex-1">
        {heading}
      </h2>
      <div className="max-w-[50%] my-auto">
        <img
          className={`object-contain h-full w-full ml-auto ${
            imgClassName ?? ""
          }`}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
