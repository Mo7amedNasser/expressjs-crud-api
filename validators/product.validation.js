import { z } from "zod";

// This schema validates a product object
export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number({ invalid_type_error: "Price must be a number" }),
  image: z.string().optional(),
  quantity: z.number().optional(),
});
