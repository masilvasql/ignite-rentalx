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
        email,
        driver_license,
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_license,
            password,
            avatar,
            id,
        });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOneBy({ email });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOneBy({ id });
        return user;
    }
}

export { UsersRepository };
