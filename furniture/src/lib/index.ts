import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner']{
   ...
}|order(_createdAt asc)`;

const productsQuery = groq`*[_type == 'product']{
    ...
 }|order(_createdAt asc)`;
const tablesQuery = groq`*[_type == 'table']{
    ...
 }|order(_createdAt asc)`;
const itemsQuery = groq`*[_type == 'items']{
    ...
 }|order(_createdAt asc)`;

const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
   ...
  } | order(_createdAt asc)`;

export { bannerQuery, productsQuery, bestSellersQuery, itemsQuery, tablesQuery };
