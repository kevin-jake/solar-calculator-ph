import React, { useContext, useEffect, useState } from "react";
// import { LOVContext } from "../homepage/context/lov-context";
import { VALIDATOR_NUMBER, VALIDATOR_REQUIRE } from "../shared/util/validators";
import { useHttpClient } from "../shared/components/hooks/http-hook";
import AddItem from "./form/AddItem";
import InverterItems from "./InverterItems";
import LoadingSpinner from "../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../shared/context/auth-context";
import AlertModal from "../shared/components/UIElements/AlertModal";

const InverterList = () => {
  // const { inverters } = useContext(LOVContext);
  const [invertersList, setInvertersList] = useState([]);
  const { isLoading, error, sendRequest } = useHttpClient();
  const [showModal, setShowModal] = useState(false);
  const [refresh, setRefresh] = useState(true);
  const { role } = useContext(AuthContext);
  const [msg, setMsg] = useState();

  useEffect(() => {
    const fetchInverter = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + "/inverter"
        );

        setInvertersList(responseData.inverters);
      } catch (err) {}
    };
    fetchInverter();
    // eslint-disable-next-line
  }, [sendRequest, refresh]);

  const formInputs = [
    {
      listkey: "id",
      type: "text",
      label: "ID",
    },
    {
      listkey: "inverterName",
      type: "text",
      label: "Name",
      validator: [VALIDATOR_REQUIRE()],
    },
    { listkey: "type", type: "text", label: "Type" },
    {
      listkey: "inputVoltage",
      type: "number",
      label: "Input Voltage",
      unit: "V",
      validator: [VALIDATOR_REQUIRE()],
    },
    {
      listkey: "efficiency",
      type: "text",
      label: "Efficiency",
      unit: "%",
      validator: [VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()],
    },
    {
      listkey: "wattage",
      type: "number",
      label: "Wattage",
      unit: "W",
      validator: [VALIDATOR_REQUIRE()],
    },
    {
      listkey: "price",
      type: "text",
      label: "Price",
      unit: "Php",
      validator: [VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()],
    },
    // { listkey: "img", type: "text", label: "Image" },
    {
      listkey: "link",
      type: "text",
      label: "Link",
      validator: [VALIDATOR_REQUIRE()],
    },
  ];

  const setModal = () => {
    setShowModal(true);
  };

  const cancelModal = () => {
    setShowModal(false);
  };

  const onUpdate = (success, operation) => {
    setMsg("");
    if (role === "Admin") {
      if (success && operation === "ADD") {
        setMsg(" Inverter added successfully");
      }
      if (success && operation === "EDIT") {
        setMsg(" Inverter modified successfully");
      }
      if (success && operation === "DELETE") {
        setMsg(" Inverter deleted successfully");
      }
    } else {
      if (success && operation === "ADD") {
        setMsg(
          " Inverter record addition request sent successfully. Request is being processed and will be updated after 1 - 5 days."
        );
      }
      if (success && operation === "EDIT") {
        setMsg(
          " Inverter record modification request sent successfully. Request is being processed and will be updated after 1 - 5 days."
        );
      }
    }
    setRefresh(!refresh);
  };

  const toRender = (list) => {
    if (list.length === 0) {
      return (
        <>
          {isLoading && <LoadingSpinner />}
          <div className="bg-white overflow-hidden sm:rounded-lg pb-8">
            <div className="border-t border-gray-200 text-center pt-8">
              <h1 className="text-6xl font-bold text-gray-400">Empty List</h1>
              <h1 className="text-xl font-medium py-8">No Inverters found</h1>
              {role === "Admin" && (
                <>
                  <button
                    className="px-5 py-2 mt-5 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto"
                    onClick={setModal}
                  >
                    Add Item
                  </button>
                  <AddItem
                    show={showModal}
                    onCancel={cancelModal}
                    onUpdate={onUpdate}
                    formInputs={formInputs}
                    title="Inverter"
                  />
                </>
              )}
            </div>
          </div>
          {error && !isLoading && <AlertModal msg={error} type={"ERROR"} />}
          {msg && !isLoading && <AlertModal msg={msg} type={"SUCCESS"} />}
        </>
      );
    } else {
      return (
        <>
          <div className="my-2 mx-2 py-6 pb-8 overflow-x-auto border-2 border-blue-400 dark:border-blue-300 rounded-xl relative">
            <div className="relative align-middle mb-5 inline-block min-w-full overflow-hidden bg-white  px-8 pt-3 rounded-bl-lg rounded-br-lg">
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
                      Input Voltage
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Efficiency
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Wattage
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Link
                    </th>
                    {/* {role === "Admin" && ( */}
                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                    {/* )} */}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {list.map((inverterObj) => (
                    <InverterItems
                      key={inverterObj.id}
                      invlist={inverterObj}
                      formInputs={formInputs}
                      onUpdate={onUpdate}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            {/* {role === "Admin" && ( */}
            <button
              className="sticky lg:float-right xl:float-right block px-5 py-2 mt-5 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto left-64 bottom-2 lg:right-6 xl:right-6 2xl:right-6"
              onClick={setModal}
            >
              Add Item
            </button>
            {/* )} */}
          </div>
          {/* {role === "Admin" && ( */}
          <AddItem
            show={showModal}
            onCancel={cancelModal}
            onUpdate={onUpdate}
            formInputs={formInputs}
            title="Inverter"
          />
          {/* )} */}
          {msg && <AlertModal msg={msg} type={"SUCCESS"} />}
        </>
      );
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && invertersList && toRender(invertersList)}
    </>
  );
};

export default InverterList;
