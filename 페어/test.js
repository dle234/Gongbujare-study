// 재고 정리

let products = [
  { name: "어린왕자", num: 3, price: 1000 },
  { name: "데미안", num: 3, price: 6000 },
  { name: "인어공주", num: 3, price: 10000 },
  { name: "백설공주", num: 3, price: 1800 },
  { name: "변신", num: 3, price: 9000 },
];
const sortByPrice = () => {
  const list = products.sort(function (a, b) {
    return a.price - b.price;
  });
  console.log(list);
};
const sortByPriceSwap = () => {
  const list = products.sort(function (a, b) {
    return b.price - a.price;
  });
  console.log(list);
};

//수량추가
const addBook = (name, number) => {
  let newList = products.findIndex((product) => product.name == name);
  products[newList].num += number;
  console.log(products);
};
//수량 뺴기
const subBook = (name, number) => {
  let newList = products.findIndex((product) => product.name == name);
  products[newList].num -= number;
  console.log(products);
};

//수량 없는거 제거하기
const removeProduct = (list) => {
  let updateList = list.filter((element) => element.num !== 0);
  console.log(updateList);
};

// subBook("인어공주", 3);
// removeProduct(products);

const viewProduct = (name) => {
  let viewlist = products.filter((element) => element.name == name);
  console.log(viewlist);
};

viewProduct("변신");
