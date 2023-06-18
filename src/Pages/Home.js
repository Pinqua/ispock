import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Card from "../Components/Card";
import ADS from "../images/ADS.svg";
import pipelineStatus from "../images/pipelineStatus.svg";
import dataVisualisation from "../images/dataVisualisation.svg";
import activeInactive from "../images/active-inactive.svg";
import info from "../images/info.svg";

function Home() {
  const [showSideBar, setShowSideBar] = useState(true);
  return (
    <div className="bg-neutral-100 w-full h-screen">
      <NavBar openSideBar={() => setShowSideBar(true)} />
      <div className="flex">
        <SideBar
          showSideBar={showSideBar}
          closeSideBar={() => setShowSideBar(false)}
        />
        <div className="p-12 space-y-4 m:space-y-0 sm:space-y-12 flex-1">
          <div className="flex space-y-4 sm:space-y-0 flex-col sm:flex-row  sm:justify-between sm:space-x-8">
            <Card img={pipelineStatus} heading="Pipeline Status" />
            <Card img={ADS} heading="ADS" />
          </div>
          <Card img={dataVisualisation} heading="Data Visualisation" />
          <div className="flex space-y-4 sm:space-y-0 flex-col sm:flex-row  sm:justify-between sm:space-x-8">
            <Card img={activeInactive} heading="Active/Inactive Sensors" />
            <Card
              img={info}
              heading="Information about the product"
              imgClassName="h-4 md:h-6 lg:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
