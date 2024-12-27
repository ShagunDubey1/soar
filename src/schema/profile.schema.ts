import { z } from 'zod';

export const ProfileFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
  dateOfBirth: z.string(), // Assuming you're using a string for the date
  presentAddress: z
    .string()
    .min(5, { message: 'Present address is too short' }),
  permanentAddress: z
    .string()
    .min(5, { message: 'Permanent address is too short' }),
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long' }),
  postalCode: z.string().regex(/^\d{5}$/, { message: 'Invalid postal code' }),
  country: z
    .string()
    .min(2, { message: 'Country must be at least 2 characters long' }),
});

export type ProfileFormProps = z.infer<typeof ProfileFormSchema>;
