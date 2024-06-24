import { getBlurDataUrl, numberFormat } from "@/utils/helpers";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../button/button/Button";

export default function ProductItem({ product }) {
  return (
    <div className="relative w-auto bg-black shadow-xl card bg-opacity-90 h-82">
      <figure className="relative w-full h-60">
        <Image
          src={product.primary_image}
          alt={product.slug}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover pointer-events-none"
          placeholder="blur"
          blurDataURL={getBlurDataUrl()}
        />

        <div className="absolute justify-center hidden text-black bg-slate-500 rounded-2xl lg:card-actions bottom-4 left-1/2">
          <p className="badge badge-sm badge-outline">{product.category}</p>
        </div>
      </figure>
      {/* add min-h-[160px] for fix height product cart */}
      <div className="flex flex-col justify-between p-2 card-body min-h-[160px]">
        <Link href={`/products/${product.slug}`}>
          <h2 className="text-sm card-title">{product.name}</h2>
        </Link>
        <div className="flex items-center space-x-3 ">
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
        <CustomButton href={`/product/${product.slug}`} text="buy" />
      </div>
    </div>
  );
}
