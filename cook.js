let counter = 0;

let cookiePump = 1;

// let add = (function () {
//   let counter = 0;
//     counter++;
//   };
// })();

document.querySelector(".count").addEventListener("click", function () {
  counter += cookiePump;
  console.log(counter);
  document.querySelector(".counter").innerHTML = `${counter} cookies`;
});

// if (counter > 10) {
//   counter += 2;
// }

document.querySelector(".upgrade").addEventListener("click", function () {
  cookiePump++;
});
