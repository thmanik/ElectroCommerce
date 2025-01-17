import config from "@/config/config";
import { TProduct } from "@/types/products/product";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import EcButton from "../EcButton/EcButton";

type TProps = {
  product: TProduct;
  className?: string;
};
const ProductCardPrimary = ({ product, className }: TProps) => {
  const discountBadgeClass =
    product.discountPercent && Number(product.discountPercent) > 10
      ? "bg-red-500 text-white  md:text-xs px-2 py-1 rounded fire-animation"
      : "bg-green-500 text-white  md:text-xs px-2 py-1 rounded";

  return (
    <Link
      href={{
        pathname: `/product/${product._id}/${product.slug}`,
        // query: {
        //   id: product._id,
        // },
      }}
      className={twMerge(
        "bg-white h-full  flex flex-col justify-between gap-3 group ring-1  ring-gray-100 shadow-md hover:ring-primary transition-all",
        className
      )}
    >
      <div className="flex flex-col gap-5 py-2 xms:text-[8px] xls:text-[10px] sm:text-xs md:text-sm relative">
        {product.discountPercent > 0 && (
          <div className={`absolute top-0 left-0 ${discountBadgeClass}`}>
            {product.discountPercent}% Off
          </div>
        )}

        <div className="bg-base-100  ">
          <Image
            src={`${config.base_url}/${product.thumbnail?.src} ` || ""}
            alt={product.thumbnail?.alt || ""}
            height={400}
            width={400}
            className=" w-full min-w-[80px] aspect-square object-cover mx-auto"
            priority
          />
        </div>
        <div className="flex flex-col gap-2 px-2 md:px-3">
          <h2 className="font-semibold text-gray-600 xms:text-[10px] xls:text-xs sm:text-sm md:text-base">
            {product?.title?.length < 40 ? (
              product?.title
            ) : (
              <>{product?.title?.slice(0, 40)}...</>
            )}
          </h2>
          <div className="flex justify-between">
            <div>
              {product.salePrice ? (
                <>
                  <span className="text-gray-500 xms:text-[9px] xls:text-[10px] sm:text-[10px] md:text-xs">
                    &#2547;
                    <del>{product.regularPrice}</del>
                  </span>
                  <span className="font-bold xms:text-xs xls:text-xs sm:text-sm md:text-md  ">
                    {" "}
                    &#2547;{product.salePrice}
                  </span>
                </>
              ) : (
                <>
                  <span className="font-bold text-muted xms:text-[6px] xls:text-[8px] sm:text-[10px] md:text-xs">
                    &#2547;{product.regularPrice}
                  </span>
                </>
              )}
            </div>
            <div>
              {product.stockStatus ? (
                <span
                  className={`${product?.stockStatus === "In stock" ? "text-green-500" : "text-red-500"} xms:text-[10px] xls:text-[10px] sm:text-sm md:text-sm`}
                >
                  {product?.stockStatus}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <EcButton className="flex-grow rounded-none font-semibold text-white max-h-[40px]">
        View details
      </EcButton>
    </Link>
  );
};

export default ProductCardPrimary;
