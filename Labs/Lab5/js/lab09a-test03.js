// array of shopping cart items
const shoppingCart = [];
let cartValue = 0;

document.addEventListener('DOMContentLoaded',  () => {
   /* add code after this comment */
   function cartItem(id, name, price, quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;      
   }

   function addItemToCart(item) {
      // Find if the item is already in the cart, if yes, increase quantity and return
      for (let cartItem of shoppingCart) {
         if (cartItem.id == item.id) {
            cartItem.quantity++;
            return cartItem;
         }
      }

      shoppingCart.push(item);
      return item;
   }

   function totalCartItems() {
      let sum = 0;
      for (let item of shoppingCart) {
         sum += item.quantity;
      }
      return sum;
   }

   function newCartItem(item) {
      const cartItem = document.createElement("div");
      cartItem.classList = "cart-item";
      const itemInfo = document.createElement("div");
      itemInfo.classList = "item-info";

      const itemName = document.createElement("p");
      itemName.classList = "item-name";
      itemName.textContent = `${item.name} x ${item.quantity}`;
      itemInfo.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.classList = "item-price";
      itemPrice.textContent = `$${item.price}`;
      itemInfo.appendChild(itemPrice);

      cartItem.appendChild(itemInfo);

      return cartItem;
   }

   function updateCartDisplay(item) {
      const panel = document.querySelector(".cart-panel");

      // Update cart quantity
      const header = panel.querySelector("#cartCount");
      header.textContent = totalCartItems();

      const cartItems = panel.querySelectorAll(".cart-item");
      // Determine if item already exists in the cart
      if (item.quantity > 1) {
         
         for (let cartItem of cartItems) {
            const itemName = cartItem.querySelector(".item-name");

            if ((itemName.textContent).includes(item.name)) {
               itemName.textContent = `${item.name} x ${item.quantity}`;
            }
         }

      } else {
         const cartItems = panel.querySelector(".cart-items");
         const cartItem = newCartItem(item);
         cartItems.appendChild(cartItem);
      }

      // Update price
      cartValue += Number(item.price);
      const cartTotal = panel.querySelector("#totalAmount");
      cartTotal.textContent = `$${cartValue.toFixed(2)}`;

   }

   function hideEmptyCartMsg() {
      const emptyCartMsg = document.querySelector(".empty-cart");
      emptyCartMsg.style.display = "none";
   }
 
   // Add event listeners for "Add to Cart" buttons
   const btnsList = document.querySelectorAll(".products-grid button");
   for (let btn of btnsList) {
      btn.addEventListener('click', () => {
         const btnData = btn.dataset;
         let item = new cartItem(btnData.id, btnData.name, btnData.price, 1);
         
         if (shoppingCart.length < 1) {
            hideEmptyCartMsg();
         }

         item = addItemToCart(item);
         console.log(item.name);
         updateCartDisplay(item);
      });
   }
});