"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarList() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
    { href: "/menu", label: "menu" },
  ];

  return (
    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#101827] rounded-box w-52 lg:menu-horizontal lg:bg-transparent lg:shadow-none lg:p-0 lg:rounded-none lg:w-auto">
      {links.map(({ href, label }) => (
        <li key={href} className="hover:text-red-500">
          <Link href={href} className={pathname === href ? "text-red-500" : ""}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarList;
