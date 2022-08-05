import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implemenations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implemenations/SpecificationsRepository";
import { ISpecificationsReposityory } from "../../modules/cars/repositories/ISpecificationsReposityory";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsReposityory>(
    "SpecificationsRepository",
    SpecificationsRepository
);
