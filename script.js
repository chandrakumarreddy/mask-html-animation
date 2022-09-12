// const common = document.querySelector(".common");

// common.onclick = () => {
//   common.classList.toggle("animate");
// };

const mask = document.querySelector("#mask");
const source = document.querySelector(".source");
mask.onclick = () => {
  mask.classList.toggle("mask1");
  source.classList.toggle("animate");
};
