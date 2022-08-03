import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { Repository } from "typeorm";

import AppDataSource from "../../../../database/data-source";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    private repository: Repository<Category>;

    constructor(private categoriesRepository: ICategoriesRepository) {
        this.repository = AppDataSource.getRepository(Category);
    }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (category) => {
            const { name, description } = category;
            const existCategory = await this.repository.findOneBy({ name });
            if (!existCategory) {
                const repository = this.repository.create({
                    name,
                    description,
                });

                await this.repository.save(repository);
            }
        });
    }
}

export { ImportCategoryUseCase };
