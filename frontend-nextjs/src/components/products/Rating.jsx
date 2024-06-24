import React from "react";

export default function Rating() {
  return (
    <div className="flex mb-4">
      <div className="rating rating-sm">
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
          defaultChecked
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
        <input
          type="radio"
          name="rating-2"
          className="bg-orange-400 mask mask-star-2"
        />
      </div>
    </div>
  );
}
