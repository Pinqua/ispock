import React from "react";

const SideBarOption = ({ SideBarOptionIcon, text }) => {
  return (
    <div className="flex hover:bg-cyan-500 space-x-4 items-center px-4 py-2 rounded-md cursor-pointer text-lg transition-colors">
      <SideBarOptionIcon className="object-contain w-6" />
      <p>{text}</p>
    </div>
  );
};

export default SideBarOption;
