import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot } from "./sanity.types";

export interface BannerData {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  title: string;
  subtitle: string;
  price: number;
  description: string;
}

type ImageAsset = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type ImageAssets = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type Slug = {
  current: string;
  _type: "slug";
};

type Category = {
  _id: string;
  name: string;
};

export interface ProductData { 
  stock: number;
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  subtext?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  quantity: number;
  price: number;
  ratings: number;
  brand: string;
  position: string;
  rowprice: number;
}
export interface TableData {
  image1: SanityImageSource;
  title: string;
  image: ImageAsset;
  images: ImageAssets;
  quantity: number;
  price: number;
  category: Category[];
  slug: Slug;
  _createdAt: string;
  description: string;
  subtext: string;
  _updatedAt: string;
  ratings: number;
  brand: string;
  _type: "product";
  _id: string;
  position: string;
  rowprice: number;
}


export interface StoreState {
  shoppers: {
    cart: ProductData[];
  };
}
