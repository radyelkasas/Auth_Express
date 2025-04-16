import crypto from "crypto";
import { getEnv } from "../utils/validateEnv";
import { EmailServices } from "./emailServices";

interface LoggedInUser {
  email: string;
  password: string;
}

interface RegisteredUser {
  email: string;
  password: string;
  name: string;
}

export class AuthServices {
  sendEmil = new EmailServices();
  register = async (userData: RegisteredUser) => {
    const verficationToken = crypto.randomBytes(32).toString("hex");

    const { VERIFICATION_TOKEN_EXPIRY } = getEnv();
    const expiryHours = parseInt(VERIFICATION_TOKEN_EXPIRY, 10);
    const verficationTokenExpries = new Date();
    verficationTokenExpries.setHours(
      verficationTokenExpries.getHours() + expiryHours
    );

    try {
      const messageSuccessful = await this.sendEmil.sendEmail({
        email: userData.email,
        token: verficationToken,
        expiryHours: expiryHours
      });

      if (messageSuccessful) {
        console.log("Verification email sent successfully.");
      } else {
        console.error("Failed to send verification email.");
      }
      return {
        ...userData,
        // verficationToken,
        // verficationTokenExpries,
        success: "true",
        message: "Verification email sent successfully."
      };
    } catch (error) {
      console.error("Error in sending email:", error);
      throw new Error("Failed to send verification email.");
    }
  };

  login = async (userData: LoggedInUser) => {
    return { ...userData };
  };
}
