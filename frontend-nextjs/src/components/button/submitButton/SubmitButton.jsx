"use client";
import { useFormStatus } from "react-dom";

export default function SubButton({ title, style }) {
  const { pending } = useFormStatus();
  return (
    <div>
      {/* methods 1 */}
      <button className={style} disabled={pending}>
        {pending ? (
          <span className="loading loading-dots loading-sm"></span>
        ) : (
          title
        )}
      </button>
    </div>
  );
}

//! Other methods 2
{
  /* <button className="btn btn-wide" disabled={pending}>
        {title}
        {pending && <span class="loading loading-dots loading-sm"></span>}
      </button> */
}
