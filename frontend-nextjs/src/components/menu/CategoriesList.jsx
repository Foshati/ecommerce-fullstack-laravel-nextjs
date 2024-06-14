import React from "react";

export default function CategoriesList({ categoriesFetch = [] }) {
  return (
    <div>
      <ul className="w-56 menu bg-base-200 rounded-box">
        <li>
          <h2 className="menu-title">categories</h2>
          <ul>
            {categoriesFetch.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
{
  /* <Link href={`/category/${category.id}`}></Link> */
}
