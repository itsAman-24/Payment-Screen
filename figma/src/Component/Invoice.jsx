const Invoice = () => {
  return (
    <div className="invoice-details relative bg-white shadow-2xl flex flex-col w-[36.7rem] gap-6 rounded-lg p-[1.3rem] left-[12.2rem] 2xl:left-[15.4rem] 3xl:left-[17.4rem] 4xl:left-[21.4rem] 5xl:left-[25.4rem] 6xl:left-[36.4rem] bottom-[2rem] pb-[3rem]">
      <div className="flex flex-row">
        <h2 className="text-[1.25rem] font-semibold">Invoice details</h2>
        <img
          src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/64491cbd518384eb0d3605e1_info.svg"
          alt=""
          className="ml-[.5rem] mt-[.53rem] text-base w-4 h-4"
        />
      </div>
      <div className="input-field flex flex-col">
        <label className="text-[.97rem] font-medium text-[#4D4D4D]">
          Address Line 1
        </label>
        <input
          type="text"
          placeholder="Eg: HSR Layout"
          className="border-[1.5px] border-[#b7b5b5] text-[#989898] text-[.78rem] font-medium rounded-md p-2 w-[26.16rem] h-[2.6rem]  mt-1"
        />
      </div>

      <div className="input-field flex flex-col">
        <label className="text-[.97rem] font-medium text-[#4D4D4D]">
          Address Line 2 (Landmark)
        </label>
        <input
          type="text"
          placeholder="Eg: near apollo"
          className="border-[1.5px] border-[#b7b5b5] text-[#989898] text-[.78rem] font-medium rounded-md p-2 w-[26.16rem] h-[2.6rem]  mt-1"
        />
      </div>

      <div className="input-field flex flex-col">
        <label className="text-[.97rem] font-medium text-[#4D4D4D]">
          Pincode
        </label>
        <input
          type="text"
          placeholder="Eg: 5768"
          className="border-[1.5px] border-[#b7b5b5] text-[#989898] text-[.78rem] font-medium rounded-md p-2 w-[26.16rem] h-[2.6rem]  mt-1"
        />
      </div>

      <label className="text-[.97rem] font-medium">Office work location</label>
      <select className="border-[1.5px] border-[#b7b5b5] rounded-md w-[20.16rem] h-[2.6rem] text-[#989898] text-[.78rem] font-medium mt-0">
        <option value="">Select state</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Maharashtra">Maharashtra</option>
      </select>
    </div>
  );
};

export default Invoice;
