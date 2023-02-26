const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let sum = 0;
let posCount = 0;
let negCount = 0;
let oddPosCount = 0;
let evenPosCount = 0;
let evenPosSum = 0;
let oddPosSum = 0;
let posProd = 1;
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
    posCount++;
    posProd *= arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] % 2 === 0) {
      evenPosCount++;
      evenPosSum += arr[i];
    } else {
      oddPosCount++;
      oddPosSum += arr[i];
    }
  } else {
    negCount++;
  }
}

let min = arr[0];
let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
    minIndex = i;
  }
}

let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    maxIndex = i;
  }
}

console.log(`Сума позитивних елементів: ${sum}`);
console.log(`Кількість позитивних єлементів: ${posCount}`);
console.log(`Мінімальний елемент: ${min}, його номер: ${minIndex}`);
console.log(`Максимальний елемент: ${max}, його номер: ${maxIndex}`);
console.log(`Кількість негативних елементів: ${negCount}`);
console.log(`Кількість непарних позитивних елементів: ${oddPosCount}`);
console.log(`Кількість парних позитивних елементів: ${evenPosCount}`);
console.log(`Сума парних позитивних елементів: ${evenPosSum}`);
console.log(`Сума непарних позитивних елементів: ${oddPosSum}`);
console.log(`Добуток позитивних елементів: ${posProd}`);

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== max) {
    arr[i] = 0;
  }
}

console.log(`Підсумок: ${arr}`);
