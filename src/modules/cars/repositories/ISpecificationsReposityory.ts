import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsReposityory {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsReposityory, ICreateSpecificationDTO };
