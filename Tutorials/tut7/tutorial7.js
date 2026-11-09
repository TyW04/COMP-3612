import products from './data.json' with { type: 'json' };

// exercise 1 ... all your code in this tutorial will be within the DOMContentLoaded handler.
document.addEventListener("DOMContentLoaded", () => {
   // exercise 2
   const btn2 = document.querySelector("#btn2");
   let counter = 0;
   btn2.addEventListener("click", () => {
      counter++;
      const counterDisplay = document.querySelector("#span2");
      counterDisplay.textContent = counter;
   });

   // exercise 3
   const checkbox = document.querySelector("#demo3 input");
   checkbox.addEventListener("change", () => {
      const img = document.querySelector("#demo3 img");
      img.classList.toggle("hide");
   });

   // exercise 4
   const select = document.querySelector("#demo4 select");
   for (let product of products) {
      const option = document.createElement("option");
      option.textContent = product.title;
      select.appendChild(option);
   }

   select.addEventListener("change", () => {
      if (select.value != 0) {
         const span = document.querySelector("#span4");
         span.textContent = select.value;
      }
   });

   // exercise 5
   const table = document.querySelector("#demo5 table");
   for (let product of products) {
      const row = table.insertRow();
      const prodIDCell = row.insertCell();
      const prodTitleCell = row.insertCell();
      const prodPriceCell = row.insertCell();

      prodIDCell.textContent = product.id;
      prodTitleCell.textContent = product.title;
      prodPriceCell.textContent = product.price;

      row.addEventListener("click", clickedRow);
   }

   function clickedRow(e) {
      const prodName = e.target.textContent;
      alert(`you clicked ${prodName}`);
   }

});



