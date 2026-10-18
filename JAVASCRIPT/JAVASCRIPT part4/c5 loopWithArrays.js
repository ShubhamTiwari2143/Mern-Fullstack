let fruits = ["Apple", "Banana", "Cherry", "Guava", "orange", "Mango"];
fruits.push("Pineapple");
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

for (let j = fruits.length;j>=0; j--) {
  console.log(j, fruits[j]);
}