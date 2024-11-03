import React from "react";

const Submit = ({ TotalPayableAmount, handleBackToSummary }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Order Placed Successfully!</h2>
      <p style={styles.message}>
        Thank you for your submission. We will get back to you soon.
      </p>
      <p style={styles.payment}>Amount Payable</p>
      <p style={styles.amount}>₹{TotalPayableAmount}</p>
      <button style={styles.btn} onClick={() => handleBackToSummary()}>
        Done
      </button>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    width: "80%",
    maxWidth: "400px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    position: "absolute",
    top: "10.8rem",
    left: "52.1rem",
  },
  title: {
    color: "#3366cc",
    fontSize: "1.5em",
    fontWeight: "500",
    margin: "0 0 10px 0",
  },
  message: {
    color: "#555",
    fontSize: "1em",
    margin: "0",
  },

  payment: {
    fontSize: "1.25em",
    color: "#444",
    fontWeight: "bold",
    marginTop: "2rem",
    marginBottom: "0.5rem",
  },
  amount: {
    fontSize: "2.5em",
    color: "#28a745",
    fontWeight: "bold",
    marginTop: "0.5rem",
    marginBottom: "3rem",
  },

  btn: {
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    fontSize: "1em",
    border: "2px solid #fff",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.3s ease",
    marginBottom: "2rem",
  },
};

export default Submit;
