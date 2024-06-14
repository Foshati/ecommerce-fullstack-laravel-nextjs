import CategoriesList from "@/src/components/menu/CategoriesList";
import ProductList from "@/src/components/menu/ProductList";
import { getFetch } from "@/utils/fetch";
import { Search } from "lucide-react";
import React from "react";

export default async function MenuPage() {
  const categoriesFetch = await getFetch("/categories");
  //   console.log(categoriesFetch);
  return (
    <div>
      <section className="flex ">
        <div className="flex-col hidden gap-8 p-4 my-12 ml-8 bg-black lg:flex rounded-3xl">
          <label className="flex items-center gap-2 input input-bordered">
            <input type="text" className="grow" placeholder="Search" />
            <Search />
          </label>
          <CategoriesList categoriesFetch={categoriesFetch} />

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Red pill</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-red-500"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text">Blue pill</span>
              <input
                type="radio"
                name="radio-10"
                className="radio checked:bg-blue-500"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <div>
            <ProductList />
          </div>

          <div>
            <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
