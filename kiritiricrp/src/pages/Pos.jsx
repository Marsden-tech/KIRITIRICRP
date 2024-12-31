import React from 'react'

const Pos = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-50">
      {/* Point of Service Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-1.5">POINT OF SERVICE</h2>

      <div className="flex justify-between gap-4 w-full">
        {/* Left Section */}
        <div className="space-y-4 p-6 border border-gray-300 rounded bg-white shadow-md w-full">
          {/* Patient NCD No */}
          <div className="flex items-center space-x-4">
            <label htmlFor="ncd" className="block text-sm font-medium text-gray-700">
              Patient NCD No.:
            </label>
            <input
              type="text"
              name="ncd"
              id="ncd"
              className="block w-full max-w-xs border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>

          {/* Patient Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="pname" className="text-sm font-medium text-gray-700">
                Patient Name:
              </label>
              <input
                type="text"
                name="pname"
                id="pname"
                className="w-full max-w-xs border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="age" className="text-sm font-medium text-gray-700">
                Age:
              </label>
              <input
                type="text"
                name="age"
                id="age"
                className="w-full max-w-xs border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Prescription Date and Validity */}
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label htmlFor="presc_date" className="text-sm font-medium text-gray-700">
                Prescription Date:
              </label>
              <input
                type="text"
                name="presc_date"
                id="presc_date"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>

            <div>
              <label htmlFor="val_days" className="text-sm font-medium text-gray-700">
                Rem. Validity Days:
              </label>
              <input
                type="text"
                name="val_days"
                id="val_days"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>

          {/* Drug Details */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label htmlFor="drug_no" className="text-sm font-medium text-gray-700">
                  Drug Number:
                </label>
                <input
                  type="text"
                  name="drug_no"
                  id="drug_no"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              <div>
                <label htmlFor="drug_desc" className="text-sm font-medium text-gray-700">
                  Drug Description:
                </label>
                <input
                  type="text"
                  name="drug_desc"
                  id="drug_desc"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              <div>
                <label htmlFor="drug_code" className="text-sm font-medium text-gray-700">
                  Drug Code:
                </label>
                <input
                  type="text"
                  name="drug_code"
                  id="drug_code"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label htmlFor="presc_period" className="text-sm font-medium text-gray-700">
                  Prescription Period (Days):
                </label>
                <input
                  type="text"
                  name="presc_period"
                  id="presc_period"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              <div>
                <label htmlFor="unit_price" className="text-sm font-medium text-gray-700">
                  Unit Price:
                </label>
                <input
                  type="text"
                  name="unit_price"
                  id="unit_price"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <div>
                <label htmlFor="daily_tabs" className="text-sm font-medium text-gray-700">
                  Daily Tabs:
                </label>
                <input
                  type="text"
                  name="daily_tabs"
                  id="daily_tabs"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              <div>
                <label htmlFor="period" className="text-sm font-medium text-gray-700">
                  Period (Days):
                </label>
                <input
                  type="text"
                  name="period"
                  id="period"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>

              <div>
                <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 p-6 border border-gray-300 rounded bg-white shadow-md w-full">
          {/* Payment Details */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="subtotal" className="text-sm font-medium text-gray-700">
                Subtotal:
              </label>
              <input
                type="text"
                name="subtotal"
                id="subtotal"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="tax" className="text-sm font-medium text-gray-700">
                Tax:
              </label>
              <input
                type="text"
                name="tax"
                id="tax"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="total" className="text-sm font-medium text-gray-700">
                Total:
              </label>
              <input
                type="text"
                name="total"
                id="total"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="pay_type" className="text-sm font-medium text-gray-700">
                Pay Type:
              </label>
              <input
                type="text"
                name="pay_type"
                id="pay_type"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="amount_paid" className="text-sm font-medium text-gray-700">
                Amount Paid:
              </label>
              <input
                type="text"
                name="amount_paid"
                id="amount_paid"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
            <div>
              <label htmlFor="change" className="text-sm font-medium text-gray-700">
                Change:
              </label>
              <input
                type="text"
                name="change"
                id="change"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="flex justify-between space-x-4">
            <button
              type="button"
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Clear
            </button>
            <button
              type="button"
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Pos