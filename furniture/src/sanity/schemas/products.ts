import { subtle } from "crypto";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Keep the title relative to product",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "subtext",
      title: "Subtext",
      type: "string",
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: {hotspot: true}}],
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "brand",
      title: "Brand",
      type: "string",
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),

    defineField({
      name: "variant",
      title: "Product",
      type: "string",
      options: {
        list: [
          { title: "Tables", value: "tables" },
          { title: "Chairs", value: "chairs" }
        ]
      }
    })
  ],
  preview: {
    select: {
      title: "title",
      media: "images",
      subtitle: "price",
    },
    prepare(selection){
      const {title, subtitle, media}=selection
      const image=media && media[0]
      return{
        title:title, 
        subtitle:`$${subtitle}`,
        media: image,
      }
    }
  },
});
