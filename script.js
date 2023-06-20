const wrapper = document.querySelector('.sliderWrapper');

const menuItems = document.querySelectorAll('.menuItem');

const products = [
  {
    id: 1,
    title: 'Nike Air Max Plus',
    price: '3.599.000',
    colors: [
      {
        code: 'black',
        img: './img/shoes/nike-air-max-plus.png',
      },
      {
        code: 'gray',
        img: './img/shoes/nike-air-max-plus2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Nike Blazer Jumbo SE',
    price: '4.199.000',
    colors: [
      {
        code: 'green',
        img: './img/shoes/nike-blazer.png',
      },
      {
        code: 'lightgray',
        img: './img/shoes/nike-blazer2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Nike Air Max 90',
    price: '3.299.000',
    colors: [
      {
        code: 'seagreen',
        img: './img/shoes/nike-max.png',
      },
      {
        code: 'darkslateblue',
        img: './img/shoes/nike-max2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'Nike Air Max 270',
    price: '3.799.000',
    colors: [
      {
        code: 'darkgray',
        img: './img/shoes/nike-pegasus.png',
      },
      {
        code: 'white',
        img: './img/shoes/nike-pegasus2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'Nike Waffle Debut',
    price: '4.699.000',
    colors: [
      {
        code: 'rgb(160,159,154)',
        img: './img/shoes/nike-waffle.png',
      },
      {
        code: 'black',
        img: './img/shoes/nike-waffle2.png',
      },
    ],
  },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector('.productImage');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //changes the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //changes the chosen product
    chosenProduct = products[index];

    //changes the texts of current product
    currentProductTitle.textContent = chosenProduct.title.toUpperCase();
    currentProductPrice.textContent = chosenProduct.price + '₫';
    currentProductImg.src = chosenProduct.colors[0].img;

    //changes the style of product by selected color
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';
    size.style.color = 'white';
  });
});

const productButton = document.querySelector('.productButton');
const payment = document.querySelector('.payment');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
  payment.style.display = 'flex';
});
close.addEventListener('click', () => {
  payment.style.display = 'none';
});
