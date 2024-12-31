import React from 'react';

const Receipt = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen flex justify-center items-center">
      <div className="max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-center text-xl font-bold mb-4">Sales Receipt</h1>
        <div className="text-center text-sm text-gray-500 mb-6">
          <p>15</p>
          <p>30</p>
          <p>embunoncommunicablediseasescbo@gmail.com</p>
        </div>
        <table className="w-full mb-4 text-sm">
          <tbody>
            <tr>
              <td className="font-semibold">Sales Receipt</td>
              <td>Recpt No:</td>
              <td className="text-right">2837</td>
            </tr>
            <tr>
              <td></td>
              <td>Date:</td>
              <td className="text-right">12/31/2024 16:12</td>
            </tr>
            <tr>
              <td></td>
              <td>Served by:</td>
              <td className="text-right">Dennis</td>
            </tr>
          </tbody>
        </table>
        <p className="mb-4">
          <span className="font-semibold">Client Served:</span> 0
        </p>
        <table className="w-full text-sm border-t border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-2 px-4 font-semibold">Item</th>
              <th className="text-right py-2 px-4 font-semibold">Quantity</th>
              <th className="text-right py-2 px-4 font-semibold">Unit Price</th>
              <th className="text-right py-2 px-4 font-semibold">Total</th>
              <th className="text-right py-2 px-4 font-semibold">Remaining Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">-</td>
              <td className="text-right py-2 px-4">-</td>
              <td className="text-right py-2 px-4">-</td>
              <td className="text-right py-2 px-4">-</td>
              <td className="text-right py-2 px-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipt;