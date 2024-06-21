import CategoriesList from "@/src/components/menu/CategoriesList";
import ProductList from "@/src/components/menu/ProductList";
import { getFetch } from "@/utils/fetch";
import { Search } from "lucide-react";
import { Suspense } from "react";
import Loading from "../../components/menu/Loading";

export default async function MenuPage({ searchParams }) {
  const categoriesFetch = await getFetch("/categories");
  const params = new URLSearchParams(searchParams);
  // console.log(searchParams, query parameters from the URL );
  // console.log(params.toString());
  //   console.log(categoriesFetch);

  return (
    <div>
      <section className="flex">
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
        <div className="flex items-center justify-center flex-grow mt-4">
          <Suspense key={params.toString()} fallback={<Loading />}>
            <ProductList params={params.toString()} />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
