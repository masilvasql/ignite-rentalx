import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticatUserUseCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;
        const authenticateUserUsecase = container.resolve(
            AuthenticateUserUseCase
        );
        const authenticateInfo = await authenticateUserUsecase.execute({
            email,
            password,
        });

        return response.status(200).json(authenticateInfo);
    }
}

export { AuthenticateUserController };
