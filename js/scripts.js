let orders = []

let totalordersCost = 0

const pricesPerPizzaType = {
    'Margherita Pizza': 1000,
    'Baristo Pizza': 800,
    'Greek Pizza': 600,
    'Cheese Pizza': 500

}

const pricesPerPizzaSize = {
    'Small': 200,
    'Medium': 300,
    'Large': 500,
}

const pricesPerPizzaTopping = {
    'Bacon': 200,
    'Cheese': 300,
    'Sausage': 500,
}

class Pizza {
    constructor(pizzaName, topping, size, crust, price) {
        this.pizzaName = pizzaName
        this.topping = topping
        this.size = size
        this.crust = crust
        this.price = price
    }
}

function calculatePizzaCost(pizzaName, size, topping) {
    return  pricesPerPizzaType[pizzaName] + pricesPerPizzaSize[size] + pricesPerPizzaTopping[topping]
}

function submitOrder() {
    const pizzaName = document.getElementById("pizza_name").value
    const topping = document.getElementById("topping").value
    const size = document.getElementById("size").value
    const crust = document.getElementById("crust").value
    const price = calculatePizzaCost(pizzaName, size, topping)
    const pizza = new Pizza(pizzaName, topping, size, crust, price)

    orders.push(pizza)
    totalordersCost += price

    closePizzaModal()
    updateCart()
}

function openPizzaModal(pizzaName) {
    // Get the modal
    const pizzaModal = document.getElementById("pizza-modal");

    // Get the <span> element that closes the modal
    const pizzaSpan = document.getElementsByClassName("pizza-close")[0];

    document.getElementById("pizza_name").value = pizzaName

    // When the user clicks on the button, open the modal
    pizzaModal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    pizzaSpan.onclick = function() {
        pizzaModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == pizzaModal) {
            pizzaModal.style.display = "none";
        }
    }
}

function closePizzaModal(){
    // Get the modal
    const modal = document.getElementById("pizza-modal");
    modal.style.display = "none";
}

function selectPizza(pizzaName) {
    openPizzaModal(pizzaName)
}


function listCartItems() {
    orders.map((item, ind) => {
        
        const parentDiv = document.getElementById('cart-modal-body')

        const newChildDiv = document.createElement('div')
        newChildDiv.className = 'cart_item'

        const nameDiv = document.createElement('div')
        nameDiv.className="cart_item_col"
        nameDiv.innerHTML = item.pizzaName

        const sizeDiv = document.createElement('div')
        sizeDiv.className="cart_item_col"
        sizeDiv.innerHTML = item.size

        const crustDiv = document.createElement('div')
        crustDiv.className="cart_item_col"
        crustDiv.innerHTML = item.crust

        const toppingDiv = document.createElement('div')
        toppingDiv.className="cart_item_col"
        toppingDiv.innerHTML = item.topping

        const priceDiv = document.createElement('div')
        priceDiv.className="cart_item_col"
        priceDiv.innerHTML = item.price

        newChildDiv.appendChild(nameDiv)
        newChildDiv.appendChild(sizeDiv)
        newChildDiv.appendChild(crustDiv)
        newChildDiv.appendChild(toppingDiv)
        newChildDiv.appendChild(priceDiv)

        parentDiv.appendChild(newChildDiv)
    })
    document.getElementById('cart-modal-total-amount').innerHTML = totalordersCost
}

function updateCart() {
    const cartItemsLength = orders.length
    document.getElementById('cart_preview').innerHTML = "View Cart: " + cartItemsLength + " item(s)"
}

function showCart() {
    openCartModal();
    listCartItems();
}

function openCartModal() {
    // Get the modal
    const cartModal = document.getElementById("cart-modal");

    // Get the <span> element that closes the modal
    const cartSpan = document.getElementsByClassName("cart-close")[0];

    // When the user clicks on the button, open the modal
    cartModal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    cartSpan.onclick = function() {
        cartModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = "none";
        }
    }
}

function closeCartModal() {
    // Get the modal
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}

function openCheckoutModal() {
    //close previous modal
    closeCartModal()

    // Get the modal
    const checkoutModal = document.getElementById("checkout-modal");

    // Get the <span> element that closes the modal
    const checkoutSpan = document.getElementsByClassName("checkout-close")[0];

    // When the user clicks on the button, open the modal
    checkoutModal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    checkoutSpan.onclick = function() {
        checkoutModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == checkoutModal) {
            checkoutModal.style.display = "none";
        }
    }
}

function closeCheckoutModal() {
    // Get the modal
    const checkoutModal = document.getElementById("checkout-modal");
    checkoutModal.style.display = "none";
}

function onDeliverySelect() {
    // Get the modal
    const delivery = document.getElementById("delivery").value;
    console.log(delivery)
    if (delivery === 'deliver') {
        document.getElementById("location_group").style.display = "block"
        document.getElementById("delivery_text").style.display = "block"
    } else {
        document.getElementById("location_group").style.display = "none"
        document.getElementById("delivery_text").style.display = "none"
    }
}

function onComplete() {
    closeCheckoutModal()
    const delivery = document.getElementById("delivery").value;
    if (delivery === 'deliver') {
        alert("Your order will be delivered to your location")
    } else {
        alert("Your order has been placed")
    }
}

