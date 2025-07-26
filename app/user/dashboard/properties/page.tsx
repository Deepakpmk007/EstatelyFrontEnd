import React from "react";

export default function page() {
  const [addProperty, setAddProperty] = React.useState(false);
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl">Properties</h1>
        <button
          className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-800 transition"
          onClick={() => setAddProperty(!addProperty)}
        >
          Add Property
        </button>
      </div>
    </div>
  );
}
