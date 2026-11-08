import React from 'react';

const Update = ({setpopup, popup  , updateingTask , callApi}) => {


    handleUpdate=()=>{
        
    }
    return (
        <div className={`${
                popup ? "fixed inset-0" : "hidden"
            } flex items-center justify-center bg-black/40`}
            >

            <div className="bg-white w-[500px] p-10 rounded-2xl shadow-xl">

                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Update Todo
                </h1>

                {/* Input Field */}
                <div className="mb-6">
                    <label className="block text-gray-600 mb-2">
                        Task Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter updated task"
                        value={updateingTask.task}
                        className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Checkbox */}
                <div className="mb-6 flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-gray-700">
                        Mark as Completed
                    </label>
                </div>

                {/* Buttons */}
                <div className="flex justify-between gap-4">

                    <button onClick={()=>{handleUpdate()}} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition">
                        Update
                    </button>

                    <button onClick={() => setpopup(false)} className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg transition">
                        Cancel
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Update;