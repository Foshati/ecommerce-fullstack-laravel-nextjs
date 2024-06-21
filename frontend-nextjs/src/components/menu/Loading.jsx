import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <span className="loading loading-spinner text-error loading-lg"></span>
    </div>
  );
}
