import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg relative border-2 border-gray-300 bg-white ">
      <div
        style={{ position: "relative", width: "100%" }}
        className="lg:h-64 md:h-48  h-80"
      >
        <Image
          fill
          className="w-full"
          src={product.images[0].src}
          alt={product.title}
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 capitalize text-gray-900">
          {product.title}
        </div>
        <p className="text-gray-700 text-base ">
          Created At: {product.created_at}
        </p>
        <p className="text-gray-700 text-base">
          Updated At: {product.updated_at}
        </p>
        <p className="text-gray-700 text-base">
          Price: {product.variants[0].price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
