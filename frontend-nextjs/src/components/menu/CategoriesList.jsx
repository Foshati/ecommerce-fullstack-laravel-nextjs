"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function CategoriesList({ categoriesFetch = [] }) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function handleClick(id) {
    const params = new URLSearchParams(searchParams);
    params.set("category", id);
    params.delete("page");

    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div>
      <ul className="w-56 menu bg-base-200 rounded-box">
        <li>
          <h2 className="menu-title">categories</h2>
          <ul>
            {categoriesFetch.map((category) => (
              <li
                key={category.id}
                onClick={() => handleClick(category.id)}
                className={
                  searchParams.has("category") &&
                  searchParams.get("category") == category.id
                    ? "text-red-500"
                    : ""
                }
              >
                {category.name}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
