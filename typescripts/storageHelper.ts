
class ProductStorage {
    // Add product
    static addProduct(p: Product): void {
        let prods = this.getAllProducts();
        prods.push(p);

        let data = JSON.stringify(prods);
        localStorage.setItem("prods", data);
    }

    // Retrieve all products
    /**
     * Returns all products or an empty
     * array if no products are stored
     */
    static getAllProducts(): Product[] {
        let data = localStorage.getItem("prods");

        if (data == null) {
            return new Array<Product>();
        }

        return <Product[]>JSON.parse(data);
    }

    // Get number of products
    static getNumberOfProducts() {
        let prods = ProductStorage.getAllProducts();
        return prods.length;
    }
}