const fruit = [
  'apples',
  'oranges',
  'grapes',
  'pears',
  'peaches',
  'cherries',
  'grapes',
  'bananas'
];

const nums = [1,2,3,4,5,6,7,8,9,10];

const oddNums = nums.filter(x => x%2 === 1);

const iLike = fruit.map(x => `I like ${x} because they're delicious.\n`);

const double = (x) => {
  return x * 2;
};

console.info('the double of x: ',double(3)+'\n');
console.info(`These are the odd numbers: ${oddNums}\n`);
console.info(iLike);
