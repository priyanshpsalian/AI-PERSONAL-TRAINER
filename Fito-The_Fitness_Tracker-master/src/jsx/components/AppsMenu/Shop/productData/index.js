import allProduct from "./allProducts.js";

const productData = [...allProduct];

const shuffle = (a) => {
   for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
   }
};

shuffle(productData);

export default productData;
