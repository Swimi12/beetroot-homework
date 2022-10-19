// Products list
const productsList = [
  {
    name: "Apple",
    price: 5,
    count: 2,
    bought: true,
  },
  {
    name: "Bananas",
    price: 7,
    count: 10,
    bought: false,
  },
  {
    name: "Orange",
    price: 7,
    count: 1,
    bought: true,
  },
  {
    name: "Orange1",
    price: 7,
    count: 1,
    bought: true,
  },
  {
    name: "Orange2",
    price: 7,
    count: 1,
    bought: true,
  },
  {
    name: "Orange3",
    price: 7,
    count: 1,
    bought: true,
  },
];
// * Add new product
const newProduct = () => {
  productsList.push({
    name: prompt("Enter name of product"),
    price: +prompt("Enter price of product"),
    count: +prompt("Enter amount of product"),
    bought: confirm("You already bought this?"),
  });
  return productsList;
};
//* Sort array

productsList.sort(function (a, b) {
  // Two variant
  // if (a.bought < b.bought) {
  //   return -1;
  // }
  return a.bought - b.bought;
});
console.log(productsList);

//* Change bought status
const buyingProduct = () => {
  productsList.find((product) => product.name === nameProduct).bought = true;
  console.log(productsList);
};

// * Delete product from list
const deleteFromList = (nameProduct) => {
  for (let product of productsList) {
    if (product.name === nameProduct) {
      console.log(productsList.splice(productsList.indexOf(product), 1));
    }
  }
};

// * Add product or count++
const addProduct = (name) => {
  for (let product of productsList) {
    if (product.name === name) {
      product.count++;
      return console.log(productsList);
    } else {
      return newProduct();
    }
  }
};

//
// function sumProduct() {
//   for (let i = 0; i < productList.length; i++) {
//     productList[i].sum = productList[i].price * productList[i].amount;
//   }
// }
