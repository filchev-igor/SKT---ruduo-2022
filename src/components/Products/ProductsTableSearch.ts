export const ProductsTableSearch = (
    {
        initialProductList,
        handleProductList
    }: {
        initialProductList: { category: string, price: number }[],
        handleProductList: (value: object[]) => void}
) => {
    const handleSearchBy = (value: string, type : string) => {
        const filteredProductList = type === 'price'
            ? initialProductList.filter(({price}) => price.toString().includes(value))
            : initialProductList.filter(({category}) => category.includes(value));

        handleProductList(filteredProductList)
    };

    setTimeout(() => {
        const searchByPriceInput = document.querySelector<HTMLInputElement>('#searchByPrice');
        const searchByCategoryInput = document.querySelector<HTMLInputElement>('#searchByCategory');

        searchByPriceInput?.addEventListener('input', (ev: Event) => {
            const {value} = ev.target as HTMLInputElement;

            handleSearchBy(value, 'price');
        });
        searchByCategoryInput?.addEventListener('input', (ev: Event) => {
            const {value} = ev.target as HTMLInputElement;

            handleSearchBy(value, 'category');
        });
    }, 1_000);

    return `        
        <div>
            <input id="searchByPrice" type="number" placeholder="Search by price">
        </div>
        
        <div>
            <input id="searchByCategory" placeholder="Search by category">
        </div>
    `;
};