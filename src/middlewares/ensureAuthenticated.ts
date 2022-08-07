import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing!");
    }

    const [_, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "96f08fadaaed395b9f45369340f547dd"
        ) as IPayload;

        const usersRepositoty = new UsersRepository();
        const user = await usersRepositoty.findById(user_id);

        if (!user) {
            throw new Error("User does not exists!");
        }

        next();
    } catch {
        throw new Error("Invalid Token");
    }
}
