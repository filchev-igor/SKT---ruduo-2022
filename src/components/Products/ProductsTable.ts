import "./Products.css"

export const ProductsTable = ({headers, productsList} : {headers : string[], productsList: object[]}) => {
    const tableHead = headers
        .map((value: string | number) => {
            return `<th class="th">${value}</th>`;
        })
        .join('');

    let tableBody = productsList
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