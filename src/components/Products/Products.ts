import {ProductsTable} from "./ProductsTable";
import {ProductsTableSearch} from "./ProductsTableSearch";
import './Products.css';
import {SEARCH_COMPONENTS_STYLES} from "../../constants/products";
import {getProducts} from "../../api/products";

export const Products = async () => {
    const products = await getProducts();

    const productCharacteristics = Object
        .keys(products?.[0]?.products?.[0]);
    const flattenProductList = products
        .map(({products} : {products : object}) => products)
        .flat();
    
    let productsList = flattenProductList;

    const tableComponent = ProductsTable({
        headers: productCharacteristics,
        productsList
    });

    const setProductListFilter = (newProductList: object[]) => {
        productsList = newProductList;

        document.querySelector<HTMLDivElement>('#table-container')!.innerHTML = ProductsTable({
            headers: productCharacteristics,
            productsList
        });
    };

    const searchComponent = ProductsTableSearch({
        initialProductList: flattenProductList,
        handleProductList: setProductListFilter
    });

    return `
        <div class="${SEARCH_COMPONENTS_STYLES}">${searchComponent}</div>
    
        <div class="grid-container" id="table-container">${tableComponent}</div>
    `;
}