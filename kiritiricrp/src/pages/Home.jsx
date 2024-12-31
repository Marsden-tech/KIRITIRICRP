import React from 'react';

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          WELCOME TO KIRITIRI CRP HOMEPAGE
        </h1>

        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-full bg-white shadow-md">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Facility</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-gray-700">Number of Patients</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Kairuri</td>
                <td className="border border-gray-300 px-4 py-2">30</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Gategi</td>
                <td className="border border-gray-300 px-4 py-2">16463</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Kanja</td>
                <td className="border border-gray-300 px-4 py-2">12179</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Kiambere</td>
                <td className="border border-gray-300 px-4 py-2">16465</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Kibugu</td>
                <td className="border border-gray-300 px-4 py-2"></td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Kigumo</td>
                <td className="border border-gray-300 px-4 py-2">12300</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Machanga</td>
                <td className="border border-gray-300 px-4 py-2">12441</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">Muchagori</td>
                <td className="border border-gray-300 px-4 py-2">12549</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;