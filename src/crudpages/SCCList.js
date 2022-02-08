import React, { useContext, useState } from "react";
import { LOVContext } from "../homepage/tabs/context/lov-context";
import AddItem from "./form/AddItem";
import SCCItems from "./SCCItems";

const SCCList = () => {
  const { scclist } = useContext(LOVContext);
  const [showModal, setShowModal] = useState(false);
  const formInputs = [
    { listkey: "sccname", type: "text", label: "Name" },
    { listkey: "type", type: "text", label: "Type" },
    { listkey: "brand", type: "text", label: "Brand" },
    { listkey: "supplier", type: "text", label: "Supplier" },
    { listkey: "amprating", type: "number", label: "Ampere Rating", unit: "A" },
    { listkey: "price", type: "number", label: "Price", unit: "Php" },
    { listkey: "img", type: "text", label: "Image" },
    { listkey: "link", type: "text", label: "Link" },
  ];

  const setModal = () => {
    setShowModal(true);
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  if (scclist.length === 0) {
    return (
      <div className="bg-white overflow-hidden sm:rounded-lg pb-8">
        <div className="border-t border-gray-200 text-center pt-8">
          <h1 className="text-6xl font-bold text-gray-400">Empty List</h1>
          <h1 className="text-xl font-medium py-8">No SCC found</h1>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="my-2 mx-2 py-6 pb-8 overflow-x-auto border-2 border-blue-400 dark:border-blue-300 rounded-xl relative">
        <div className="align-middle mb-5 inline-block min-w-full overflow-hidden bg-white  px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Brand
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Ampere Rating
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Supplier
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Link
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {" "}
              {scclist.map((obj) => (
                <SCCItems scclist={obj} formInputs={formInputs} />
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="block px-5 py-2 mt-5 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto absolute bottom-2 right-6"
          onClick={setModal}
        >
          Add Item
        </button>
      </div>
      <AddItem
        show={showModal}
        onCancel={cancelModal}
        formInputs={formInputs}
        title="SCC"
      />
    </>
  );
};

export default SCCList;