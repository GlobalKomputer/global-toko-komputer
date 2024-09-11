let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-price');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemElement);
    });
    totalElement.textContent = totalPrice;
    document.querySelector('.cart a').textContent = `Cart (${cart.length})`;
}

function searchProduct() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchInput)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function checkout() {
    let cartDetails = 'Your Cart:\n';
    cart.forEach(item => {
        cartDetails += `${item.name} - $${item.price}\n`;
    });
    cartDetails += `\nTotal Price: $${totalPrice}`;
    window.print();
    alert(cartDetails);
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
