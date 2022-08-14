import fs from "fs";

export const deleteFile = async (fileName: string) => {
    try {
        await fs.promises.stat(fileName); // verifica se o file existe no path que foi passado
    } catch (err) {
        return;
    }

    await fs.promises.unlink(fileName);
};
