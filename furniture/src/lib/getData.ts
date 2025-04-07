import { client } from "@/sanity/lib/client";
import { bannerQuery, bestSellersQuery, productsQuery, tablesQuery, allProductsQuery, recomendedQuery } from ".";

export const revalidate = 0;

const getBannersData = async () => {
  const bannersData = await client.fetch(bannerQuery);
  return bannersData;
};

const getProductsData = async () => {
  const productsData = await client.fetch(productsQuery);
  return productsData;
};
const getAllProductsData = async () => {
  const allProductsData = await client.fetch(allProductsQuery);
  return allProductsData;
};
const getRecomendedData = async () => {
  const recomendedData = await client.fetch(recomendedQuery);
  return recomendedData;
};

const getTablesData = async () => {
  const tablesData = await client.fetch(tablesQuery);
  return tablesData;
};

const getBestSellersData = async () => {
  const bestSellersData = await client.fetch(bestSellersQuery);
  return bestSellersData;
};

export { getBannersData, getProductsData, getBestSellersData, getTablesData, getAllProductsData, getRecomendedData };
