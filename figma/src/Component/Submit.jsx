import { useMemo } from "react";
import PropTypes from 'prop-types';

const Submit = (props) => {
  const { billingCycle, userCount, setIsSubmitted } = props

  const pricePerUser = (billingCycle === "yearly") ? 1800 : 1200
  const subtotal = userCount * pricePerUser
  const total = useMemo(() =>  subtotal + (subtotal * 0.18), [subtotal])

  return (
    <div className="p-5 rounded-lg bg-white w-[28.4rem] max-w-md mx-auto mt-5 text-center shadow-lg absolute top-44 left-[54.1rem] 2xl:left-[56.1rem] 3xl:left-[58.1rem] 4xl:left-[62.1rem] 5xl:left-[68.1rem] 6xl:left-[77.1rem]">
      <h2 className="text-blue-600 text-2xl font-medium mb-2">Order Placed Successfully!</h2>
      <p className="text-gray-700 text-base mb-4">
        Thank you for your submission. We will get back to you soon.
      </p>
      <p className="text-lg font-bold text-gray-800 mt-8 mb-2">Amount Payable</p>
      <p className="text-4xl font-bold text-green-600 mt-2 mb-12">₹{total}</p>
      <button className="px-5 py-2 bg-black text-white text-base border-2 border-white rounded-lg cursor-pointer transition-all duration-300 mb-8 hover:bg-gray-800" onClick={() => setIsSubmitted(false)}>
        Done
      </button>
    </div>
  );
};

// Adding prop types for validation
Submit.propTypes = {
  billingCycle: PropTypes.string.isRequired,
  userCount: PropTypes.number.isRequired,
  setIsSubmitted: PropTypes.func.isRequired,
};

export default Submit;
