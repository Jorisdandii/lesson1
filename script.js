// 7kyu 1chi

// function getCount(str) {
//   let vowelsCount = 0;
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }
// =====================================================================

// =====================================================================
// function getCount(str) {
//   var vowelsCount = 0;
//   for (index in str) {
//     switch (str[index]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         vowelsCount++;
//         break;
//     }
//   }
//   return vowelsCount;
// }
// ======================================================================

// ======================================================================
// const set = new Set([1, 2,]);
// set.add([5, 6, 7])
// set.delete([5, 6, 7].split(''));
// console.log(set);
// ======================================================================

// 2023.04.04
// =======================================================================
//  mijoz do'kon azosi bo'lsa unga 20% ask berilsin bo'lmasa 5% aks berilsin
// let mijoz = "azo emas";
// let resilt = mijoz !== 'azo emas' ? '%20' : '%5';
// console.log(resilt,'sizga aksiya',);
// =======================================================================

// =======================================================================
// &&
// xozirgi soatni aniqlaymiz
// let date = new Date();
// let hour = date.getHours();
// let minute = date.getMinutes();
// console.log('Hour: ', hour, ', Minute: ', minute);
// let isOfficeOpen = (hour >= 11 && minute >= 30) ? " siz bir kunda nimani o'rgandingiz?" : "Kech bo'ldi uxlang"
// console.log(isOfficeOpen);
// =======================================================================

// =======================================================================
//  o'zgaruvchilarni bir biriga almashtirish
// let color1 = 'oq';
// let color2 = "qora";
// let colorvaqtincha = color1;
// color1 = color2;
// color2 = colorvaqtincha;
// console.log(color1);
// console.log(color2);
// ========================================================================
