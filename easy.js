const num = [1, 4, 7];

function getAvg(num) {
  const total = num.reduce((acc, c) => acc + c, 0);
  return total / num.length;
}

const average = getAvg(num);
console.log(average);
