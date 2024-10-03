import React from 'react';
import Highlight from 'react-highlight';

const OutputField = ({ output }) => {
  return (
    <div className="mt-4 w-[70vw]">
      <h2 className="text-xl font-semibold mb-2">Output:</h2>
      <div className="bg-gray-50 border border-gray-300 rounded-md p-4 overflow-hidden">
        {output.length > 0 ? (
          output.map((item, index) => (
            <div key={index} className="overflow-x-auto mb-2">
              <Highlight className="text-gray-700">{item}</Highlight>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No output yet.</p>
        )}
      </div>
    </div>
  );
};

export default OutputField;
