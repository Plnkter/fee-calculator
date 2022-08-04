import React from "react";

export const ModalResult = ({ isOpen, onClose, bodyText}) => {

  return (
    <>

      {isOpen ? (
        <>
          <aside className="font-main justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-slate-800 bg-opacity-20" >
            <div className="relative my-6 mx-auto min-w-2xl max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white text-gray-800 outline-none fadeIn">

                <div className="relative p-6 flex-auto">
                  <p className="my-6 text-lg">
                    {bodyText}
                  </p>
                </div>
                <div className="flex items-center justify-end px-6 pb-6">
                  <button
                    className=" text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-md ease-linear transition-all"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}