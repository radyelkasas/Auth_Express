import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .default("5000"),
  EMAIL_HOST: z.string().optional(),
  EMAIL_PORT: z.string().optional(),
  EMAIL_USER: z.string().optional(),
  EMAIL_PASS: z.string().optional(),
  EMAIL_SECURE: z.string().optional(),
  VERIFICATION_TOKEN_EXPIRY: z.string().default("24")
});

type EnvSchema = z.infer<typeof envSchema>;

let env: EnvSchema;

export const validateEnv = (): EnvSchema => {
  try {
    env = envSchema.parse(process.env);
    return env;
  } catch (error) {
    console.error("Error validating environment variables:", error);
    process.exit();
  }
};

export const getEnv = (): EnvSchema => {
  if (!env) {
    return validateEnv();
  }
  return env;
};
