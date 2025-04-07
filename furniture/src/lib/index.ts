import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner']{
   ...
}|order(_createdAt asc)`;

const productsQuery = groq`*[_type == 'product'][0...4]{
    ...
 }|order(_createdAt asc)`;
const allProductsQuery = groq`*[_type == 'product'][]{
    ...
 }|order(_createdAt asc)`;
const recomendedQuery = groq`*[_type == 'product'][0...6]{
    ...
 }|order(_createdAt asc)`;
{/*const tablesQuery = groq`*[_type == 'product' && references(*[_type == 'category' && slug.current == 'frags']._id)][0...4]{
    ...
 }|order(_createdAt asc)`;*/}
const tablesQuery = groq`*[_type == 'product' && references(*[_type == 'category' && slug.current == 'frags']._id)][0...4]{
    ...
 }|order(_createdAt asc)`;


const bestSellersQuery = groq`*[_type == 'product' && position == 'Bestsellers']{
   ...
  } | order(_createdAt asc)`;

export { bannerQuery, productsQuery, bestSellersQuery, tablesQuery, allProductsQuery, recomendedQuery };
