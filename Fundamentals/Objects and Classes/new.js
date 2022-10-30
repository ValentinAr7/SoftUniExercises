const items = [1, 3, 8];
const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// after
items.forEach((item) => {
  copyItems.push(item + 5)
})


