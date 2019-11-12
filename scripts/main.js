window.onload = function () {
    initBuyButtons();
};
/**
 * Wire up all the "Buy" buttons to call buyProduct
 */
function initBuyButtons() {
    var buyBtns = document.querySelectorAll("div.buy");
    for (var i = 0; i < buyBtns.length; i++) {
        var currBtn = buyBtns[i];
        currBtn.onclick = buyProduct;
    }
}
function buyProduct() {
    var prod = getProduct();
    saveProductToCart(prod);
}
function getProduct() {
    var currBuyBtn = this;
    console.log("The buy button that was clicked");
    console.log(currBuyBtn);
    var currProdDiv = currBuyBtn.parentElement;
    console.log("The parent product div");
    console.log(currProdDiv);
    var prod = new Product();
    prod.title = currProdDiv.querySelector("div.title").innerHTML;
    var price = currProdDiv.querySelector("div.price").innerHTML;
    price = price.replace("$", "");
    prod.price = parseFloat(price);
    prod.description = currProdDiv.querySelector("div.description").innerHTML;
    console.log(prod);
    return prod;
}
function saveProductToCart(p) { }
/**
 * Represents a single shopping cart item
 */
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
// Test Code
/*
let product = new Product
product.title = "something";
product.description = "something something";
product.price = 4.99;
*/
