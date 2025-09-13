"use client";

import { useState } from "react";
import { Cable } from "@/components/test/Cable";
import { Clock } from "@/components/test/Clock";
import { Lamb } from "@/components/test/Lamb";
import { Macbook } from "@/components/test/Macbook";
import { Map } from "@/components/test/Map";
import { CircleMap } from "@/components/test/CircleMap";

const Test = () => {
  const [activeTab, setActiveTab] = useState("cable");

  const tabs = [
    { id: "cable", name: "Cable", component: <Cable /> },
    { id: "clock", name: "Clock", component: <Clock /> },
    { id: "lamb", name: "Lamb", component: <Lamb /> },
    { id: "macbook", name: "Macbook", component: <Macbook /> },
    { id: "map", name: "Map", component: <Map /> },
    { id: "circleMap", name: "Circle Map", component: <CircleMap /> },
  ];

  return (
    <div className="flex w-full justify-center items-center flex-col gap-8 py-8">
      <div className="flex space-x-1 mb-6 justify-center p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 cursor-pointer rounded-md transition-colors ${
              activeTab === tab.id
                ? "bg-white shadow-sm text-blue-600 font-medium"
                : "white hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="flex w-[30rem]">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default Test;
