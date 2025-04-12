import { NextFunction, Request, Response } from "express";
import { AuthServices } from "../services/authServices";

//** Handle the HTTP request and response for the auth route
export class AuthController {
  private authServices = new AuthServices();

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const registeredUser = await this.authServices.register(userData);

      res.status(200).json({
        status: "success",
        message: "User registered successfully",
        data: { ...registeredUser }
      });
    } catch (error) {
      console.error("Error in register controller:", error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData = req.body;
      const loggedInUser = await this.authServices.login(userData);

      res.status(200).json({
        status: "success",
        message: "User loggedIn successfully",
        data: { ...loggedInUser }
      });
    } catch (error) {
      console.error("Error in register controller:", error);
    }
  };
}
