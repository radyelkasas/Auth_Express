import { z } from "zod";

export const authSchema = {
  register: z.object({
    body: z.object({
      username: z
        .string({ required_error: "Username is required" })
        .min(3, "Username must be at least 3 characters long")
        .max(30, "Username must be at most 30 characters long"),
      email: z
        .string({ required_error: "Email is required" })
        .email("Invalid email address"),
      password: z
        .string({ required_error: "Password is required" })
        .min(6, "Password must be at least 6 characters long")
        .max(30, "Password must be at most 30 characters long")
    })
  })
};
