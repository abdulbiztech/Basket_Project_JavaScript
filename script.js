const basket1Count = document.querySelector(".basket-1 span");
const basket2Count = document.querySelector(".basket-2 span");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

const totalApples = 10;
let secondBasketApple = 0;
let firstBasketApple = totalApples - secondBasketApple;

basket1Count.innerText = firstBasketApple;
basket2Count.innerText = secondBasketApple;

rightArrow.addEventListener("click", () => {
  if (firstBasketApple > 0) {
    firstBasketApple--;
    secondBasketApple++;
    basket1Count.innerText = firstBasketApple;
    basket2Count.innerText = secondBasketApple;
  }
});
leftArrow.addEventListener("click", () => {
  if (secondBasketApple > 0) {
    firstBasketApple++;
    secondBasketApple--;
    basket1Count.innerText = firstBasketApple;
    basket2Count.innerText = secondBasketApple;
  }
});
