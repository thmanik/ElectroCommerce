import { useBaseUrl } from "@/hooks/useBaseUrl";
import { TProduct } from "@/types/products/product";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import Link from "next/link";
const ProductCardSecondary = ({ product }: { product: TProduct }) => {
  const baseUrl = useBaseUrl();
  return (
    <div className="grid grid-cols-4 w-80 gap-3 p-2">
      <div>
        <Image
          src={`${baseUrl}/${product.image.src}`}
          alt={product.image.alt}
          width={300}
          height={300}
          className="w-20 h-20 object-cover"
        />
      </div>
      <div className="col-span-3 space-y-1">
        <Link
          href={`/product/${product._id}`}
          className="font-semibold text-secondary hover:text-primary"
        >
          {product.title}
        </Link>
        <Rating style={{ maxWidth: 80 }} value={3.5} readOnly />
        <div>
          {product.salePrice ? (
            <>
              <span className="text-muted text-xs">
                &#2547;
                <del>{product.price}</del>
              </span>
              <span className="font-bold"> &#2547; {product.salePrice}</span>
            </>
          ) : (
            <>
              <span className="font-bold">{product.price}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSecondary;