const ProductSelection = ({
  handleUserCountChange,
  handleBillingCycleChange,
  userCount,
  billingCycle,
}) => {
  return (
    <div className="sub-container bg-white pl-[6.4rem]">
      <div className="product-box relative bg-white rounded-lg p-6 shadow-2xl w-[36.7rem] bottom-[4rem] ml-[6rem]">
        <div className="flex items-center gap-3 border-b border-[#b7b5b5] align-middle pb-4">
          <img
            src="https://pbs.twimg.com/profile_images/1402181651036213249/cipFOVap_400x400.jpg"
            alt=""
            className="w-[2.25rem] h-[1.9rem] rounded-md"
          />
          <h2 className="text-xl font-semibold">Your products</h2>
          <i className="fa-solid fa-circle-check text-[#146EB4] mt-[.4rem]"></i>
        </div>

        <div className="user-selection mt-[1rem]">
          <div className="user-selection-text flex items-center font-bold text-[1.6rem]">
            <strong className="text-[1.12rem] font-medium">
              Select the number of users
            </strong>
            <img
              src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/64491cbd518384eb0d3605e1_info.svg"
              alt=""
              className="ml-[.5rem] mt-[.2rem] text-base w-4 h-4"
            />
          </div>
          <p className="min-user-text text-[#808080] text-[.9rem] mt-2 font-normal">
            The minimum amount is 1 user
          </p>

          <div className="user-controls flex items-center mt-[1rem]">
            <input
              type="number"
              value={userCount}
              readOnly
              className="w-[11rem] h-[2.2rem] text-left p-[0.5rem] border-2 border-[#b7b5b5] text-[#146EB4] rounded-tl-md rounded-bl-md"
            />
            <button
              onClick={() => handleUserCountChange(-1)}
              className="border-t-2 border-r-2 border-b-2 border-[#b7b5b5] w-[2.31rem]  h-[2.2rem]  bg-white text-[#656668] cursor-pointer   transition duration-200 hover:bg-[#e8e6e6]"
            >
              -
            </button>
            <button
              onClick={() => handleUserCountChange(1)}
              className="border-t-2 border-r-2 border-b-2 border-[#b7b5b5] w-[2.31rem] h-[2.2rem] rounded-tr-md rounded-br-md bg-white text-[#656668] cursor-pointer  transition duration-200 hover:bg-[#e8e6e6]"
            >
              +
            </button>
          </div>
        </div>

        <div className="billing-cycle mt-6">
          <strong className="text-[1.12rem] font-medium">
            Select a subscription cycle
          </strong>
          <div className="subscription-container flex gap-4 mt-5 mb-3">
            <div
              onClick={() => {
                handleBillingCycleChange("monthly");
              }}
              className={`flex flex-col justify-center items-left border rounded-lg p-8 cursor-pointer transition duration-300 w-[16rem] h-[8.5rem]
                ${
                  billingCycle === "monthly"
                    ? "border-[#007bff]"
                    : "border-[#B7B7B7]"
                }`}
            >
              <h4 className="text-[1rem] font-normal">Monthly</h4>
              <h2 className="text-[2rem] font-bold">₹1200</h2>
              <p className="font-normal text-[.9rem] text-[#808080]">
                /month/user/billed monthly
              </p>
            </div>

            <div
              onClick={() => {
                handleBillingCycleChange("yearly");
              }}
              className={`flex flex-col justify-center items-left border rounded-lg p-8 cursor-pointer transition duration-300 w-[16rem] h-[8.5rem]
                ${
                  billingCycle === "yearly"
                    ? "border-[#007bff]"
                    : "border-[#B7B7B7]"
                }`}
            >
              <h4 className="text-[1rem] font-normal">Yearly</h4>
              <h2 className="text-[2rem] font-bold">₹1800</h2>
              <p className="font-normal text-[.9rem] text-[#808080]">
                /month/user/billed monthly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
