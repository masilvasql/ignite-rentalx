import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategorySerivce } from "../services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategorySerivce(
        categoriesRepository
    );
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    return response.json(categoriesRepository.list());
});

export { categoriesRoutes };