import {getProducts} from "../api/products";

/*
const tableHead = productList?.map(({products: {
        category,
        image,
        name,
        price,
        quantity
    } : {category: string;
        image: string;
        name: string;
        price: number;
        quantity: number}}) => {

    });
 */

export const ProductsTable = async () => {
    const productList = await getProducts();

    console.log(productList);

    const goodCharacteristics = productList?.[0]?.products?.[0];

    const tableHead = Object
        .keys(goodCharacteristics)
        .map((value: string | number) => {
            return `<th>${value}</th>`;
        })
        .join('');

    const tableBody = productList
        .map(({products} : {products : object}) => products)
        .flat()
        .map((obj: object) => {
            const tableBodyColumns = Object
                .values(obj)
                .map(value => `<td>${value}</td>`)
                .join('');

            return `<tr>${tableBodyColumns}</tr>`;
        })
        .join('');

    return `
        <table>
            <thead>
                <tr>
                    ${tableHead}
                </tr>
            </thead>
            <tbody>
                ${tableBody}
            </tbody>
        </table>
    `
};