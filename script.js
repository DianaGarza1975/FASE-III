document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const close = document.getElementsByClassName('close')[0];
    const productLinks = document.querySelectorAll('.product-link');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    
    let total = 0;
    
    function openModal(event) {
        event.preventDefault();
        const info = this.getAttribute('data-info');
        const title = this.innerText;
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = info;
        modal.style.display = 'block';
    }
    
    function addToCart(event) {
        const price = parseFloat(this.closest('.producto').getAttribute('data-price'));
        const name = this.previousElementSibling.innerText;

        const listItem = document.createElement('li');
        listItem.innerText = `${name} - $${price.toFixed(2)}`;
        carritoItems.appendChild(listItem);

        total += price;
        carritoTotal.innerText = `$${total.toFixed(2)}`;
    }
    
    productLinks.forEach(link => {
        link.addEventListener('click', openModal);
    });
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
    
    close.onclick = function() {
        modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

