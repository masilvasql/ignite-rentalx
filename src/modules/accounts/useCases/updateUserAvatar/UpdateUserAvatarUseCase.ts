import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_File: string;
}

@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({ user_id, avatar_File }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(user_id);

        if (user.avatar) {
            await deleteFile(user.avatar);
        }

        user.avatar = avatar_File;

        await this.userRepository.create(user);
    }
}

export { UpdateUserAvatarUseCase };
