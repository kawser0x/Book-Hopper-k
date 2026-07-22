"use client";

import React from "react";
import { toast } from "react-toastify";

const BuyButton = ({ bookTitle }) => {
  const notify = () => {
    toast.success(`Buy ${bookTitle} Successful`);
  };

  return (
    <button onClick={notify} className="btn btn-accent">
      Buy Now
    </button>
  );
};

export default BuyButton;
