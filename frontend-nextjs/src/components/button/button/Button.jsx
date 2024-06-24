import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const CustomButton = ({ href, text, style }) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center p-2 px-4 py-2 mt-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group ${style}`}
    >
      <span className="absolute top-0 left-0 w-32 h-32 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease" />
      <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
        <span className="absolute bottom-0 left-0 w-20 h-20 -ml-10 bg-purple-500 rounded-full blur-md" />
        <span className="absolute bottom-0 right-0 w-20 h-20 -mr-10 bg-pink-500 rounded-full blur-md" />
      </span>
      <span className="relative flex space-x-4 text-white">
        <ShoppingCart />
        <p className="hidden group-hover:flex">{text}</p>
      </span>
    </Link>
  );
};

export default CustomButton;
