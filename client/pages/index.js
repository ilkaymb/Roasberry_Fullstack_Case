import React, { useState, useEffect } from "react";
import { Roboto } from "next/font/google";
import PieChartSection from "./components/PieChartSection";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import AreaChart from "./components/AreaChart";
import { FaUser } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["400"],
});

import "rsuite/dist/rsuite.min.css";
import ProductCard from "./components/ProductCard";
import ShopCard from "./components/ShopCard";
export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [shopProducts, setShopProducts] = useState(null);
  const [shopInfo, setShopInfo] = useState(null);
  const [analyticsData, setAnalyticsData] = useState(null);
  const [orderCount, setOrderCount] = useState(null);
  const [productCount, setProductCount] = useState(null);
  const [customerCount, setCustomerCount] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      // Shopify ürünleri için veri çekme
      const productsResponse = await fetch(
        "http://localhost:5232/api/Shopify/GetShopProducts"
      );
      const productsData = await productsResponse.json();
      setShopProducts(productsData);

      // Shopify mağaza bilgileri için veri çekme
      const shopInfoResponse = await fetch(
        "http://localhost:5232/api/Shopify/GetShopInfo"
      );
      const shopInfoData = await shopInfoResponse.json();
      setShopInfo(shopInfoData);

      // Shopify analiz verileri için veri çekme
      const analyticsResponse = await fetch(
        "http://localhost:5232/api/Shopify/GetAnalyticsData"
      );
      const analyticsData = await analyticsResponse.json();
      setAnalyticsData(analyticsData);
    };

    // Count API endpoint'leri
    const orderCountEndpoint =
      "http://localhost:5232/api/Shopify/GetOrderCount";
    const productCountEndpoint =
      "http://localhost:5232/api/Shopify/GetProductCount";
    const customerCountEndpoint =
      "http://localhost:5232/api/Shopify/GetCustomerCount";

    // Count API'lerine istek atma fonksiyonu
    const fetchCount = async (endpoint, setter) => {
      try {
        const response = await fetch(endpoint);
        if (response.ok) {
          const data = await response.json();
          setter(data.count);
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error("Error fetching count:", error);
      }
    };

    // Count API'lerine istekleri yap
    fetchCount(orderCountEndpoint, setOrderCount);
    fetchCount(productCountEndpoint, setProductCount);
    fetchCount(customerCountEndpoint, setCustomerCount);

    fetchData();
  }, []);
  // Örnek bir Next.js sayfası

  const [visibleProducts, setVisibleProducts] = useState(4); // Başlangıçta kaç ürün gösterileceğini belirleyin

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 2); // Her tıklamada 4 ürün daha göster
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${roboto.className}`}>
      <header className="bg-[#1a1a1a] shadow fixed w-full z-30 ">
        <div className="max-w-7xl mx-auto py-3   flex justify-between items-center container">
          <h1 className="text-3xl font-bold leading-tight text-white">
            Dashboard
          </h1>{" "}
          {isSidebarOpen ? (
            <button
              onClick={toggleSidebar}
              className="p-3 rounded-md text-white bg-red-500 hover:bg-red-700"
            >
              Menüyü Gizle
            </button>
          ) : (
            <button
              onClick={toggleSidebar}
              className="p-3 rounded-md text-white bg-blue-500 hover:bg-blue-700"
            >
              {" "}
              Menü
            </button>
          )}
        </div>
      </header>

      <div className="flex  ">
        <nav
          className={`transform top-0 left-0 w-52 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ top: "67.97px" }}
        >
          <nav
            className={`transform top-0 left-0 w-52	 bg-gray-200 fixed h-full ease-in-out transition-all duration-300 z-30 ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="p-2">
              <ul className="mt-4 ">
                <li className="my-2">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded text-md font-bold"
                  >
                    <span className="flex-1 ml-3">Anasayfa</span>
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded text-md font-bold"
                  >
                    <span className="flex-1 ml-3">Profil</span>
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded text-md font-bold"
                  >
                    <span className="flex-1 ml-3">Ayarlar</span>
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded text-md font-bold"
                  >
                    <span className="flex-1 ml-3">Mesajlar</span>
                  </a>
                </li>
                <li className="my-2">
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded text-md font-bold"
                  >
                    <span className="flex-1 ml-3">Destek</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </nav>

        <div
          className={`flex-1 transition-margin duration-300 ${
            isSidebarOpen ? "ml-52" : "ml-0"
          }`}
        >
          <main
            className="overflow-y-auto"
            style={{ top: 92, position: "relative" }}
          >
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="border-2  bg-white rounded-lg shadow-md h-full flex justify-center  items-center gap-4 w-full text-gray-800 p-6">
                  <FaUser size={"42px"} />
                  <div className="flex flex-wrap	gap-2">
                    <h2 className="text-lg">Customer Count: </h2>
                    <h2 className="text-xl">{customerCount}</h2>
                  </div>
                </div>
                <div className="border-2  bg-white rounded-lg shadow-md h-full flex justify-center items-center gap-4 text-gray-800 p-6">
                  <FaChartPie size={"42px"} />
                  <div className="flex flex-wrap	gap-2">
                    <h2 className="text-lg">Product Count: </h2>
                    <h2 className="text-xl">{productCount}</h2>
                  </div>
                </div>{" "}
                <div className="border-2  bg-white rounded-lg lg:col-span-1 md:col-span-2 shadow-md h-full flex justify-center items-center gap-4 text-gray-800 p-6">
                  <FaShoppingCart size={"42px"} />
                  <div className="flex flex-wrap	gap-2">
                    <h2 className="text-lg">Order Count: </h2>
                    <h2 className="text-xl">{orderCount}</h2>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div>
                  <h2 className="text-gray-900 text-2xl capitalize mb-5 ">
                    Shop Info
                  </h2>
                  {shopInfo != null && <ShopCard shopInfo={shopInfo} />}{" "}
                </div>
                <div className="text-left">
                  <h2 className="text-gray-900 text-2xl capitalize mb-5 ">
                    Products
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {shopProducts != null &&
                      shopProducts.products
                        .slice(0, visibleProducts)
                        .map((product, key) => (
                          <ProductCard key={key} product={product} />
                        ))}
                  </div>
                  {shopProducts != null &&
                    visibleProducts < shopProducts.products.length && (
                      <button
                        onClick={handleShowMore}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                      >
                        Daha Fazla Göster
                      </button>
                    )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white border-2  rounded-lg shadow-md h-full flex justify-center items-start w-full text-white p-8">
                  <BarChart />
                </div>
                <div className="bg-white border-2  rounded-lg shadow-md h-full flex justify-center items-start text-white p-8">
                  <LineChart />
                </div>
                <div className="md:col-span-1 border-2  bg-white rounded-lg shadow-md h-full flex justify-center items-start text-white p-8">
                  <PieChartSection />{" "}
                </div>{" "}
                <div className="md:col-span-1 border-2  lg:col-span-1 bg-white rounded-lg shadow-md h-full flex justify-center items-start text-white p-8">
                  <AreaChart />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
