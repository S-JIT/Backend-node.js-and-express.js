const fs = require("fs").promises;
const path = require("path");

const rootDir = require("../util/path.js");

const getProductsFromFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath);
        return data;
    } catch (error) {
        return [];
    }
}

module.exports = class Product {

    constructor(title) {
        this.title = title;
    }

    async save() {
        const p = path.join(rootDir, 'data', 'products.json');
        try {
            let products = await Product.fetchAllProducts();
            products.push(this);
            await fs.writeFile(p, JSON.stringify(products));
        } catch (error) {
            console.log(error);
        }
    }

    static async fetchAllProducts() {
        const p = path.join(rootDir, 'data', 'products.json');
        try {
            const data = await getProductsFromFile(p);
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }
}
