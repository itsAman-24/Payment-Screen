import React, { useState, useEffect } from "react";
import Header from "./Component/Header";
import ProductSelection from "./Component/ProductSelection";
import Invoice from "./Component/Invoice";
import Summary from "./Component/Summary";
import Submit from "./Component/Submit";

const App = () => {
  const [userCount, setUserCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' or 'yearly'
  const [pricePerUser, setPricePerUser] = useState(1200);
  const [gst, setGst] = useState(0);
  const [total, setTotal] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update total price whenever user count or billing cycle (yearly or monthly) changes
  useEffect(() => {
    const subtotal = userCount * pricePerUser;
    const calculatedGst = subtotal * 0.18; // GST is 18%
    setGst(calculatedGst);
    setTotal(subtotal + calculatedGst);
  }, [userCount, pricePerUser]);

  const handleUserCountChange = (increment) => {
    setUserCount((prev) => Math.max(1, prev + increment));
  };

  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
    setPricePerUser(cycle === "monthly" ? 1200 : 1800);
    console.log(billingCycle)
  };
2

  //handles when the user submits the purchase

  const handleSubmitPurchase = () => {
    setIsSubmitted(true);
  };

  const handleBackToSummary = () => {
    setIsSubmitted(false);
  }

  function handleChangePlan(cycle) {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
    setPricePerUser(cycle === "yearly" ? 1200 : 1800);

  }

  return (
    <div className="w-full min-h-screen pt-8 flex flex-col">
      <Header />

      <ProductSelection
        handleUserCountChange={handleUserCountChange}
        handleBillingCycleChange={handleBillingCycleChange}
        userCount={userCount}
        billingCycle={billingCycle}
      />

      <Invoice />

      {isSubmitted ? (
        <Submit
         total={total}
         handleBackToSummary={handleBackToSummary}
        />
      ) : (
        <Summary
          billingCycle={billingCycle}
          pricePerUser={pricePerUser}
          userCount={userCount}
          gst={gst}
          total={total}
          handleSubmitPurchase={handleSubmitPurchase}
          handleChangePlan={handleChangePlan}
        />
      )}

    </div>
  );
};

export default App;
