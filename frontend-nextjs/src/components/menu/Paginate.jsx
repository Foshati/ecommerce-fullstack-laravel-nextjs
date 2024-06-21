"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Paginate({ links }) {
  const router = useRouter();
  const pathName = usePathname();
  function handlePage(page) {
    // console.log(page, pathName);
    // console.log(`${pathName}?page=${page}`);
    const params = new URLSearchParams();
    params.set("page", page);
    // console.log(params.toString());

    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div>
      <div className="join">
        {links.slice(1, -1).map((link, index) => (
          <span key={index}>
            <button
              className={
                link.active
                  ? "join-item btn btn-sm btn-active"
                  : "join-item btn btn-sm"
              }
              onClick={() => handlePage(link.label)}
            >
              {link.label}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
