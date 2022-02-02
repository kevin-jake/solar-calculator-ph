import React, { useContext } from "react";
import { numberWithCommas } from "../../shared/util/format";
import sccimg from "../resources/scc.png";
import { GlobalContext } from "../tabs/context/global-context";

const SCCSection = () => {
  const { scc } = useContext(GlobalContext);
  return (
    <>
      {/* <div className="price-header">
        <h3 className="title">Solar Charge Controller</h3>
        <img src={sccimg} alt="SCC" />
      </div>
      <hr />
      <div className="price-body">
        <ul className="features">
          <li>SCC Type: {scc.type}</li>
          <li>SCC Name: {scc.sccname}</li>
          <li>SCC Ampere Rating: {scc.amprating}</li>
          <li>Price: Php {numberWithCommas(scc.price.toFixed(2))}</li>
        </ul>
      </div> */}
      <div className="container-lg p-6 mx-auto lg:flex lg:justify-between lg:items-center">
        <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
          Solar Charge Controller
        </h1>
        <span class="inline text-blue-500 dark:text-blue-400">
          <img
            className="object-contain object-center w-20 h-20 mx-auto rounded-lg"
            src={sccimg}
            alt="SCC"
          />
        </span>
      </div>
      <ul class="w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
          SCC Name: {scc.sccname}
        </li>
        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          SCC Type: {scc.type}
        </li>
        <li class="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
          SCC Ampere Rating: {scc.amprating}
        </li>
        <li class="py-2 px-4 w-full rounded-b-lg">
          Price: Php {numberWithCommas(scc.price.toFixed(2))}
        </li>
      </ul>
    </>
  );
};

export default SCCSection;
