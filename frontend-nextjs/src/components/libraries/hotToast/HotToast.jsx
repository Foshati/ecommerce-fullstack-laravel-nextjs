"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function HotToast() {
  return (
    <div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          // Customize toast styles here
          style: {
            border: "1px solid black",
            padding: "12px",
            color: "black",
          },
          success: {
            duration: 5000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}
