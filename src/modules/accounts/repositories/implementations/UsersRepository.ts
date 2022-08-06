import { Repository } from "typeorm";

import AppDataSource from "../../../../database/data-source";
import { ICreateUserDTO } from "../../dtos/IcreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository("users");
    }

    async create({
        name,
        username,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
        });
        await this.repository.save(user);
    }
}

export { UsersRepository };
