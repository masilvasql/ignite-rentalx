import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;

        const avatar_File = request.file.path;

        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase
        );

        await updateUserAvatarUseCase.execute({ user_id: id, avatar_File });

        return response.status(204).send();
    }
}

export { UpdateUserAvatarController };
