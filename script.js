"use strict";

// let arr = [ "25", "34", "41", "27", "45", "11" ];
// arr.forEach((item) => {
//   if (item.startsWith('2') || item.startsWith('4')) {
//     console.log(item);
//   }
// });

nextNum:
for (let i = 2; i <= 100; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNum;
  }
  console.log(i + ' Делители этого числа: 1 и ' + i);
}