import React, { useContext, useEffect, useState } from "react";
import BatteryTab from "./BatteryTab";
import { GlobalContext } from "../context/global-context";
import { HomeContext } from "../context/home-context";
import InverterTab from "./InverterTab";
import LoadTab from "./LoadTab";
import SolarPanelSCCTab from "./SolarPanelSCCTab";
import {
  wireCalculation,
  wireTotalPrice,
  dodComputation,
  seriesParallelBattCompute,
  batterycomputation,
  pvcomputation,
  totalPriceCompute,
} from "../Caculations";
import WireSizingTab from "./WireSizingTab";

const TabCalc = () => {
  const {
    loadtab,
    invertertab,
    batterytab,
    scctab,
    solarpanelstab,
    wiresize,
    dodTable,
    seriesParallelTable,
    setWireSize,
    setDOD,
    setSP,
  } = useContext(HomeContext);
  const {
    voltage,
    scc,
    solarpanel,
    totalbattcapacity,
    overallprice,
    setSCCGlobal,
    setBatteryCap,
    setSolarPanel,
    setOverallPrice,
  } = useContext(GlobalContext);
  const [pvState, setPVState] = useState({});
  const [openTab, setOpenTab] = useState(1);
  const [tabpanel, setTabPanel] = useState();

  useEffect(() => {
    handleSelectedTab(openTab);
  }, []);

  useEffect(() => {
    setSCCGlobal(scctab);
    // eslint-disable-next-line
  }, [scctab]);

  useEffect(() => {
    const dodTabletoSet = dodComputation(
      voltage,
      loadtab.overalls,
      invertertab
    );
    setDOD(dodTabletoSet);
    // eslint-disable-next-line
  }, [
    voltage,
    loadtab.overalls.totalwatts,
    loadtab.overalls.watthours,
    invertertab.id,
  ]);

  useEffect(() => {
    const battcap = batterycomputation(batterytab, dodTable, voltage);
    const spToSet = seriesParallelBattCompute(batterytab, dodTable, voltage);
    setBatteryCap(battcap);
    setSP(spToSet);
    // eslint-disable-next-line
  }, [batterytab.id, voltage, loadtab.overalls.totalwatts, dodTable]);

  useEffect(() => {
    const batterytoSet = batterytab;
    batterytoSet.totalqty = seriesParallelTable.totalnumber;
    batterytoSet.totalcapacity = seriesParallelTable.totalcapacity;
    batterytoSet.totalprice = seriesParallelTable.totalprice;
    // setBattery(batterytoSet);
    // eslint-disable-next-line
  }, [batterytab.id, voltage, seriesParallelTable]);

  useEffect(() => {
    const pvdata = pvcomputation(totalbattcapacity, solarpanelstab);
    setSolarPanel(pvdata.pvinfo);
    setPVState(pvdata.pvtable);
    // eslint-disable-next-line
  }, [
    totalbattcapacity,
    loadtab,
    solarpanelstab,
    voltage,
    solarpanelstab.sunhours,
  ]);

  useEffect(() => {
    const tp = overallprice;
    tp.twelveV = totalPriceCompute(
      12,
      batterytab,
      totalbattcapacity,
      solarpanelstab,
      scc.price,
      invertertab,
      loadtab.overalls,
      wiresize.wireSizingPrice
    );
    tp.twentyfourV = totalPriceCompute(
      24,
      batterytab,
      totalbattcapacity,
      solarpanelstab,
      scc.price,
      invertertab,
      loadtab.overalls,
      wiresize.wireSizingPrice
    );
    tp.fortyeightV = totalPriceCompute(
      48,
      batterytab,
      totalbattcapacity,
      solarpanelstab,
      scc.price,
      invertertab,
      loadtab.overalls,
      wiresize.wireSizingPrice
    );
    setOverallPrice(tp);
    // eslint-disable-next-line
  }, [
    solarpanelstab.price,
    scc.price,
    batterytab.totalprice,
    invertertab.price,
    wiresize.wireSizingPrice,
  ]);

  useEffect(() => {
    let newVal = wiresize;
    newVal.wireDetails.map((obj, index) => {
      let computed = wireCalculation(
        obj,
        solarpanelstab,
        solarpanel,
        totalbattcapacity,
        invertertab
      );
      newVal.wireDetails[index].suggestedAWG = computed.suggestedAWG;
      newVal.wireDetails[index].totalprice = computed.totalprice;
      newVal.wireDetails[index].computedVdi = computed.computeVDI;
    });

    newVal.wireSizingPrice = wireTotalPrice(newVal.wireDetails);
    console.log(newVal);
    setWireSize(newVal);
    // eslint-disable-next-line
  }, [
    solarpanel.pvname,
    solarpanelstab.sunhours,
    totalbattcapacity.totalcapacity,
    invertertab.wattage,
    wiresize.wireDetails,
  ]);

  const handleSelectedTab = (selected) => {
    switch (selected) {
      case 1: {
        setOpenTab(1);
        setTabPanel(
          <div>
            <h2 className="font-medium leading-tight text-2xl mt-4 mb-0">
              Load
            </h2>
            <LoadTab />
          </div>
        );
        break;
      }
      case 2: {
        setOpenTab(2);
        setTabPanel(
          <div>
            <h2 className="font-medium leading-tight text-2xl mt-4 mb-0">
              Inverter
            </h2>
            <InverterTab />
          </div>
        );
        break;
      }
      case 3: {
        setOpenTab(3);
        setTabPanel(
          <div>
            <h2 className="font-medium leading-tight text-2xl mt-4 mb-0">
              Battery
            </h2>
            <BatteryTab />
          </div>
        );
        break;
      }
      case 4: {
        setOpenTab(4);
        setTabPanel(
          <div>
            <h2 className="font-medium leading-tight text-2xl mt-4 mb-0">
              Solar Panel and SCC
            </h2>
            <SolarPanelSCCTab />
          </div>
        );
        break;
      }
      case 5: {
        setOpenTab(5);
        setTabPanel(
          <div>
            <h2 className="font-medium leading-tight text-2xl mt-4 mb-0">
              Wire Sizing
            </h2>
            <WireSizingTab />
          </div>
        );
        break;
      }
    }
  };

  return (
    <>
      <div className="flex overflow-x-auto overflow-y-hidden border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => {
            handleSelectedTab(1);
          }}
          className={
            openTab === 1
              ? "h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
              : "h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
          }
        >
          Load
        </button>

        <button
          onClick={() => {
            handleSelectedTab(2);
          }}
          className={
            openTab === 2
              ? "h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
              : "h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
          }
        >
          Inverter
        </button>

        <button
          onClick={() => {
            handleSelectedTab(3);
          }}
          className={
            openTab === 3
              ? "h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
              : "h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
          }
        >
          Battery
        </button>
        <button
          onClick={() => {
            handleSelectedTab(4);
          }}
          className={
            openTab === 4
              ? "h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
              : "h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
          }
        >
          Solar Panel and SCC
        </button>
        <button
          onClick={() => {
            handleSelectedTab(5);
          }}
          className={
            openTab === 5
              ? "h-10 px-4 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none"
              : "h-10 px-4 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
          }
        >
          Wire Sizing
        </button>
      </div>
      <div className="block">{tabpanel}</div>
    </>
  );
};

export default TabCalc;
