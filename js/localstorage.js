const addProduct = ()=>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value='';
    quantityField.value='';
    console.log(product, quantity)
    displayProduct(product, quantity)
    saveToLocalStorage(product, quantity)
}
const displayProduct = (product, quantity)=>{
    const containerProduct = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}- ${quantity}`
    containerProduct.appendChild(li)
}

const getStoredShoppingCart = ()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }return cart;
}

const saveToLocalStorage = (product, quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product]=quantity;
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
    console.log(cartStringified)
}

const diplayCartFromLocalStorage = ()=>{
    const displayCart = getStoredShoppingCart();
    console.log(displayCart)
    for(const product in displayCart){
        const quantity = displayCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity)
    }
}
diplayCartFromLocalStorage();