import { useState } from "react";
import Header from "./Component/Header";
import ProductSelection from "./Component/ProductSelection";
import Invoice from "./Component/Invoice";
import Summary from "./Component/Summary";
import Submit from "./Component/Submit";

const App = () => {
  const [ userCount, setUserCount ] = useState(1);
  const [ billingCycle, setBillingCycle ] = useState("monthly");
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  return (
    <div className="w-full min-h-screen pt-8 flex flex-col justify-center align-middle">
      <Header />

      <ProductSelection
        setUserCount={setUserCount}
        userCount={userCount}
        billingCycle={billingCycle}
        setBillingCycle={setBillingCycle}
      />

      <Invoice />

      {isSubmitted ? (
        <Submit
          billingCycle={billingCycle}
          userCount={userCount}
          setIsSubmitted={setIsSubmitted}
        />
      ) : (
        <Summary
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
          userCount={userCount}
          setIsSubmitted={setIsSubmitted}
        />
      )}
    </div>
  );
};

export default App;
