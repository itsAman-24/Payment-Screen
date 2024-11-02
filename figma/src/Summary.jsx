import React from "react";

const Summary = ({
  billingCycle,
  pricePerUser,
  userCount,
  gst,
  total,
  handleSubmitPurchase,
  handleChangePlan
}) => {
  return (
    <div className="relative w-[26.4rem] bottom-[62rem] left-[45rem] gap-0 flex-1 bg-white p-[1.3rem] rounded-lg shadow-xl">
      <h2 className="summary-heading text-[1.25rem] font-semibold mb-[.8rem] border-b border-[#b7b5b5] pb-[1rem]">
        Summary
      </h2>
      <div style={{ marginBottom: "10px" }}>
        <p>
          <strong className="text-[1rem] font-medium">
            {billingCycle === "monthly" ? "Monthly" : "Yearly"} Plan
          </strong>
        </p>
        <div className="price flex justify-between mb-[.8rem]">
          <p className="text-[1rem]">{`₹${pricePerUser} / employee / month`}</p>
          <p className="text-[.9rem]">Subtotal: ₹{userCount * pricePerUser}</p>
        </div>

        <a
          onClick={() => handleChangePlan(billingCycle)}
          href="#"
          style={{
            color: "#146EB4",
            textDecoration: "none",
            marginTop: "3rem",
            fontSize: "14px",
          }}
        >
          Change plan
        </a>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <a
          href="#"
          style={{
            color: "#1A181E",
            borderBottom: "2px solid #2a292c",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Enter promo code
        </a>
      </div>

      <div
        className="gst-details"
        style={{
          borderBottom: "1px solid #b7b5b5",
          borderTop: "1px solid #b7b5b5",
          marginTop: "2rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            color: "#1A181E",
          }}
          className="font-normal text-[.9rem]"
        >
          <p>Subtotal</p>
          <p>₹{userCount * pricePerUser}</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#1A181E",
          }}
          className="font-normal text-[.9rem]"
        >
          <p>GST (18%)</p>
          <p>₹{gst.toFixed(2)}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <p className="font-semibold text-[1.2rem]">Total</p>
        <p className="font-semibold text-[1.2rem]">₹{total.toFixed(2)}</p>
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

      <div style={{ marginTop: "10px", fontSize: "12px", color: "#808080" }}>
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
