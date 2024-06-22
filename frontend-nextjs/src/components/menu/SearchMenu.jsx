"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchMenu() {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const pathName = usePathname();

  function handleSearch() {
    const params = new URLSearchParams();
    params.set("search", term);

    router.replace(`${pathName}?${params.toString()}`);

    // console.log(term);
    // example url: .../menu?search=str
  }

  return (
    <div>
      <label
        htmlFor="search"
        className="flex items-center gap-2 input input-bordered"
      >
        <input
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          type="text"
          id="search"
          name="search"
          className="grow"
          placeholder="Search"
        />
        <button
          className="hover:text-red-500"
          onClick={() => term !== "" && handleSearch()}
        >
          <Search />
        </button>
      </label>
    </div>
  );
}
