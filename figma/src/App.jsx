import { useState } from "react";
import Header from "./Component/Header";
import ProductSelection from "./Component/ProductSelection";
import Invoice from "./Component/Invoice";
import Summary from "./Component/Summary";
import Submit from "./Component/Submit";

const App = () => {
  const [userCount, setUserCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handles the change in total number of users want to buy plan
  const handleUserCountChange = (increment) => {
    setUserCount((prev) => Math.max(1, prev + increment));
  };

  //Handles the billing cycle change of the plan
  const handleBillingCycleChange = (cycle) => {
    setBillingCycle(cycle);
    // console.log(billingCycle);
  };

  //Handles when the user submits the purchase
  const handleSubmitPurchase = () => {
    setIsSubmitted(true);
  };

  //Redirects to the summary component from submit component
  const handleBackToSummary = () => {
    setIsSubmitted(false);
  };

  //Handles the change of the plan
  function handleChangePlan(cycle) {
    setBillingCycle(cycle === "monthly" ? "yearly" : "monthly");
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
          userCount={userCount}
          billingCycle={billingCycle}
          handleBackToSummary={handleBackToSummary}
        />
      ) : (
        <Summary
          billingCycle={billingCycle}
          userCount={userCount}
          handleSubmitPurchase={handleSubmitPurchase}
          handleChangePlan={handleChangePlan}
        />
      )}
    </div>
  );
};

export default App;
