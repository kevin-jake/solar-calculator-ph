import React, { useContext } from "react";
import { LOVContext } from "../homepage/tabs/context/lov-context";
import SCCItems from "./SCCItems";

const SCCList = () => {
  const { scclist } = useContext(LOVContext);
  console.log(scclist);
  if (scclist.length === 0) {
    return (
      <div class="bg-white overflow-hidden sm:rounded-lg pb-8">
        <div class="border-t border-gray-200 text-center pt-8">
          <h1 class="text-6xl font-bold text-gray-400">Empty List</h1>
          <h1 class="text-xl font-medium py-8">No SCC found</h1>
        </div>
      </div>
    );
  }
  return (
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
      <div class="align-middle inline-block min-w-full overflow-hidden bg-white  px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Name
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Type
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Brand
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Ampere Rating
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Supplier
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Price
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Link
              </th>
              <th class="px-6 py-3 border-b-2 border-gray-300"></th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {" "}
            {scclist.map((obj) => (
              <SCCItems scclist={obj} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SCCList;
