import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellersQuery, productsQuery, itemsQuery, tablesQuery } from ".";

export const revalidate = 0;

const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};

const getProductsData = async () => {
  const productsData = await client.fetch(productsQuery);
  return productsData;
};

const getProductsItemData = async () => {
  const itemsData = await client.fetch(itemsQuery);
  return itemsData;
};

const getTablesData = async () => {
  const tablesData = await client.fetch(tablesQuery);
  return tablesData;
};

const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};

export { getBannersData, getProductsData, getBestSellersData, getProductsItemData, getTablesData  };
