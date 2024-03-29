import React, { useContext, useState } from "react";
import { AuthContext } from "../shared/context/auth-context";
import { numberWithCommas } from "../shared/util/format";
import DeleteItem from "./form/DeleteItem";
import EditItem from "./form/EditItem";

const SCCItems = ({ scclist, formInputs, onUpdate }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { role } = useContext(AuthContext);
  const openEdit = () => {
    setShowEditModal(true);
  };

  const closeEdit = () => {
    setShowEditModal(false);
  };

  const openDelete = () => {
    setShowDeleteModal(true);
  };

  const closeDelete = () => {
    setShowDeleteModal(false);
  };

  const update = (operation) => {
    onUpdate(true, operation);
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
          <div className="text-sm leading-5 text-blue-900">
            {scclist.sccname}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
          {scclist.type}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
          {scclist.brand}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
          {scclist.amprating + " A"}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
          {scclist.supplier}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
          {"Php " + numberWithCommas(scclist.price.toFixed(2))}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
          <a
            className=" px-4 py-2 mt-2 text-blue-600 visited:text-purple-600"
            target="_blank"
            rel="noopener noreferrer"
            href={scclist.link}
          >
            {scclist.link ? "Link" : ""}
          </a>
        </td>
        <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
          <div
            className={`grid lg:grid-row  gap-4 sm:grid-row md:grid-row ${
              role === "Admin" ? "xl:grid-cols-2" : ""
            }`}
          >
            <button
              className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none md:row-span-auto"
              onClick={openEdit}
            >
              Edit
            </button>
            {role === "Admin" && (
              <button
                className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none md:row-span-auto"
                onClick={openDelete}
              >
                Delete
              </button>
            )}
          </div>
        </td>
      </tr>
      <>
        <EditItem
          show={showEditModal}
          onCancel={closeEdit}
          formInputs={formInputs}
          initialValue={scclist}
          onUpdate={update}
          title="SCC"
        />
        {role === "Admin" && (
          <DeleteItem
            show={showDeleteModal}
            onCancel={closeDelete}
            idToDelete={scclist.id}
            onUpdate={update}
            title="SCC"
          />
        )}
      </>
    </>
  );
};

export default SCCItems;
