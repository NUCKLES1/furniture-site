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
import AddToCartButton from "@/app/components/products/AddToCartButton";
import { CiBoxes, CiBoxList, CiHeart } from "react-icons/ci";
import ProductCharacteristics from "@/app/components/ProductCharacteristics";
import Imager from "@/app/components/Imager";


const SingleProductPage = async ({ 
  params, 
  } : {
    params: Promise<{ slug: string }>;
  }) => {

  const { slug } = await params;  
  const product = await getProductBySlug(slug);
  if(!product){
    return notFound();
  }



  return (
    <div>
      <Navbar />
      {/*  
      <div>
      <Container className="py-10 flex flex-col md:flex-row gap-10">
        {product?.images && <ImageView images={product?.images}/>}
        <div className="py-10 md:flex-row gap-5 sm:w-full w-[40%]">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {product?.title}
            </h2>
            <PriceView price={product?.price} className="text-lg font-bold"/>
          </div>
          {product?.quantity && ( <p className="bg-green-100 text-center w-24 text-green-600 text-sm  py-2.5 font-semibold rounded-lg">In Stock</p> )}
          <p className="text-sm text-gray-600 tracking-wide">{product?.subtext}</p>
          <div className="flex items-center lg:gap-5 gap-2.5">
            <AddToCartButton product={product} className="bg-black/80 hover:bg-black w-full px-5 py-1.5 "/>
            <button className="border-2 border-black/30 text-black/60 px-2.5 py-1.5 rounded-md hover:text-black hover:border-black">
              <CiHeart className="w-5 h-5"/>
            </button>
          </div>
          <ProductCharacteristics product={product}/>
          <div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600">
             <CiBoxList  className="w-5 h-5"/>
             <p>Compare color</p>
            </div>
          </div>
        </div>
      </Container>
      </div>
      */}
       
      <Container className="h-auto w-full bg-[#ebebeb]">
      <div className="h-[70vh]">
        {/*
          {product?.images && <ImageView images={product?.images}/>} */}
          <Imager product={product}/>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full p-4">

          <div className="w-full md:col-span-2 xl:col-span-3  flex flex-col justify-center">
            <ProductInfo product={product}/>
          </div>
        </div>
        <div className="flex w-full h-[21.5rem] md:grid-cols-2 lg:grid-cols-4 gap-2">

        </div>
      </Container>
      
      <Footer />
    </div>
  );
};

export default SingleProductPage;
