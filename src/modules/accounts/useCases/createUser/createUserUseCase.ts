import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/IcreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUsecase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        username,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
    }
}

export { CreateUserUsecase };
