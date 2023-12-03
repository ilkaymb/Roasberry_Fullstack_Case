// components/ShopCard.js

const ShopCard = ({ shopInfo }) => {
  return (
    <div className="w-full bg-white shadow-md rounded-lg overflow-hidden mb-6 py-8 px-4">
      <div className="p-6">
        <p className="font-bold text-2xl mb-2 text-black ">
          {shopInfo.shop.name}
        </p>
        <div className="border-b mb-2"></div>
        <p className="text-gray-700 mb-2 text-lg">
          <span className="font-semibold text-black ">Email:</span>{" "}
          {shopInfo.shop.email}
        </p>
        <p className="text-gray-700 text-lg">
          <span className="font-semibold text-black ">Domain:</span>{" "}
          {shopInfo.shop.domain}
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
