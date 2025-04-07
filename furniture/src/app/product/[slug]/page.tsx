import Container from "../../components/Component";
import { groq } from "next-sanity";
import { ProductData } from "../../../../types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import ProductInfo from "../../components/ProductInfo";
import { getBestSellersData, getProductsData } from "@/lib/getData";
import ProductCard from "../../components/ProductCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getProductBySlug } from "@/sanity/helper/query";
import { notFound } from "next/navigation";
import ImageView from "@/app/components/ImageView";
import PriceView from "@/app/components/PriceView";
import AddToCartButton from "@/app/components/AddToCartButton";
import { CiBoxes, CiBoxList, CiHeart } from "react-icons/ci";
import ProductCharacteristics from "@/app/components/ProductCharacteristics";
import Imager from "@/app/components/Imager";
import Propro from "@/app/components/Propro";
import { Provider } from "react-redux";
import store from "../../../../store";
import FormattedPrice from "@/app/components/FormattedPrice";
import Lister from "@/app/components/Lister";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) {
    return notFound();
  }

  const priceFormat = new Number(product.price).toLocaleString("en-NIGERIA", {
    currency: "NGN",
    style: "currency",
    minimumFractionDigits: 2,
  });

  return (
    <div className="w-full overflow-hidden">
      <Navbar />

      <div className="h-auto w-full bg-[#ebebeb]">
        <div className="lg:h-[70vh] lg:hidden sm:block sm:h-[40vh]">
          {product?.images && <ImageView images={product?.images} />}
        </div>

        <div className="lg:h-[70vh] max-sm:hidden">
          {/*
          {product?.images && <ImageView images={product?.images}/>} */}
          <div className="overflow-hidden mt-[-2rem] mb-8">
            <div className="slidely-track lg:h-[75vh] sm:h-[10vh]">
              {product?.images && (
                <Image
                  src={urlFor(product?.images[0]).url()}
                  width={800}
                  height={200}
                  alt="productimage"
                  priority
                  className={`lg:mt-8 max-md:mt-[-2rem] sm:mt-2 slidely lg:ml-2 sm:ml-[24%] max-md:ml-0 object-cover cursor-grabbing`}
                />
              )}
              {product?.images && (
                <Image
                  src={urlFor(product?.images[1]).url()}
                  width={800}
                  height={200}
                  alt="productimage"
                  priority
                  className={`mt-8 slidely max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[24%] max-md:ml-0 object-cover cursor-grabbing`}
                />
              )}
              {product?.images && (
                <Image
                  src={urlFor(product?.images[3]).url()}
                  width={800}
                  height={200}
                  alt="productimage"
                  priority
                  className={`mt-8 slidely max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[24%] max-md:ml-0 object-cover cursor-grabbing`}
                />
              )}
            </div>
          </div>
        </div>
        <div
          className="
        w-full h-full sm:p-0 lg:p-4"
        >
          <div className="w-full pt-8">
            <div className="w-full pl-4 h-auto">
              <div className="flex pb-12 px-2 h-auto lg:w-[74%] lg:ml-[27%] max-sm:ml-4 max-sm:w-full flex-col">
                <div className="lg:border-l-3 sm:border-l-1 border top-0 lg:h-[114.5rem] max-sm:h-[132rem] max-sm:left-2 absolute"></div>
                <div className="h-[30rem] max-sm:ml-[-1.5rem] w-full">
                  <div className="w-full justify-between sm:block lg:flex">
                    <div className="lg:w-[40%] max-sm:ml-[-2rem] max-sm:pl-8 lg:pl-2 sm:w-full">
                      <h2 className="text-4xl lg:pt-16 max-sm:pt-4 leading-none text-[#231f20] font-semibold">
                        {product?.title}
                      </h2>
                      <h2 className="text-3xl leading-none text-[#231f20]">
                        {product?.description}
                      </h2>
                    </div>

                    <div className="lg:w-[20rem] max-sm:mt-20 max-sm:w-full max-sm:text-left lg:text-right">
                      <div className="lg:text-2xl max-sm:text-[25px] font-bold text-[#231f20] w-full">
                        <span className="lg:text-[1.5rem] lg:text-right max-sm:text-[25px]">
                          {priceFormat}
                        </span>
                      </div>
                      <button className="border mt-2 w-full py-5 tiny ">
                        Sizes
                      </button>

                      <AddToCartButton product={product} />
                    </div>
                  </div>
                  <div className="absolute left-0 border-line w-full"></div>
                  <div className="sm:block w-full h-auto lg:flex">
                    <p className="tiny max-sm:text-[14px] uppercase sm:ml-0 lg:ml-[-5rem] mb-[-4rem] mt-8 pb-4">
                      Description
                    </p>
                    <p className="lg:w-[80%] max-sm:text-2xl max-sm:w-full max-sm:pt-14 max-sm:pl-0 h-auto lg:pl-8">
                      {product?.subtext}
                    </p>
                  </div>
                </div>
                <div className="max-sm:mt-[30rem]">
                  <p className="tiny uppercase max-sm:text-[14px] max-sm:ml-[-1.4rem] ml-[-4.5rem]">
                    DIMENSION
                  </p>
                  <div>
                    {product?.images && (
                      <Image
                        src={urlFor(product?.images[4]).url()}
                        width={200}
                        height={200}
                        alt="productimage"
                        priority
                        className={`mt-8 w-[60%] max-sm:h-[15rem] max-sm:w-[90%] max-md:mt-[-2rem] max-sm:mt-16 ml-2 max-sm:ml-[0] max-md:ml-0`}
                      />
                    )}
                  </div>
                  <div className="lg:w-[70%] max-sm:w-full max-sm:mt-[4rem] lg:mt-[12rem] max-sm:ml-[-1.5rem] lg:ml-7 h-[20rem]">
                    <div className="lg:ml-[-9rem] sm:ml-0 sm:text-left lg:text-right w-24">
                      <p className="tiny uppercase sm:mb-0 lg:mb-[-2rem]">
                        Technical <br />
                        specifications
                      </p>
                    </div>
                    <ul className="w-full text-[#231f20]  max-sm:text-[16px] text-[12px] font-semibold bord-t py-3 flex justify-between">
                      <li>MATERIAL</li>
                      <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">
                        MATERIAL
                      </li>
                    </ul>
                    <ul className="w-full  text-[#231f20] max-sm:text-[16px] text-[12px]  font-semibold bord-t py-3 flex justify-between">
                      <li>COLOR</li>
                      <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">
                        MATERIAL
                      </li>
                    </ul>
                    <ul className="w-full  font-semibold text-[#231f20] max-sm:text-[16px] text-[12px] bord-t py-3 flex justify-between">
                      <li>FINISION</li>
                      <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">
                        MATERIAL
                      </li>
                    </ul>
                    <ul className="w-full  font-semibold text-[#231f20] text-[12px] max-sm:text-[16px] bord-t py-3 flex justify-between">
                      <li>DIMENSIONS</li>
                      <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">
                        MATERIAL
                      </li>
                    </ul>
                    <ul className="w-full  font-semibold text-[#231f20] text-[12px] max-sm:text-[16px] bord-t py-3 flex justify-between">
                      <li>WEIGHT</li>
                      <li className="tinny text-[#231f207d] max-sm:text-[14px] pt-1">
                        MATERIAL
                      </li>
                    </ul>
                  </div>
                  <div className=" ml-[-23rem] max-sm:ml-[-1.5rem] border-line border-2 w-full"></div>
                </div>
              </div>
              <div className="lg:flex ml-[-0.5rem] sm:block max-sm:h-auto h-[110vh] w-full">
                <div className="w-[50%] font-bold uppercase text-[#231f20] pt-40 lg:pl-16 leading-10 max-sm:text-[2.5rem] lg:text-[3rem]">
                  <p>
                  {product?.title}<br /> collections
                  </p>
                </div>
                <div className="lg:w-[50%] object-contain sm:w-full max-sm:h-[40rem] overflow-hidden">
                  <div>
                    {product?.images && (
                      <Image
                        src={urlFor(product?.images[3]).url()}
                        width={200}
                        height={200}
                        alt="productimage"
                        priority
                        className={`mt-32 w-full max-md:mt-[-2rem] max-sm:mt-16 max-md:ml-0`}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div>
                <div className=" lg:ml-[-23rem] max-sm:ml-[-0.5rem] border-line border-2 lg:mt-[-2rem] w-full"></div>
                <div>
                  <p className="tiny lg:p-4">COLLECTIONS</p>
                </div>
              </div>
              <div>
                <p className="text-[#231f20] lg:pl-10 leading-none font-bold lg:mt-[15rem] max-sm:mt-[5rem]  max-sm:text-[55px] lg:text-[40px]">
                  Products that may interest <br /> you.
                </p>
              </div>
            </div>
            <Lister />
          </div>
        </div>
        <div className="flex w-full h-[21.5rem] md:grid-cols-2 lg:grid-cols-4 gap-2"></div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProductPage;
