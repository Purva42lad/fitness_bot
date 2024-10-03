import { useState } from "react";

export default function InputField({ setOutput }) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const getOutput = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/askedQuestion", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           message:input
        })
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setOutput([data.response]); // Store as an array
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mb-4 w-[50vw]">
      <input
        type="text"
        placeholder="Enter your query..."
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={getOutput}
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
}
