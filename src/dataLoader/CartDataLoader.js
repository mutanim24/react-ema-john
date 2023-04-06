import { getShoppingCart } from "../utilities/fakedb";

const cardDataLoad = async () => {
    const loadedData = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
    const products = await loadedData.json()

    // console.log(products)
    // must need use async to get data from database
    const savedCart = [];

    const storedCart = getShoppingCart();
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            console.log(addedProduct)
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
    // return two value
    // return [products, savedCart]
    // return {products, savedCart}


}

export default cardDataLoad;