import { type SchemaTypeDefinition } from "sanity";
import banner from "../schemas/banner";
import products from "../schemas/products";
import category from "../schemas/category";
import items from "../schemas/items";
import tables from "../schemas/tables";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, items, products, category, tables],
};
