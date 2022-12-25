import {getProducts} from "../../api/products";
import "./ProductsTableStyle.css"

export const ProductsTable = async () => {
    const productList = await getProducts();

    console.log(productList);

    const goodCharacteristics = productList?.[0]?.products?.[0];

    const tableHead = Object
        .keys(goodCharacteristics)
        .map((value: string | number) => {
            return `<th class="th">${value}</th>`;
        })
        .join('');

    const tableBody = productList
        .map(({products} : {products : object}) => products)
        .flat()
        .map((obj: object) => {
            const tableBodyColumns = Object
                .values(obj)
                .map(value => `<td class="td">${value}</td>`)
                .join('');

            return `<tr class="tr">${tableBodyColumns}</tr>`;
        })
        .join('');

    return `
        <table class="table">
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