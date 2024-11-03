import React, { useEffect, useMemo } from "react";

const Summary = ({
  billingCycle,
  userCount,
  handleSubmitPurchase,
  handleChangePlan,
  TotalPayableAmount,
}) => {
  //calculating some dependent values
  let pricePerUser = 1200;
  if (billingCycle === "yearly") {
    pricePerUser = 1800;
  }

  //Ensure that these values only be recalculated when its dependencies changes (userCount, pricePerUser -> which changes with the change in billing cycle)
  const { payableAmt, gstAmt } = useMemo(() => {
    const payableAmt = userCount * pricePerUser;
    const gstAmt = payableAmt * 0.18;

    return { payableAmt, gstAmt };
  }, [userCount, pricePerUser]);

  useEffect(() => {
    TotalPayableAmount(pricePerUser, gstAmt);
  }, [payableAmt, gstAmt]);

  return (
    <div className="relative w-[28.4rem] bottom-[62rem] left-[52rem] gap-0 flex-1 bg-white p-[1.3rem] rounded-lg shadow-2xl">
      <h2 className="summary-heading text-[1.25rem] font-semibold mb-[.8rem] border-b border-[#b7b5b5] pb-[1rem]">
        Summary
      </h2>
      <div className="mb-[.63rem]">
        <p>
          <strong className="text-[1rem] font-medium">
            {billingCycle === "monthly" ? "Monthly" : "Yearly"} Plan
          </strong>
        </p>
        <div className="price flex justify-between mb-[.8rem]">
          <p className="text-[1rem] font-normal">{`₹${pricePerUser} / employee / month`}</p>
          <p className="text-[.9rem] font-normal">
            ₹{userCount * pricePerUser}
          </p>
        </div>

        <a
          onClick={() => handleChangePlan(billingCycle)}
          href="#"
          className="text-[#146EB4] no-underline mt-[1.9rem] text-[.9rem] font-normal"
        >
          Change plan
        </a>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <a
          href="#"
          className="text-[#1A181E] border-b-2 border-[#2a292c] font-semibold text-[.9rem]"
        >
          Enter promo code
        </a>
      </div>

      <div className="border-b border-t border-[#b7b5b5] mt-[1.25rem] pt-[.63rem] pb-[.63rem]">
        <div className="font-normal text-[.9rem] flex justify-between mb-[.63rem] text-[#1A181E]">
          <p>Subtotal</p>
          <p>₹{payableAmt}</p>
        </div>

        <div className="font-normal text-[.9rem] flex justify-between text-[#1A181E]">
          <p>GST (18%)</p>
          <p>₹{gstAmt}</p>
        </div>
      </div>

      <div className="flex justify-between mb-[1.25rem]">
        <p className="font-semibold text-[1.2rem]">Total</p>
        <p className="font-semibold text-[1.2rem]">₹{payableAmt + gstAmt}</p>
      </div>

      <div
        onClick={() => handleSubmitPurchase()}
        className="bg-[#146EB4] text-[#fff] mt-[.6rem] px-[.6rem] py-[.9rem] border-none rounded-md w-full cursor-pointer h-[3rem] flex flex-row justify-center align-middle"
      >
        <img
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/lock-circle-blue-512.png"
          alt=""
          className=" mr-[.2rem] text-base w-6 h-6"
        />
        <p>Submit Purchase</p>
      </div>

      <div className="mt-[.63rem] text-[.75rem] text-[#808080]">
        <div className="font-normal text-[1rem] text-center mt-[1.5rem] flex flex-row justify-center align-middle">
          <img
            src="https://thumbs.dreamstime.com/b/shield-green-f-324949597.jpg"
            alt=""
            className="w-6 h-6"
          />
          <h3 className="text-[1rem] font-normal">Safe & Secure Payment</h3>
        </div>
        <p className="mt-[1.5rem] font-normal text-[.8rem]">
          By purchasing, you accept the{" "}
          <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
            Terms of Use
          </a>{" "}
          and acknowledge reading the{" "}
          <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
            Privacy Policy
          </a>
          . You also agree to auto renewal of your yearly subscription for
          US$136.99, which can be disabled at any time through your account. Any
          eligible tax exemptions will be applied when you're charged for your
          next renewal payment. Your card details will be saved for future
          purchases and subscription renewals.
        </p>
      </div>
    </div>
  );
};

export default Summary;
