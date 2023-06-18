import React from "react";
import { ReactComponent as ISpockLogo } from "../images/iSpockLogo.svg";
import { ReactComponent as BurgerMenuIcon } from "../images/burger-menu.svg";

function NavBar({ openSideBar }) {
  return (
    <div className="flex items-center shadow px-8 md:px-12 bg-white border border-slate-100 space-x-2">
      <div className="flex items-center">
        <BurgerMenuIcon
          className="md:hidden object-contain  h-4 w-4"
          onClick={openSideBar}
        />
        <ISpockLogo className="object-contain h-12 md:h-16" />
      </div>
      <div className="flex-1 text-center">
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
          Leak Sense
        </h1>
      </div>
    </div>
  );
}

export default NavBar;
