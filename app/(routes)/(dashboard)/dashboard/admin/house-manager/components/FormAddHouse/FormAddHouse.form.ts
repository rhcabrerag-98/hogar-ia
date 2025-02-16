import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string().min(5).max(100),
  city: z.string().min(2).max(50),
  photo: z.string().min(2).max(255),
  builtArea: z.string().min(1),
  bedrooms: z.string().min(1),
  bathrooms: z.string().min(1),
  propertyType: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  isAvailable: z.boolean(),
}); 