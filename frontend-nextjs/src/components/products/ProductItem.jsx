// ProductItem.jsx
import { getBlurDataUrl, numberFormat } from "@/utils/helpers";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ product }) {
  return (
    <div className="relative w-auto bg-black shadow-xl card bg-opacity-90 h-82">
      <figure className="relative w-full h-60">
        <Image
          src={product.primary_image}
          alt={product.slug}
          layout="fill"
          objectFit="cover"
          className="object-cover pointer-events-none"
          placeholder="blur"
          blurDataURL={getBlurDataUrl()}
        />
        <div className="absolute justify-center hidden text-black bg-slate-500 bg-slat rounded-2xl lg:card-actions bottom-4 left-1/2">
          <p className="badge badge-sm badge-outline">{product.category}</p>
        </div>
      </figure>
      <div className="p-2 card-body">
        <h2 className="text-sm card-title">{product.name}</h2>
        <div className="flex items-center space-x-3">
          <h3 className="text-xs">{product.description}</h3>

          <span>
            {product.is_sale ? (
              <>
                <del className="text-xs">{numberFormat(product.price)}$</del>
                <p className="mt-1 text-xs text-red-700">
                  {numberFormat(product.sale_price)}$
                </p>
              </>
            ) : (
              <>
                <p className="text-xs">{numberFormat(product.price)}$</p>
              </>
            )}
          </span>
        </div>
        {/* Button */}
        <Link
          href={`/product/${product.slug}`}
          className="relative inline-flex items-center justify-center p-2 px-4 py-2 mt-2 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
        >
          <span className="absolute top-0 left-0 w-32 h-32 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease" />
          <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span className="absolute bottom-0 left-0 w-20 h-20 -ml-10 bg-purple-500 rounded-full blur-md" />
            <span className="absolute bottom-0 right-0 w-20 h-20 -mr-10 bg-pink-500 rounded-full blur-md" />
          </span>
          <span className="relative flex space-x-4 text-white">
            <ShoppingCart />
            <p className="hidden group-hover:flex">buy</p>
          </span>
        </Link>
      </div>
    </div>
  );
}
