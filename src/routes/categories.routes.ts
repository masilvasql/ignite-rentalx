import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already Exists" });
    }

    categoriesRepository.create({ name, description });
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    return response.json(categoriesRepository.list());
});

export { categoriesRoutes };
