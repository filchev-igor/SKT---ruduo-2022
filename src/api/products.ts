import {getJsonXMLHttpRequest} from "../utils/asyncXMLHttpRequest";

export const getProducts = async () => {
    // @ts-ignore
    const {status, statusText, response} = await getJsonXMLHttpRequest('../../mockData/products.json');

    return !!response ? JSON.parse(response) : {};
};