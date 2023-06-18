import React from "react";
import SideBarOption from "./SideBarOption";
import { ReactComponent as DashboardIcon } from "../images/dashboard.svg";
import { ReactComponent as SensorIcon } from "../images/sensor.svg";
import { ReactComponent as InsightIcon } from "../images/insight.svg";
import { ReactComponent as AlertIcon } from "../images/alert.svg";
import { ReactComponent as SettingsIcon } from "../images/settings.svg";
import { ReactComponent as LoginIcon } from "../images/login.svg";
import { ReactComponent as CrossIcon } from "../images/cross.svg";

function SideBar({ showSideBar, closeSideBar }) {
  return (
    <div
      className={`${
        showSideBar ? "" : "hidden"
      } md:block fixed inset-y-0 w-[280px] md:static bg-white px-4 py-12 shadow-lg border border-slate-100 sideBar h-full`}
    >
      <div className="flex flex-col h-full">
        <div className="space-y-4 flex-1">
          <SideBarOption SideBarOptionIcon={DashboardIcon} text="Dashboard" />
          <SideBarOption SideBarOptionIcon={SensorIcon} text="Sensor" />
          <SideBarOption SideBarOptionIcon={InsightIcon} text="Insight" />
          <SideBarOption SideBarOptionIcon={AlertIcon} text="Alert" />
        </div>
        <div className="space-y-4 border-t-2 border-gray-200 py-8">
          <SideBarOption SideBarOptionIcon={SettingsIcon} text="Settings" />
          <SideBarOption SideBarOptionIcon={LoginIcon} text="Login" />
        </div>
      </div>
      <div className="absolute top-4 right-4 md:hidden">
        <CrossIcon
          className="text-xl object-contain cursor-pointer"
          onClick={closeSideBar}
        />
      </div>
    </div>
  );
}

export default SideBar;
