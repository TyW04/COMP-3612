import products from './data.json' with { type: 'json' };

// verify the products array was created from the json file
console.log(products);

// exercise 1
function ex1() {
    const link = document.querySelector("#link");
    link.href = "https://www.cbc.ca/news";
    link.textContent = "CBC News";
}


// exercise 2
function ex2() {
    const demo2Node = document.querySelector("#demo2");
    const newImg = document.createElement("img");
    newImg.setAttribute("src", "sample.jpg");
    newImg.setAttribute("alt", "some old dude");
    demo2Node.appendChild(newImg);
}


// exercise 3
function ex3() {
    const ulNode = document.querySelector("#prodList");
    for (let product of products) {
        const li = document.createElement("li");
        li.textContent = product.title;
        ulNode.appendChild(li);
    }
}

// exercise 4
function ex4() {
    const prodImg = document.querySelector("#demo4 .product-card__image");
    prodImg.src = products[0].thumbnail;
    const prodTitle = document.querySelector("#demo4 .product-card__title");
    prodTitle.textContent = products[0].title;
    const prodPrice = document.querySelector("#demo4 .product-card__price");
    prodPrice.textContent = products[0].price;
}

// exercise 5
function ex5() {
    const cardList = document.querySelector("#cardList");
    for (let product of products) {
        const li = document.createElement("li");
        li.className = "product-card";

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = product.table;
        img.className = "product-card__image";

        const div1 = document.createElement("div");
        div1.className = "product-card__body";

        const title = document.createElement("h3");
        title.textContent = product.title;
        title.className = "product-card__title"

        const price = document.createElement("p");
        price.textContent = product.price;
        price.className = "product-card__price";

        div1.appendChild(title);
        div1.appendChild(price);

        li.appendChild(img);
        li.appendChild(div1);
        
        cardList.appendChild(li);
    }
}

function main() {
    ex1();
    ex2();
    ex3();
    ex4();
    ex5();
}

main();