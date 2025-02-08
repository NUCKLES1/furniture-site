import { defineField, defineType } from "sanity";

export default defineType({
  name: "tables",
  title: "tables",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "image1",
      title: "Image1",
      type: "image",
      options: {
        hotspot: true,
      },
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
      name: "quantity",
      title: "Quantity",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      position: "position",
    },
  },
});
