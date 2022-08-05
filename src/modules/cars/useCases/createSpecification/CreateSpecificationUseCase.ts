import { inject, injectable } from "tsyringe";

import { ISpecificationsReposityory } from "../../repositories/ISpecificationsReposityory";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsReposityory
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists");
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
