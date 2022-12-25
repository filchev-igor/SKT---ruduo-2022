import {ProductsTable} from "./ProductsTable";

export const Products = async () => {
    const table = await ProductsTable();
    const data = 55;

    return `
        55
    
        ${table}
    `;
}